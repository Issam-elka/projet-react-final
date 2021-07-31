import React from 'react';
import Product from './Product';

export default function Main(props) {
    const { products, onAdd } = props;
    return (
        <main className="block col-10 m-auto bg-light p-5">
            <h2 className="text-center pb-4">Produits</h2>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
}