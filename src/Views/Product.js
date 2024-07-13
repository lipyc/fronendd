import React from 'react';

function Product({ name, description, price }) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><strong>{price}</strong></p>
            </div>
        </div>
    );
}

export default Product;
