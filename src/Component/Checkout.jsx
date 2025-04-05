import React from 'react'
import S1 from '../Component/assets/checkout.png'
const Checkout = () => {
  return (
   <>
    <img src={S1} className="img-fluid w-100" alt="checkout" />
    <div className="container my-5">
      <div className="row">
        {/* Billing Details Form */}
        <div className="col-lg-7 col-md-12">
          <h4>Billing details</h4>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-3">
            <label>Company Name (Optional)</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Country / Region</label>
            <select className="form-select">
              <option>Sri Lanka</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Street address</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Town / City</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Province</label>
            <select className="form-select">
              <option>Western Province</option>
            </select>
          </div>
          <div className="mb-3">
            <label>ZIP code</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Phone</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Additional information</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Order Summary & Payment */}
        <div className="col-lg-5 col-md-12 mt-5 mt-lg-0">
          <div className="card p-4" style={{borderStyle:"none"}}>
            <h5>Product</h5>
            <div className="d-flex justify-content-between  pb-2">
              <span>Asgaard sofa × 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="d-flex justify-content-between py-2">
              <strong>Total</strong>
              <strong className="text-warning">Rs. 250,000.00</strong>
            </div>

            <div className="mt-4">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="payment" id="bankTransfer" checked />
                <label className="form-check-label" htmlFor="bankTransfer">
                  Direct Bank Transfer
                </label>
              </div>
              <p className="small text-muted ms-4">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>

              <div className="form-check">
                <input className="form-check-input" type="radio" name="payment" id="cashOnDelivery" disabled />
                <label className="form-check-label text-muted" htmlFor="cashOnDelivery">
                  Cash On Delivery
                </label>
              </div>
            </div>

            <p className="small text-muted mt-3">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.
            </p>

            <button className="btn btn-dark w-100 mt-3">Place order</button>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Checkout