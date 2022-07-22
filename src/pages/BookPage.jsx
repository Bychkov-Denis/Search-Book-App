import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/UI/loading/Loading';

const BookPage = () => {

    const [book, setBook] = useState({});

    const {bookId} = useParams();

    const fetchBook = () => {
        fetch("https://www.googleapis.com/books/v1/volumes/" + bookId)
            .then(response => response.json())
            .then(book => setBook(book))
            .catch(error => console.log(error.message));
    }

    console.log(book)

    useEffect(() => {
        fetchBook();
    }, [])

    return (
        book === undefined ? 
            <Loading /> : 

            <div>
                <div className="book-container">
                    <div className="image-container">
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                    </div>
                    <div className="information">
                        <div className="categories">{book.volumeInfo.categories === undefined ? "" : book.volumeInfo.categories.join(' / ')}</div>
                        <h1 className="name">{book.volumeInfo.title}</h1>
                        <div className="author">{(book.volumeInfo.authors !== undefined) ? book.volumeInfo.authors.map(author => <span key={author}>{author}</span>) : ""}</div>
                        <div className="description">{book.volumeInfo.description.replace(/<\/?[^>]+>/g,'') || null}</div>
                    </div>
                </div>
            </div>
    );
}

export default BookPage;
