import { useState } from "react";
import React from 'react';

export function Homepage({ pizzas }) {

  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');

  return (
    <div>
      <div className="row">
        <div className="col-md-4 cont">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <h5 className="card-name">{pizzas.name}</h5>
            <img src={pizzas.image} className='pizza-image' />

            <div className='ft-container'>
              <div>
                <p>Varients</p>
                <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value); }}>{pizzas.varients.map(varient => {
                  return <option value={varient}>{varient}</option>;
                })}</select>
              </div>
              <div>
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value); }}>
                  {[...Array(10).keys()].map((_x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="ft-buy">
              <div>
                <span className='price'>Price : {pizzas.prices[0][varient] * quantity} Rs/- </span>
              </div>
              <div>
                <button type='submit' className='btn' onClick={addtocart}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

