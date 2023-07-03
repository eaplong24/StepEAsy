import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './components/CartContext';

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const cartItemCount = cartItems.length;
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
        <nav className="navbar navbar-expand-lg fixed-top navbarcolor justify-content-center px-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex me-auto" style={{ fontWeight: 'bold' }}>Step<span style={{ color: '#df1b3f' }}>EA</span>sy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active hover-underline-animation" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hover-underline-animation" to="/men" role="button" aria-expanded="false">
                    Men
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hover-underline-animation" to="/unisex" role="button" aria-expanded="false">
                    Unisex
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hover-underline-animation" to="/aboutUs" aria-expanded="false">
                    About Us
                    </Link>
                </li>
                </ul>
                <ul className="nav navbar-nav">
                <li className="nav-item">
                    <a className="nav-link hover-underline-animation" href="#" role="button" aria-expanded="false">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link hover-underline-animation" role="button" aria-expanded="false" onClick={openModal}>
                    <i className="fa-solid fa-user" style={{ color: "#ffffff", fontWeight: "900px" }}></i>
                    </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hover-underline-animation" to="/mycart" role="button" aria-expanded="false">
                    <i className="fa-solid fa-cart-shopping fa-shake" style={{ color: "#ffffff", position: "relative" }}>
                        <span style={{ position: "absolute", top: "-10px", right: "-10px", backgroundColor: "#ff0000", color: "#ffffff", borderRadius: "50%", padding: "4px", fontSize: "10px" }}>
                        {cartItemCount}
                        </span>
                    </i>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        {showModal && (
            <div className="modal">
            <div className='modal-content' id='navModal-content' style={{maxWidth:'80%'}}>
                <form className="row g-3 needs-validation d-flex" noValidate>
                <div className="col-12">
                    <div className="form-outline">
                    <input type="text" className="form-control" id="validationCustom01" required />
                    <label htmlFor="validationCustom01" className="form-label">Username</label>
                    <div className="valid-feedback">Looks good!</div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-outline">
                    <input type="password" className="form-control" id="validationCustom02" required />
                    <label htmlFor="validationCustom02" className="form-label">Password</label>
                    <div className="invalid-feedback">Please provide a valid password.</div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn w-100" 
                        type="submit"
                        style={{backgroundColor:'#19204E', color:'white'}}
                    >
                        Log In
                    </button>
                </div>
                <hr className="col-12" />
                <div className="col-12">
                    <button className="btn w-100" 
                        type="button" 
                        onClick={closeModal}
                        style={{backgroundColor:'#df1b3f', color:'white'}}
                    >
                        <Link to='logIn'
                            >Create New Account
                        </Link>
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </div>
    );
};

export default Navbar;
