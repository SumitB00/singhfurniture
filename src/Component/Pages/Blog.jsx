import React from 'react'
import Banner from '../assets/blog banner.png'
import Lapi from '../assets/lapi.png'
import Write from '../assets/write.png'
import Tab from '../assets/tab.png'
import Sum1 from '../assets/blog1.png'
import Sum2 from '../assets/blog2.png'
import Sum3 from '../assets/blog3.png'
import Sum4 from '../assets/blog4.png'
import Sum5 from '../assets/blog5.png'
import Accordion from 'react-bootstrap/Accordion';
export const Blog = () => {
  return (
    <>
   <img src={Banner} class="img-fluid w-100" alt="Banner" />
   <section class="container my-5">
        <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-12">
                <div class="mb-5">
                    <img src={Lapi} class="img-fluid" alt="Blog Image"/>
                    <p class="text-muted mt-2">
                        <i class="bi bi-person-fill"></i> Admin 
                        <i class="bi bi-calendar-fill ms-3"></i> 14 OCT 2022 
                        <i class="bi bi-tag-fill ms-3"></i> Wood
                    </p>
                    <h2>Going all-in with millennial design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <Accordion defaultActiveKey="0">
      <Accordion.Item  style={{border:"none",borderTop:"none",borderLeft:"none",borderRight:"none"}}>
        <Accordion.Header >Read More</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          im veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item >
       
        
      </Accordion.Item>
    </Accordion>
                </div>
                <div class="mb-5">
                    <img src={Write} class="img-fluid" alt="Blog Image"/>
                    <p class="text-muted mt-2">
                        <i class="bi bi-person-fill"></i> Admin 
                        <i class="bi bi-calendar-fill ms-3"></i> 14 OCT 2022 
                        <i class="bi bi-tag-fill ms-3"></i> Wood
                    </p>
                    <h2>Exploring new ways of decorating</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <Accordion defaultActiveKey="0">
      <Accordion.Item  style={{border:"none",borderTop:"none",borderLeft:"none",borderRight:"none"}}>
        <Accordion.Header >Read More</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          im veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item >
       
        
      </Accordion.Item>
    </Accordion>
                </div>
                <div>
                    <img src={Tab} class="img-fluid" alt="Blog Image"/>
                    <p class="text-muted mt-2">
                        <i class="bi bi-person-fill"></i> Admin 
                        <i class="bi bi-calendar-fill ms-3"></i> 14 OCT 2022 
                        <i class="bi bi-tag-fill ms-3"></i> Wood
                    </p>
                    <h2>Handmade pieces that took time to make</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <Accordion defaultActiveKey="0">
      <Accordion.Item  style={{border:"none",borderTop:"none" ,borderBottom:"none"}}>
        <Accordion.Header >Read More</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          im veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item >
       
        
      </Accordion.Item>
    </Accordion>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12">
                <h4>Categories</h4>
                <ul class="list-group list-group-flush text-muted">
                    <li class="list-group-item d-flex justify-content-between">Crafts <span>2</span></li>
                    <li class="list-group-item d-flex justify-content-between">Design <span>8</span></li>
                    <li class="list-group-item d-flex justify-content-between">Handmade <span>1</span></li>
                    <li class="list-group-item d-flex justify-content-between">Interior <span>1</span></li>
                    <li class="list-group-item d-flex justify-content-between">Wood <span>6</span></li>
                </ul>
                <h4 class="mt-4">Recent Posts</h4>
                <div class="d-flex align-items-center my-3">
                    <img src={Sum1} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Exploring new ways of decorating</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
                <div class="d-flex align-items-center my-3">
                    <img src={Sum2} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Handmade pieces that took time to make</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
                <div class="d-flex align-items-center my-3">
                    <img src={Sum3} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Modern home in Milan</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
                <div class="d-flex align-items-center my-3">
                    <img src={Sum4} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Going all-in with millennial design</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
                <div class="d-flex align-items-center my-3">
                    <img src={Sum5} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Colorful office redesign</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
