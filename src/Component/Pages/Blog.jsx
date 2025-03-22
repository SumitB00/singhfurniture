import React from 'react'
import banner from '../assets/blog banner.png'
import lapi from '../assets/lapi.png'
import write from '../assets/write.png'
import tab from '../assets/tab.png'
import sum1 from '../assets/blog1.png'
import sum2 from '../assets/blog2.png'
import sum3 from '../assets/blog3.png'
import sum4 from '../assets/blog4.png'
import sum5 from '../assets/blog5.png'
export const Blog = () => {
  return (
    <>
   <img src={banner} class="img-fluid w-100" alt="Banner" />
   <section class="container my-5">
        <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-12">
                <div class="mb-5">
                    <img src={lapi} class="img-fluid" alt="Blog Image"/>
                    <p class="text-muted mt-2">
                        <i class="bi bi-person-fill"></i> Admin 
                        <i class="bi bi-calendar-fill ms-3"></i> 14 OCT 2022 
                        <i class="bi bi-tag-fill ms-3"></i> Wood
                    </p>
                    <h2>Going all-in with millennial design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <a href="#" class="text-decoration-underline text-dark h5">Read More</a>
                </div>
                <div class="mb-5">
                    <img src={write} class="img-fluid" alt="Blog Image"/>
                    <p class="text-muted mt-2">
                        <i class="bi bi-person-fill"></i> Admin 
                        <i class="bi bi-calendar-fill ms-3"></i> 14 OCT 2022 
                        <i class="bi bi-tag-fill ms-3"></i> Wood
                    </p>
                    <h2>Exploring new ways of decorating</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <a href="#" class="text-decoration-underline text-dark h5">Read More</a>
                </div>
                <div>
                    <img src={tab} class="img-fluid" alt="Blog Image"/>
                    <p class="text-muted mt-2">
                        <i class="bi bi-person-fill"></i> Admin 
                        <i class="bi bi-calendar-fill ms-3"></i> 14 OCT 2022 
                        <i class="bi bi-tag-fill ms-3"></i> Wood
                    </p>
                    <h2>Handmade pieces that took time to make</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <a href="#" class="text-decoration-underline text-dark h5">Read More</a>
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
                    <img src={sum1} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Exploring new ways of decorating</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
                <div class="d-flex align-items-center my-3">
                    <img src={sum2} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Handmade pieces that took time to make</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
                <div class="d-flex align-items-center my-3">
                    <img src={sum3} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Modern home in Milan</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
                <div class="d-flex align-items-center my-3">
                    <img src={sum4} class="img-thumbnail" width="80"/>
                    <div class="ms-3">
                        <h6>Going all-in with millennial design</h6>
                        <p class="text-muted">03 Aug 2022</p>
                    </div>
                </div>
                <div class="d-flex align-items-center my-3">
                    <img src={sum5} class="img-thumbnail" width="80"/>
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
