import React from 'react'

const Footer = () => {
  return (
  <div className="footer-distributed">
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="footer-left">
          <h3 style={{ fontWeight: 'bolder' }}>Step<span style={{ color: '#df1b3f' }}>EA</span>sy</h3>
          <p className="footer-company-name">Copyright © 2023</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="footer-center">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>Redco Village, Butuan City</p>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>+639-123-45678</p>
          </div>
          <div>
            <i className="fa-solid fa-envelope fa-lg"></i>
            <p href="#">support@stepEAsy.com</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-4">
        <div className="footer-right">          
            <a href="#"><i className="fa-brands fa fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa fa-github"></i></a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer