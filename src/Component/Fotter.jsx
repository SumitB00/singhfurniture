import React from 'react'

const Fotter = () => {
  return (
    <>
    <footer class="text-center text-lg-start bg-body-tertiary text-muted">
 

 <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-5">

   <div class="me-5 d-none d-lg-block">
    
   </div>
  
   {/* <div>
     <a href="" class="me-4 text-reset">
       <i class="fab fa-facebook-f"></i>
     </a>
     <a href="" class="me-4 text-reset">
       <i class="fab fa-twitter"></i>
     </a>
     <a href="" class="me-4 text-reset">
       <i class="fab fa-google"></i>
     </a>
     <a href="" class="me-4 text-reset">
       <i class="fab fa-instagram"></i>
     </a>
     <a href="" class="me-4 text-reset">
       <i class="fab fa-linkedin"></i>
     </a>
     <a href="" class="me-4 text-reset">
       <i class="fab fa-github"></i>
     </a>
   </div> */}

 </section>

 <section class="">
   <div class="container text-center text-md-start mt-5">

     <div class="row mt-3">
       
       <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
         <h1 class="text-uppercase fw-bold mb-4">
           Funiro
         </h1>
         <br />

         <p>
         400 University Drive Suite 200 Coral <br /> Gables, <br />
         FL 33134 USA
         </p>
       </div>
      
       <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
         <h6 class="text-uppercase fw-bold mb-4">
           Links
         </h6>
         <br />
         <p style={{fontWeight:"600",color:"black"}}>
           <a href="#!" class="text-reset" style={{textDecoration:"none"}}>Home</a>
         </p>
         <br />
         <p style={{fontWeight:"600",color:"black"}}>
           <a href="#!" class="text-reset"  style={{textDecoration:"none"}}>Shop</a>
         </p>
         <br />
         <p style={{fontWeight:"600",color:"black"}}>
           <a href="#!" class="text-reset"  style={{textDecoration:"none"}}>About</a>
         </p>
         <br />
         <p style={{fontWeight:"600",color:"black"}}>
           <a href="#!" class="text-reset"  style={{textDecoration:"none"}}>Contact</a>
         </p>
       </div>
       
       <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
         <h6 class="text-uppercase fw-bold mb-4">
                   Helps
         </h6>
         <br />
         <p style={{fontWeight:"600",color:"black"}}>
           <a href="#!" class="text-reset" style={{textDecoration:"none"}}>Payment Option</a>
         </p>
         <br />
         <p style={{fontWeight:"600",color:"black"}}>
           <a href="#!" class="text-reset" style={{textDecoration:"none"}}>Returns</a>
         </p>
         <br />
         <p style={{fontWeight:"600",color:"black"}}>
           <a href="#!" class="text-reset" style={{textDecoration:"none"}}>Privacy Policies</a>
         </p>
       
       </div>
     
       <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
   
         <h6 class="text-uppercase fw-bold mb-4">News Letter</h6>
         <input type="text" placeholder='Enter Your Email Address'  style={{borderTop:"none" ,borderLeft:"none", borderRight:"none" , width:"65%",backgroundColor:"F8F9FA"}}/>
        <button style={{marginLeft:"10px",borderTop:"none",borderLeft:"none",borderRight:"none",backgroundColor:"F8F9FA"}}>SUBSCRIBE</button>
       </div>

     </div>
     
   </div>
   
 </section>
 <div className='container'>
 <hr/>
 </div>
 <br />
 
</footer>
    </>
  )
}

export default Fotter