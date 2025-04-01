import React from 'react'
import sum from '../assets/contact.png'

import sum5 from '../assets/1.png'
import sum6 from '../assets/2.png'
import sum7 from '../assets/3.png'
import sum8 from '../assets/4.png'

const Contact = () => {
  return (
    <>
     <img src={sum} class="img-fluid w-100" alt="Banner" />
     <div className="container py-5">
      <h2 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '3%' }}>Get In Touch With Us</h2>
      <p style={{ textAlign: 'center', color: '#c3c3c3' }}>
        For more information about our product & services, please feel free to drop us an email.
        <br />
        Our staff will always be there to help you out. Do not hesitate!
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="mb-4">
            <i className="bi bi-geo-alt-fill h4"></i>
            <h4 style={{ display: 'inline-block', marginLeft: '5%' }}>Address</h4>
            <p style={{ marginLeft: '5%' }}>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className="mb-4">
            <i className="bi bi-telephone-fill h4"></i>
            <h4 style={{ display: 'inline-block', marginLeft: '5%' }}>Phone</h4>
            <p style={{ marginLeft: '5%' }}>
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>
          </div>
          <div>
            <i className="bi bi-clock-fill h4"></i>
            <h4 style={{ display: 'inline-block', marginLeft: '5%' }}>Working Time</h4>
            <p style={{ marginLeft: '5%' }}>
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" id="name" placeholder="ABC" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" placeholder="abc@gmail.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input type="text" className="form-control" id="subject" placeholder="This is optional" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" rows="4" placeholder="Hi, I'd like to ask about..."></textarea>
            </div>
            <button
              type="submit"
              className="btn w-100 text-white"
              style={{ backgroundColor: '#b88e2f', border: 'none', borderRadius: '4px', height: '35px' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

      <div class=" py-5"  style={{backgroundColor:"#FAF3EA"}}>
    <div class="container" >
        <div class="row text-center">
            <div class="col-sm-6 col-md-3">
                <img src={sum5} class="feature-icon" alt='sum5'/>
                <h4>High Quality</h4>
                <p>Crafted from top materials</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={sum6} class="feature-icon" alt='sum6'/>
                <h4>Warranty Protection</h4>
                <p>Over 2 years</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={sum7} class="feature-icon" alt='sum7'/>
                <h4>Free Shipping</h4>
                <p>Order over $150</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={sum8} class="feature-icon" alt='sum8'/>
                <h4>24/7 Support</h4>
                <p>Dedicated support</p>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Contact