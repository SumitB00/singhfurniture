import React from 'react'
import sum from '../assets/assgard1.png'

import sum2 from '../assets/chair.png'
import star from '../assets/Group 88.png'
import sum3 from '../assets/chair1.png'
import sum4 from '../assets/chair2.png'
import sum5 from '../assets/chair3.png'
import sum6 from '../assets/chair4.png'
import sofa from '../assets/sofa.png'
import s1 from '../assets/img1.png'
import s2 from '../assets/img2.png'
import s3 from '../assets/img3.png'
import s4 from '../assets/img4.png'
const Asgard = () => {
  return (
    <>
    
    <img src={sum} class="img-fluid w-100" alt="Banner" />
    <section className='mt-5'>
  <div className='row'>
    <div className='col-lg-4 col-md-6'>
      <img src={sum3} className="img-fluid mx-auto d-block" alt="Sum 3" /> <br />
      <img src={sum4} className="img-fluid mx-auto d-block" alt="Sum 4" /> <br />
      <img src={sum5} className="img-fluid mx-auto d-block" alt="Sum 5" /> <br />
      <img src={sum6} className="img-fluid mx-auto d-block" alt="Sum 6" /> <br />
    </div>
    <div className='col-lg-4 col-md-6'>
      <img src={sum2} className="img-fluid" alt="Sum 2" />
    </div>
    <div className='col-lg-4 col-md-12'>
      <h2>Asgaard sofa</h2>
      <h3 style={{ color: "#9F9F9F" }}>Rs. 250,000.00</h3>
      <img src={star} alt="Star Rating" /> <p style={{ color: "#9F9F9F" }}>5 Customer Reviews</p>
      <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
      <br />
      <p style={{ color: "#9F9F9F" }}>Size</p>
      <button className="btn" style={{ backgroundColor: "#B88E2F", color: "white" }}>L</button>
      <button className="btn btn-light mx-1">XL</button>
      <button className="btn btn-light">XS</button>
      <br /><br />
      <p style={{ color: "#9F9F9F", marginTop: "3%" }}>Color</p>
      <button className="btn" style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#816DFA", border: "none" }}></button>
      <button className="btn" style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "3%", backgroundColor: "#000000", border: "none" }}></button>
      <button className="btn" style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "2%", backgroundColor: "#B88E2F", border: "none" }}></button>
      <br /><br />
      <button className="btn btn-outline-secondary"> + 1 -</button>
      <button className="btn btn-outline-secondary"> Add To Cart</button>
      <button className="btn btn-outline-secondary"> + Compare</button>
      <br /><br /><br />
      <hr />
    </div>
  </div>
</section>
<br />
<br />
<hr />
<section className='container'>
  <div className='row'>
    <div className='col-md-4'><h4>Description</h4></div>
    <div className='col-md-4'><h4 style={{ color: "#9F9F9F" }}>Additional Information</h4></div>
    <div className='col-md-4'><h4 style={{ color: "#9F9F9F" }}>Reviews [5]</h4></div>
  </div>
</section>
<br />
<br />
<br />
<div className='container'>
  <p style={{ color: "#9F9F9F" }}>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p> <br />
  <p style={{ color: "#9F9F9F" }}>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
</div>
<br />
<br />
<section className='container'>
  <div className='row'>
    <div className='col-md-6'>
      <img src={sofa} className="img-fluid" alt="Sofa" />
    </div>
    <div className='col-md-6'>
      <img src={sofa} className="img-fluid" alt="Sofa" />
    </div>
  </div>
</section>
<br />
<br />
<hr />
<br />
<br />
<center>
  <h2>Related Products</h2>
</center>
<div className='container'>
<div class="row g-4">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="dropdown">
                    <a href="/asgard"><img src={s1} alt="Syltherine" class="img-fluid"/></a>
                    <div class="dropdown-content p-3">
                        <h3>Syltherine</h3>
                        <p>Outdoor bar table and stool</p>
                        <p>Rp- 2.500.000</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="dropdown">
                    <a href="/asgard"><img src={s2} alt="Leviosa" class="img-fluid"/></a>
                    <div class="dropdown-content p-3">
                        <h3>Leviosa</h3>
                        <p>Stylish cafe chair</p>
                        <p>Rp- 2.500.000</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="dropdown">
                    <a href="/asgard"><img src={s3} alt="Lolito" class="img-fluid"/></a>
                    <div class="dropdown-content p-3">
                        <h3>Lolito</h3>
                        <p>Luxury big sofa</p>
                        <p>Rp- 7.000.000</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="dropdown">
                    <a href="/asgard"><img src={s4} alt="Respira" class="img-fluid"/></a>
                    <div class="dropdown-content p-3">
                        <h3>Respira</h3>
                        <p>Outdoor bar table and stool</p>
                        <p>Rp- 500.000</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
<br />
<br />
<br />
<center>
  <button className="btn" style={{ color: "#B88E2F", borderColor: "#B88E2F", width: "170px", height: "40px", marginTop: "3.5%" }}> Show More</button>
</center>
<br />
<br />
<br />
    </>
  )
}

export default Asgard