import React, { useContext, useState } from 'react';
import { CartContext } from './components/CartContext';

const MyCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleCheckboxChange = (event, itemId) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  const handleDeleteItem = (itemId) => {
    removeFromCart(itemId);
    setSelectedItems(selectedItems.filter((id) => id !== itemId));
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
  };

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const calculateItemTotal = (item) => {
    const quantity = quantities[item.id] || 1;
    return item.price * quantity;
  };

  const calculateCartTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      if (selectedItems.includes(item.id)) {
        total += calculateItemTotal(item);
      }
    }
    return total;
  };

  return (
    <div className="myCart">
      <h1 style={{textAlign:'center'}}>My Cart</h1>
      {cartItems.length === 0 ? (
        <p style={{textAlign:'center'}}>No items in the cart</p>
      ) : ( 
        <div className="row d-flex" >
          {/* <ul className='col-md-12 col-lg-9 col-xl-9' id='cartItems'> */}
          <div className='col-12 col-lg-8 col-xl-9' id='cartItemsList'>
            <ul id='cartItems'>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <label className='row' style={{textAlign:'center', alignItems:'center'}}>
                    <div className='col-2 col-md-1 col-xl-1'>
                      <input
                        type="checkbox"
                        value={item.id}
                        checked={selectedItems.includes(item.id)}
                        onChange={(e) => handleCheckboxChange(e, item.id)}
                      />
                    </div>
                    <div className='col-10 col-md-4 col-xl-3' >
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className='col-12 col-md-6 col-xl-4' >
                      <h4 className='mb-3'>{item.name}</h4>
                      <p style={{color:'#df1b3f'}}>Price: ${item.price}</p>
                    </div>
                    <div className='col-6 col-md-4 col-xl-2'> 
                      <p >
                        Qty: <br />
                        <input
                          type="number"
                          id={`quantity-${item.id}`}
                          name={`quantity-${item.id}`}
                          min="1"
                          max="10"
                          value={quantities[item.id] || 1}
                          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        />
                      </p>
                    </div>
                    <div className='col-6 col-md-4 col-xl-1'>
                      <p>Total: <br />${calculateItemTotal(item)}</p>
                    </div>
                    <div className='col-12 col-md-4 col-xl-1'>
                      <i onClick={() => handleDeleteItem(item.id)} 
                        className="fa-solid fa-trash fa-xl" 
                        style={{fontWeight:'bolder'}}>
                      </i>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-12 col-lg-4 col-xl-3' id='cartComputationDiv'>
            <div id='cartComputation'>
              {/* <div className='col-md-12 col-lg-3 col-xl-3' id='cartComputation'> */}
              <h5>Order Summary</h5>
              <div>
                <p>Cart Total: ${calculateCartTotal()}</p>
                <p>Discount:</p>
                <p>Shipping Charge:</p>
                <p>Estimated Tax:</p>
                <hr />
                <h5>Grand Total: ${calculateCartTotal()}</h5>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default MyCart;