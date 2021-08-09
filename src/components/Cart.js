import React from 'react';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 1000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    
    return (
        <aside >
            {/* // Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">MON PANIER</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                {cartItems.length === 0 && <div>Panier vide</div>}
                                {cartItems.map((item) => (
                                    <div key={item.id} className="row">
                                        <div className="col-4 fs-4">{item.name}</div>
                                        <div className="col-4 d-flex">
                                            <button onClick={() => onRemove(item)} className="remove">
                                                -
                                            </button>{' '}
                                            <button onClick={() => onAdd(item)} className="add text-white">
                                            +
                                            </button>
                                        </div>

                                        <div className="col-2 text-right">
                                            {item.qty} x {item.price.toFixed(2)} €
                                        </div>
                                    </div>
                                ))}

                                {cartItems.length !== 0 && (
                                    <>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-4">Prix du produit</div>
                                            <div className="col-2 text-right">{itemsPrice.toFixed(2)} €</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">Taxes</div>
                                            <div className="col-2 text-right">{taxPrice.toFixed(2)} €</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">Prix livraison</div>
                                            <div className="col-2 text-right">
                                                {shippingPrice.toFixed(2)} €
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-2">
                                                <strong>Prix total</strong>
                                            </div>
                                            <div className="col-2 text-right">
                                                <strong>{totalPrice.toFixed(2)} €</strong>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">

                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div class="modal-footer d-flex">
                            <button type="button" class="btnModal btn-secondary w-25" data-bs-dismiss="modal">Fermer</button>
                            <button class="btnModal w-25" onClick={() => alert('App en construction! Je suis en vacances..')}>Acheter</button>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    );
}