import React from 'react';
import './shoppingCar.css';

export default function ShoppingCar() {
  return (
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 class="modal-title fs-5" id="staticBackdropLabel">Your Shopping Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
          </div>
          <div className="modal-body">
            {2 && <div>Your cart is empty.</div>}
              <div className="cart-item">
                <div>name</div>
                <div>
                  5 x $ 6
                </div>
              </div>
          </div>
          <div className="modal-footer">
            <div>Total: $</div>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
            <button type="button" className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
