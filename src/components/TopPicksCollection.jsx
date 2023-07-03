import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import useShoeData from './useShoeData';
import { Link } from "react-router-dom";

const TopPicksCollection = () => {
  const shoesData = useShoeData();
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addToCart, cartItems } = useContext(CartContext);

  // Filter the shoesData array to include only shoes with ID 11 and 12
  const topPicks = shoesData.filter((shoe) => [11, 12, 31, 26].includes(shoe.id));

  const openModal = (shoe) => {
    setSelectedShoe(shoe);
    setShowModal(false);
  };

  const closeModal = () => {
    setSelectedShoe(null);
    setShowModal(false);
  };

  const handleAddToCart = () => {
    const alreadyInCart = cartItems.some((item) => item.id === selectedShoe.id);

    if (alreadyInCart) {
      setShowModal(true);
    } else {
      addToCart(selectedShoe);
      console.log('Added to Cart:', selectedShoe);
    }
  };

  const buyNow = () => {
    const alreadyInCart = cartItems.some((item) => item.id === selectedShoe.id);

    if (alreadyInCart) {
      setShowModal(true);
    } else {
      addToCart(selectedShoe);
      console.log('Added to Cart:', selectedShoe);
      // Redirect to the cart page or perform any other action for "Buy Now"
    }
  };

  return (
    <div className='topPickCollection'>
      <h1 style={{textAlign:'center', marginBottom:'25px'}}>Top Picks</h1>
      <div className='card-container'>
        {topPicks.map((shoe, index) => (
          // <div className='col-12 col-md-4' >
            <div className='card' style={{ mixBlendMode: 'multiply' }} key={index}>
              <img src={shoe.image} alt={shoe.name} onClick={() => openModal(shoe)} />
              <span style={{ zIndex: '1', padding: '10px' }}>{shoe.name}</span>
            </div>
          // </div>
        ))}
      </div>
      {selectedShoe && (
        <div className='modal'>
          <div className='modal-content' style={{maxWidth:'80vw'}}>
            <div className='row' style={{ alignItems: 'center' }}>
              <div className='col-12 col-md-5'>
                <img src={selectedShoe.image} alt={selectedShoe.name} />
              </div>
              <div className='col-12 col-md-7'>
                <h2>{selectedShoe.name}</h2>
                <h4 style={{color:'#df1b3f'}}>Price: ${selectedShoe.price}</h4>
                <h5>Rate: {selectedShoe.rating.rate}</h5><br />
                <p style={{ fontSize: '20px' }}>{selectedShoe.description}</p>
                {!showModal && (
                  <>
                    <button onClick={handleAddToCart} style={{ backgroundColor: '#19204E', color: 'white' }}>Add to Cart</button>
                    <button onClick={buyNow} style={{ backgroundColor: '#df1b3f', color: 'white', textDecoration: 'none' }}> 
                      <Link to='/myCart' >Buy Now</Link>
                    </button>
                    <br />
                  </>
                )}
                {showModal && (
                  <div className='modal'>
                    <div className='modal-content' style={{ alignItems: 'center', maxWidth: '400px' }}>
                      <h3>Already in My Cart</h3>
                      <button onClick={closeModal}>Close</button>
                    </div>
                  </div>
                )}
                <button className='closeBtn' onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopPicksCollection;
