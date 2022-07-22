import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({image, title, categories, authors, id}) => {

    const navigate = useNavigate();

    return (
        <div className="card" style={{height: "450px", cursor: "pointer", backgroundColor: "rgb(243, 242, 241)"}} onClick={() => navigate(`/book-${id}`)}>
            <img className="card-img-top" src={image} alt={title} style={{height: "200px", width: "60%", margin: "10px auto"}}/>
            <div className="card-body">
              <h5 className="card-title">{title || null}</h5>
              <h6 className="card-subtitle mb-2 text-muted text-decoration-underline">{categories ? categories[0] : null}</h6>
              <p className="card-text text-muted">{authors ? authors.join(", ") : null }</p>
            </div>
        </div>
    );
}

export default BookCard;
