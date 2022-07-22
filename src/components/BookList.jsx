import React from 'react';
import BookCard from './BookCard';

const BookList = ({books, limit, changeLimit}) => {
    return (
        <>  
            <p className="fs-2 fw-bold text-center my-2">Found {books.length || 0} results</p>
            <div className="grid-container">
                {books?.slice(0, limit).map(book =>
                    <BookCard key={book.id} id={book.id} image={book.volumeInfo.imageLinks?.thumbnail} title={book.volumeInfo.title} categories={book.volumeInfo.categories} authors={book.volumeInfo.authors}/>
                )}
            </div>
            <button type="button" className="btn btn-outline-dark text-center mb-3 mx-auto d-block" onClick={changeLimit}>Load more</button>
        </>
    );
}

export default BookList;
