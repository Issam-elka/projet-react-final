import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div className="block col-3 text-center">
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price">{product.price} €</div>
            <div>
                <button className="btn text-white" onClick={() => onAdd(product)}>Ajouter au panier</button>
            </div>
        </div>
    );
}