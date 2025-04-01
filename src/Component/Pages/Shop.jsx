import React from 'react'
import Sum from '../assets/Group 78.png'
import sum1 from '../assets/img1.png'
import sum2 from '../assets/img2.png'
import sum3 from '../assets/img3.png'
import sum4 from '../assets/img4.png'
import Sum5 from '../assets/1.png'
import Sum6 from '../assets/2.png'
import Sum7 from '../assets/3.png'
import Sum8 from '../assets/4.png'

import '../Pages/Home.css'
export const Shop = () => {
  return (
    <>
    <img src={Sum} class="img-fluid w-100" alt="Banner" />
    <section class="product py-5">
    <div class="container">
        <div class="text-center mb-4">
            <h1 class="fw-bold">Our Products</h1>
        </div>
        
        <div class="row g-4">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="dropdown">
                    <a href="/asgard"><img src={sum1} alt="Syltherine" class="img-fluid"/></a>
                    <div class="dropdown-content p-3">
                        <h3>Syltherine</h3>
                        <p>Outdoor bar table and stool</p>
                        <p>Rp- 2.500.000</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="dropdown">
                    <a href="/asgard"><img src={sum2} alt="Leviosa" class="img-fluid"/></a>
                    <div class="dropdown-content p-3">
                        <h3>Leviosa</h3>
                        <p>Stylish cafe chair</p>
                        <p>Rp- 2.500.000</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="dropdown">
                    <a href="/asgard"><img src={sum3} alt="Lolito" class="img-fluid"/></a>
                    <div class="dropdown-content p-3">
                        <h3>Lolito</h3>
                        <p>Luxury big sofa</p>
                        <p>Rp- 7.000.000</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="dropdown">
                    <a href="/asgard"><img src={sum4} alt="Respira" class="img-fluid"/></a>
                    <div class="dropdown-content p-3">
                        <h3>Respira</h3>
                        <p>Outdoor bar table and stool</p>
                        <p>Rp- 500.000</p>
                    </div>
                </div>
            </div>
        </div>
        


        
        <div class="text-center " style={{marginTop:"12%"}}>
            <button class="btn btn-primary">Read More</button>
        </div>
    </div>
</section>
    
    <br />
    <br />
    

    <div class=" py-5"  style={{backgroundColor:"#FAF3EA"}}>
    <div class="container" >
        <div class="row text-center">
            <div class="col-sm-6 col-md-3">
                <img src={Sum5} class="feature-icon"  alt='sum5'/>
                <h4>High Quality</h4>
                <p>Crafted from top materials</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={Sum6} class="feature-icon" alt='sum6'/>
                <h4>Warranty Protection</h4>
                <p>Over 2 years</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={Sum7} class="feature-icon" alt='sum7'/>
                <h4>Free Shipping</h4>
                <p>Order over $150</p>
            </div>
            <div class="col-sm-6 col-md-3">
                <img src={Sum8} class="feature-icon" alt='sum8'/>
                <h4>24/7 Support</h4>
                <p>Dedicated support</p>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
