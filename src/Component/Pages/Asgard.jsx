import React from 'react';
import Sum from '../assets/assgard1.png';
import Sum2 from '../assets/chair.png';
import Star from '../assets/Group 88.png';
import Sum3 from '../assets/chair1.png';
import Sum4 from '../assets/chair2.png';
import Sum5 from '../assets/chair3.png';
import Sum6 from '../assets/chair4.png';
import Sofa from '../assets/sofa.png';
import S1 from '../assets/img1.png';
import S2 from '../assets/img2.png';
import S3 from '../assets/img3.png';
import S4 from '../assets/img4.png';

const Asgard = () => {
  return (
    <>
      {/* Banner */}
      <img src={Sum} className="img-fluid w-100" alt="Banner" />

      {/* Product Section */}
      <section className="container my-5">
        <div className="row">
          {/* Small Images */}
          <div className="col-lg-2 col-md-3 col-sm-12 mb-4">
            {[Sum3, Sum4, Sum5, Sum6].map((img, idx) => (
              <img key={idx} src={img} className="img-fluid d-block mb-3 mx-auto" alt={`Chair ${idx}`} />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="col-lg-5 col-md-9 col-sm-12 mb-4">
            <img src={Sum2} className="img-fluid" alt="Main Chair" />
          </div>

          {/* Product Details */}
          <div className="col-lg-5 col-12">
            <h2>Asgaard Sofa</h2>
            <h4 className="text-secondary">Rs. 250,000.00</h4>
            <img src={Star} alt="Rating" />
            <p className="text-secondary">5 Customer Reviews</p>
            <p>
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs.
            </p>

            {/* Size */}
            <p className="text-secondary">Size</p>
            <div className="mb-3">
              <button className="btn btn-warning text-white me-2">L</button>
              <button className="btn btn-light me-2">XL</button>
              <button className="btn btn-light">XS</button>
            </div>

            {/* Color */}
            <p className="text-secondary">Color</p>
            <div className="mb-4">
              <button className="btn me-2" style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: '#816DFA' }}></button>
              <button className="btn me-2" style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: '#000000' }}></button>
              <button className="btn" style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: '#B88E2F' }}></button>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-outline-secondary">+ 1 -</button>
              <button className="btn btn-outline-secondary">Add To Cart</button>
              <button className="btn btn-outline-secondary">+ Compare</button>
            </div>

            <hr className="mt-5" />
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container">
        <div className="row text-center mb-4">
          <div className="col-md-4">
            <h5>Description</h5>
          </div>
          <div className="col-md-4 text-secondary">
            <h5>Additional Information</h5>
          </div>
          <div className="col-md-4 text-secondary">
            <h5>Reviews [5]</h5>
          </div>
        </div>
        <div className="text-secondary">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes
            the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting
            the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero.
          </p>
        </div>
      </section>

      {/* Sofa Images */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <img src={Sofa} className="img-fluid" alt="Sofa" />
          </div>
          <div className="col-md-6 mb-3">
            <img src={Sofa} className="img-fluid" alt="Sofa" />
          </div>
        </div>
      </section>

      <hr />

      {/* Related Products */}
      <section className="container text-center">
        <h2 className="mb-4">Related Products</h2>
        <div className="row g-4">
          {[S1, S2, S3, S4].map((img, index) => {
            const products = ['Syltherine', 'Leviosa', 'Lolito', 'Respira'];
            const descriptions = ['Outdoor bar table and stool', 'Stylish cafe chair', 'Luxury big sofa', 'Outdoor bar table and stool'];
            const prices = ['Rp- 2.500.000', 'Rp- 2.500.000', 'Rp- 7.000.000', 'Rp- 500.000'];
            return (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="text-center">
                  <a href="/asgard"><img src={img} alt={products[index]} className="img-fluid mb-3" /></a>
                  <h5>{products[index]}</h5>
                  <p className="text-secondary">{descriptions[index]}</p>
                  <p>{prices[index]}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="btn btn-outline-warning mt-5" style={{ width: '170px' }}>
          Show More
        </button>
      </section>

      <br /><br />
    </>
    
  );
};

export default Asgard;
