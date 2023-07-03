import React, { useState, useContext } from 'react';
import { CartContext } from './components/CartContext';
import useShoeData from './components/useShoeData';
import { Link } from 'react-router-dom';

const Unisex = () => {
  const shoesData = useShoeData();
  const { addToCart, cartItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(null);

  // Filter the shoesData array to include only shoes with specific IDs
  const unisexShoes = shoesData.filter((shoe) =>
    [1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 16, 18, 19, 20].includes(shoe.id)
  );

  const handleCardClick = (shoe) => {
    setSelectedShoe(shoe);
    setShowModal(false);
  };

  const handleAddToCart = (shoe) => {
    const alreadyInCart = cartItems.some((item) => item.id === shoe.id);

    if (alreadyInCart) {
      setSelectedShoe(shoe);
      setShowModal(true);
    } else {
      addToCart(shoe);
      console.log(`Added shoe with ID ${shoe.id} to the cart.`);
    }
  };

  const handleBuyNow = (shoe) => {
    const alreadyInCart = cartItems.some((item) => item.id === shoe.id);

    if (alreadyInCart) {
      setSelectedShoe(shoe);
      setShowModal(true);
    } else {
      addToCart(shoe);
      console.log(`Purchased shoe with ID ${shoe.id}.`);
      // Redirect to the cart page or perform any other action for "Buy Now"
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedShoe(null);
  };

  return (
    <div className="unisex mt-5">
      <h1 style={{padding:'20px', textAlign:'center'}}>Unisex Shoes</h1>
      <div className="row" style={{maxWidth:'1600px', display:'flex', margin:'auto'}}>
        <div className="col-12 col-md-3">
          <h4>Shop by Brand</h4>
          <input type="checkbox" id="puma" name="brand" value="puma" />
          <label htmlFor="puma">Puma</label><br />
          <input type="checkbox" id="adidas" name="brand" value="adidas" />
          <label htmlFor="adidas">Adidas</label><br />
          <input type="checkbox" id="nike" name="brand" value="nike" />
          <label htmlFor="nike">Nike</label><br /> 
          <hr />

          <h4>Shop by Price</h4>
          <input type="checkbox" id="under400" name="price" value="under400" />
          <label htmlFor="under400">Under 400</label><br />
          <input type="checkbox" id="401-800" name="price" value="401-800" />
          <label htmlFor="401-800">401-800</label><br />
          <input type="checkbox" id="801-1200" name="price" value="801-1200" />
          <label htmlFor="801-1200">801-1200</label><br />
          <input type="checkbox" id="1201-1600" name="price" value="1201-1600" />
          <label htmlFor="1201-1600">1201-1600</label><br />
          <hr />
        </div>
        <div className='col-9'>
          <div className='card-container'>
            {unisexShoes.map((shoe) => (
              // <div className="col-4" >
                <div
                  className='card'
                  style={{ cursor: 'pointer', backgroundColor: 'transparent', mixBlendMode:'multiply' }}
                  onClick={() => handleCardClick(shoe)}
                  key={shoe.id}
                >
                  <img src={shoe.image} alt={shoe.name} />
                  <div className="card-body" style={{zIndex:'1'}}>
                    <h5>{shoe.name}</h5>
                    <h6 style={{color:'#df1b3f'}}>Price: ${shoe.price}</h6>
                  </div>
                </div>
              // </div>
            ))}
          </div>
        </div>
      </div>

      {selectedShoe && (
        <div className='modal'>
        {/* <div className={`modal ${showModal ? 'show' : ''}`}> */}
          <div className="modal-content" style={{maxWidth:'80vw'}}>
            <div className='row' style={{alignItems:'center'}}>
              <div className='col-12 col-md-5'>
                <img src={selectedShoe.image} alt={selectedShoe.name} className="modal-image" />
              </div>
              <div className='col-12 col-md-7'>
                <div className="modal-details">
                <h2>{selectedShoe.name}</h2>
                <h4 style={{color:'#df1b3f'}}>Price: ${selectedShoe.price}</h4>
                <h5>Rate: {selectedShoe.rating.rate}</h5>
                <p style={{fontSize:'20px'}}> {selectedShoe.description}</p>
                <h5>Sold: {selectedShoe.rating.count} pcs</h5>
                {!showModal && (
                  <>
                    <button onClick={() => handleAddToCart(selectedShoe)} style={{backgroundColor:'#19204E', color:'white'}}>
                      Add to Cart
                    </button>
                    
                      <button onClick={() => handleBuyNow(selectedShoe)} style={{backgroundColor:'#df1b3f'}}><Link to="/myCart">
                        Buy Now
                        </Link>
                      </button>
                    
                    <button onClick={closeModal}>
                      Close
                    </button>
                  </>
                )}
                {showModal && (
                  <div className='modal' >
                    <div className='modal-content'style={{alignItems:'center', maxWidth:'400px'}}>
                      <h3>Already in My Cart</h3>
                      <button onClick={closeModal}>Close</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Unisex;
