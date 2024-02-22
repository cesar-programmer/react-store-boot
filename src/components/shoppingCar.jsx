import React, { useContext } from 'react';
import './shoppingCar.css';
import CartContext from '../context'

export default function ShoppingCar() {
  const context = useContext(CartContext);
  const cart = context.cart;

  return (
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 class="modal-title fs-5" id="staticBackdropLabel">Your Shopping Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
          </div>
          <div className="modal-body">
              {cart.length === 0 ? (
                <div>Your cart is empty.</div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div>{item.product.title}</div>
                    <div>
                      {item.quantity} x ${item.product.price}
                    </div>
                  </div>
                ))
              )}
            </div>
          <div className="modal-footer">
            <div>Total: ${context.total}</div>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
            <button type="button" className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
