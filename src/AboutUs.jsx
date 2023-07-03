import React from 'react';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className="row" id='aboutUs-content' style={{ maxWidth: '1500px'}}>
          <div className="col-12 col-md-3">
            <div
              className="nav flex-column nav-pills text-center"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-mdb-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                About Us
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-mdb-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                
              >
                The Team
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-mdb-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
                
              >
                Location
              </a>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h1 className="text-4xl font-bold" style={{textAlign:'center'}}>About Us</h1>
                <p className="mb-4">
                  Welcome to StepEAsy, your go-to online destination for stylish and comfortable footwear.
                  We believe that finding the perfect pair of shoes should be effortless and enjoyable, and that's exactly what we aim to provide.
                </p>
                <p className="mb-4">
                  At StepEAsy, we curate a diverse collection of shoes from renowned brands, ensuring the highest quality and latest trends.
                  Whether you're looking for athletic sneakers, elegant heels, casual flats, or sturdy boots, we have something for every style and occasion.
                </p>
                <p className="mb-4">
                  Our team of shoe enthusiasts is dedicated to delivering exceptional customer service.
                  We strive to make your shopping experience seamless by offering user-friendly navigation, secure payment options, and timely delivery.
                </p>
                <p className="mb-4">
                  We understand that finding the right fit is crucial when it comes to shoes.
                  That's why we provide detailed size charts, along with helpful guides to assist you in making the perfect choice.
                </p>
                <p className="mb-4">
                  If you have any questions or need assistance, our customer support team is always ready to help.
                  Feel free to reach out to us through our contact page.
                </p>
                <p className="mb-4">Thank you for choosing StepEAsy. We look forward to being a part of your shoe journey!</p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="row" style={{textAlign:'center'}}>
                  <h1 className="text-4xl font-bold">The Team</h1>
                  <div className="col-12 col-lg-6">
                    <img src='./img/prof1a.png' alt="Team Member 1" />
                    <h3>Efren Albert Rosales</h3>
                    <p>Co-Founder</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img src='./img/prof2a.png' alt="Team Member 2" />
                    <h3>Mc Matt San Balbuena</h3>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                Messages content
              </div>
            </div>
          </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
