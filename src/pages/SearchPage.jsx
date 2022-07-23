import React, { useState, useEffect } from 'react';
import Header from '../components/UI/header/Header';
import BookList from '../components/BookList';
import Loading from '../components/UI/loading/Loading';

const SearchPage = () => {

    const APIKEY = "AIzaSyBd1UcD7pCsU8EEHI1FhhhE3OY0TcxHapI";

    const [books, setBooks] = useState([]);
    const [currentBooks, setCurrentBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("React");
    const [sortMethod, setSortMethod] = useState("relevance");
    const [limit, setLimit] = useState(4);
    const [isBooksLoading, setIsBooksLoading] = useState(false);

    const fetchBooks = async () => {
        setLimit(8);
        setIsBooksLoading(true);
        try {
            const data = await fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${searchQuery}&orderBy=${sortMethod}&key=${APIKEY}`);
            const books = await data.json();
            setBooks(books.items);
            setCurrentBooks(books.items);
            setIsBooksLoading(false);
        } catch(error) {
            console.log(error);
        }
    }


    const getQuery = searchQuery => {
        setSearchQuery(searchQuery);
    }

    const filteredByCategory = category => {
        if(category === "All") {
            setCurrentBooks(books);
            return;
        }
        setCurrentBooks(books.filter(book => book.volumeInfo.categories?.includes(category)))
    }

    const sortBooks = sortMethod => {
        setSortMethod(sortMethod);
        fetchBooks();
    }

    const changeLimit = () => {
        limit >= books.length ? alert("No more books") : setLimit(limit + 8);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <>
            <Header getQuery={getQuery} fetchBooks={fetchBooks} sortBooks={sortBooks} filteredByCategory={filteredByCategory}/>
            {isBooksLoading ? <Loading /> : <BookList books={currentBooks} limit={limit} changeLimit={changeLimit}/>}
        </>
    );
}

export default SearchPage;
