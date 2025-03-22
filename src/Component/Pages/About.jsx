  import React from 'react'
  import Sum from '../assets/product comparsion.png'
  import Sum1 from '../assets/Group 156.png'
  import Sum2 from '../assets/Group 157.png'
  import Start from '../assets/Group 88.png'
import Sum5 from '../assets/1.png'
import Sum6 from '../assets/2.png'
import Sum7 from '../assets/3.png'
import Sum8 from '../assets/4.png'
import '../Pages/Home.css'
  const About = () => {
    return (
      <>
      <img src={Sum} class="img-fluid w-100" alt="Banner" />

<section class="container mt-5">
    <div class="row text-center text-md-start">
        <div class="col-sm-6 col-md-3 d-flex flex-column align-items-center">
            <h4>Go to Product Page for more Products</h4>
            <button class="btn btn-outline-secondary">View More</button>
        </div>
        <div class="col-sm-6 col-md-3">
            <img src={Sum1} class="img-fluid" alt="Asgaard Sofa"/>
            <h4>Asgaard Sofa</h4>
            <h5>Rs. 250,000.00</h5>
            <h6>4.5 <img src={start} class="feature-icon" /></h6>
        </div>
        <div class="col-sm-6 col-md-3">
            <img src={Sum2} class="img-fluid" alt="Outdoor Sofa Set"/>
            <h4>Outdoor Sofa Set</h4>
            <h5>Rs. 224,000.00</h5>
            <h6>4.5 <img src={Start} class="feature-icon" /></h6>
        </div>
        <div class="col-sm-6 col-md-3 d-flex flex-column align-items-center">
            <h4>Add A Product</h4>
            <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">Choose a Product</button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Product 1</a></li>
                    <li><a class="dropdown-item" href="#">Product 2</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="container my-5 border-top py-4">
    <div class="row text-center text-md-start">
        <div class="col-sm-6 col-md-3">
            <h3>General</h3>
            <p>Sales Package: 1 sectional sofa</p>
            <p>Material: Solid Wood</p>
            <p>Upholstery: Fabric + Cotton</p>
        </div>
        <div class="col-sm-6 col-md-3">
            <h3>Product Details</h3>
            <p>Filling: Foam</p>
            <p>Finish Type: Matte</p>
            <p>Origin: India</p>
        </div>
        <div class="col-sm-6 col-md-3">
            <h3>Dimensions</h3>
            <p>Width: 265cm</p>
            <p>Height: 76cm</p>
            <p>Depth: 167cm</p>
        </div>
        <div class="col-sm-6 col-md-3 text-center text-md-start">
            <h3>Warranty</h3>
            <p>1 Year Manufacturing Warranty</p>
            <button class="btn btn-warning w-100 w-md-auto">Add To Cart</button>
        </div>
    </div>
</section>

<div class=" py-5"  style={{backgroundColor:"#FAF3EA"}}>
    <div class="container" >
        <div class="row text-center">
            <div class="col-sm-6 col-md-3">
                <img src={Sum5} class="feature-icon"/>
                <h4>High Quality</h4>
                <p>Crafted from top materials</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={Sum6} class="feature-icon"/>
                <h4>Warranty Protection</h4>
                <p>Over 2 years</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={Sum7} class="feature-icon"/>
                <h4>Free Shipping</h4>
                <p>Order over $150</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={Sum8} class="feature-icon"/>
                <h4>24/7 Support</h4>
                <p>Dedicated support</p>
            </div>
        </div>
    </div>
</div>

      </>
    )
  }

  export default About