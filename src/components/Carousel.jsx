import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel" style={{ marginTop: '90px', marginBottom: '50px' }}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='./img/nike1.jpg' className="d-block w-100" style={{ filter: 'brightness(85%)' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get the best deals now!</h5>
              <p>Sign up now to get our free shipping voucher on your first order</p>
              {/* <div className="slider-btn">
                <button className="btn btn-1">Shop now</button>
                <button className="btn btn-2">Sign up</button>
              </div> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src='./img/puma1.jpg' className="d-block w-100" style={{ filter: 'brightness(70%)' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get the best deals now!</h5>
              <p>Sign up now to get our free shipping voucher on your first order</p>
              {/* <div className="slider-btn">
                <button className="btn btn-1">Shop now</button>
                <button className="btn btn-2">Sign up</button>
              </div> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src='./img/adidas.jpg' className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get the best deals now!</h5>
              <p>Sign up now to get our free shipping voucher on your first order</p>
              {/* <div className="slider-btn">
                <button className="btn btn-1">Shop now</button>
                <button className="btn btn-2">Sign up</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
