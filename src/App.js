import './App.css';
import { useState } from "react";
import React from 'react';

const PizzaData = [
  {
    "name": "PIZZA BASE",
    "varients": [
      "small",
      "medium",
      "large"
    ],
    "prices": [
      {
        "small": "29",
        "medium": "69",
        "large": "99"
      }
    ],
    "category": "Pizza Base",
    "image": "https://5.imimg.com/data5/RV/MJ/MY-16339859/pizza-base-500x500.jpg",
    "description": "Whole wheat pizza base is made using 100% quality whole wheat flour using a traditional recipe."
  },
  {
    "name": "SAUCE",
    "varients": [
      "small",
      "medium",
      "large"
    ],
    "prices": [
      {
        "small": "19",
        "medium": "49",
        "large": "99"
      }
    ],
    "category": "Sauce",
    "image": "https://www.seriouseats.com/thmb/n8qFCLY7_Ri15VPMWqqsNDhTfzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-style-pizza-sauce-hero-02_1-3f6250e4db1b4681be34f8341edb3c50.JPG",
    "description": "No need to go in search of a slice joint. You can make a New York-style pizza at home any time you want, starting with this faithful and perfectly calibrated recipe for the sauce."
  },
  {
    "name": "MARGHERITA CHEESE PIZZA",
    "varients": [
      "small",
      "medium",
      "large"
    ],
    "prices": [
      {
        "small": "199",
        "medium": "399",
        "large": "599"
      }
    ],
    "category": [
      "Cheese Pizza",
      "Veg Pizza"
    ],
    "image": "https://www.dominos.co.in//files/items/Double_Cheese_Margherita.jpg",
    "description": "The first words that come to mind when we say ‘Italian’ are Margherita pizza."
  },
  {
    "name": "PEPPERONI CHEESE PIZZA",
    "varients": [
      "small",
      "medium",
      "large"
    ],
    "prices": [
      {
        "small": "349",
        "medium": "599",
        "large": "899"
      }
    ],
    "category": [
      "Cheese Pizza",
      "Non-Veg Pizza"
    ],
    "image": "https://www.dominos.co.in//files/items/MicrosoftTeams-image_(20).png",
    "description": "One of the must-try on domino’s menu, your pizza cravings are sure to get satisfied if you order a chicken pepperoni pizza."
  },
  {
    "name": "FOUR CHEESE PIZZA",
    "varients": [
      "small",
      "medium",
      "large"
    ],
    "prices": [
      {
        "small": "349",
        "medium": "649",
        "large": "949"
      }
    ],
    "category": "Cheese Pizza",
    "image": "https://media.istockphoto.com/id/1369090089/photo/delicious-pizza-formaji-with-provala-parmesan-mozzarella-gorgonzola-and-basil.jpg?s=612x612&w=0&k=20&c=7zWvEG4RkXPGKpWKFHmeis0hnNCudDAmt2bMqfja6hg=",
    "description": "Are you a cheese lover? Does the sight of gooey liquid cheese and a piping hot pizza, fresh from the oven make you happy? Then get ready to get your socks knocked off by the all new 4 cheese pizza."
  },
  {
    "name": "MUSHROOM CHEESE PIZZA",
    "varients": [
      "small",
      "medium",
      "large"
    ],
    "prices": [
      {
        "small": "149",
        "medium": "249",
        "large": "499"
      }
    ],
    "category": [
      "Cheese Pizza",
      "Veg Pizza"
    ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdvZBg3tQJ3wt6i9kvX1QrVaP6a2leopgqw&usqp=CAU",
    "description": "The BEST pizza for all cheese and mushroom lovers! Loaded with 2 types of cheese and garlic herb sautéed mushrooms!! AMAZING."
  },
  {
    "name": "CHICKEN GOLDEN DELIGHT PIZZA",
    "varients": [
      "small",
      "medium",
      "large"
    ],
    "prices": [
      {
        "small": "249",
        "medium": "499",
        "large": "699"
      }
    ],
    "category": [
      "Non-Veg Pizza"
    ],
    "image": "https://www.dominos.co.in//files/items/MicrosoftTeams-image_(14).png",
    "description": "The chicken golden delight is one such pizza from the range that is full of flavors, meaty toppings, and 100% mozzarella cheese."
  },
  {
    "name": "CHICKEN DOMINATOR PIZZA",
    "varients": [
      "small",
      "medium",
      "large"
    ],
    "prices": [
      {
        "small": "349",
        "medium": "709",
        "large": "999"
      }
    ],
    "category": [
      "Non-Veg Pizza"
    ],
    "image": "https://www.dominos.co.in//files/items/MicrosoftTeams-image_(11).png",
    "description": "Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers."
  }
]


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container-md'>
        {PizzaData.map(prl => <Homepage pizzas={prl} />)}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="#">Pizza App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

function Homepage({ pizzas }) {

  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState('small')

  return (
    <div className="row">
      <div className="col-md-4 cont">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <h5>{pizzas.name}</h5>
          <img src={pizzas.image} className='pizza-image' />

          <div className='ft-container'>
            <div>
              <p>Varients</p>
              <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>{pizzas.varients.map(varient => {
                return <option value={varient}>{varient}</option>
              })}</select>
            </div>
            <div>
              <p>Quantity</p>
              <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                {
                  [...Array(10).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>
                  })
                }
              </select>
            </div>
          </div>

          <div className="ft-buy">
            <div>
              <span className='price'>Price : {pizzas.prices[0][varient] * quantity} Rs/- </span>
            </div>
            <div>
              <button type='submit' className='btn'>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
