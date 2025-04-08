import React from 'react'
import '../Pages/Home.css'

// images
import Dining from '../assets/c.png'
import Living from '../assets/b.png'
import Bedroom from '../assets/a.png'


 

// products
import P1 from '../assets/img1.png'
import P2 from '../assets/img2.png'
import P3 from '../assets/img3.png'
import P4 from '../assets/img4.png'
import P5 from '../assets/img6.png'
import P6 from '../assets/img7.png'
import P7 from '../assets/img8.png'
import P8 from '../assets/img9.png'
import Share from '../assets/Share.png'
import Slider1 from '../assets/slider1.png'
import Slider2 from '../assets/slider2.png'
import Carousel from 'react-bootstrap/Carousel';
import B1 from '../assets/Rectangle 36 (1).png'
import B2 from "../assets/Rectangle 37 (1).png"
import B3 from "../assets/Rectangle 38 (1).png"
import B4 from "../assets/Rectangle 39.png"
import B5 from "../assets/Rectangle 40 (2).png"
import B6 from "../assets/Rectangle 41 (1).png"
import B7 from "../assets/Rectangle 42 (2).png"
import B8 from "../assets/Rectangle 43(1).png"
import B9 from '../assets/Rectangle 44 (1).png' 

 
const Home = () => {
    
  return (
    <>
      {/* hero section */}
      <section className='hero-section'>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="d-flex flex-column flex-md-row justify-content-end align-items-center">
                    <div className="hero-text text-center text-md-start">
                        <p className='mt-5 ms-5'>New Arrival</p>
                        <h1 className='ms-5'>Discover Our <br /> New Collection</h1>
                        <p className='mt-2 ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam dicta, dolores ipsam exercitationem tempore hic minus perspiciatis.</p>
                        <button className='btn btn-primary mt-3 ms-5'>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* browser range */}
<section className='py-5'>
    <div className="container">
        <div className='broswer-text text-center'>
            <h2 style={{ fontWeight: "600" }}>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='row'>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-4">
                <div>
                    <img src={Dining} alt="Dining" className="img-fluid" />
                    <h4 className='text-center'>Dining</h4>
                </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-4">
                <div>
                    <img src={Living} alt="Living" className="img-fluid" />
                    <h4 className='text-center'>Living</h4>
                </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-4">
                <div>
                    <img src={Bedroom} alt="Bedroom" className="img-fluid" />
                    <h4 className='text-center'>Bedroom</h4>
                </div>
            </div>
        </div>
    </div>
</section>

{/* product */}
<section className='product'>
    <div className="container">
        <div className='py-3'>
            <h1 className='text-center' style={{ fontWeight: "600" }}>Our Products</h1>
        </div>
            <div className='container'>
        <div className="row">
            {[P1, P2, P3, P4, P5, P6, P7, P8].map((product, index) => (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-4" key={index}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={product} alt={`Product ${index + 1}`} className="img-fluid" />
                            </div>
                            <div className="flip-card-back">
                                <h1>{`Product ${index + 1}`}</h1>
                                <p>{`Description for product ${index + 1}`}</p>
                                <p>{`Rp- ${Math.floor(Math.random() * 10000000)}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        <div className='d-flex justify-content-center product-btn py-3'>
            <button className='btn btn-secondary'>Read More</button>
        </div>
    </div>
</section>

{/* slider */}
<section className='product-slider mt-5'>
    <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-12 slider-text">
                <div className='slider-content mt-5 text-center text-md-start'>
                    <h2>50+ Beautiful rooms <br /> inspiration</h2>
                    <p className='mt-3'>Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you</p>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-12 mt-5">
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        width={"372px"} height={"486px"}/>
        <Carousel.Caption>
          <h3>Beautiful Living Room</h3>
          <p>Get inspired by our modern living room designs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
          width={"372px"} height={"486px"} />
        <Carousel.Caption>
          <h3>Cozy Bedroom</h3>
          <p>Relax in a peaceful and stylish bedroom.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="Third slide"
          width={"372px"} height={"486px"}/>
        <Carousel.Caption>
          <h3>Minimalist Kitchen</h3>
          <p>Modern and simple kitchen ideas for you.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
        </div>
    </div>
</section>
    {/* slider  ending*/}
    <div class="container-fluid">
    <img src={Share} class="img-fluid w-100 mt-5 d-block mx-auto" alt="Banner"/>
</div>

    </>
  )
}

export default Home