import React from 'react'

const Testimonial = () => {
  return (
    <>

      <div className="devman_tm_section">
        <div className="devman_tm_testimonials">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Testimonial</span>
              <h3>What Clients Say</h3>
              <p>
                In each of these cases, the pain is reprimanded in pleasure
              </p>
            </div>
            <div class="row test-func row-cols-1 row-cols-md-3 g-5">

              <div class="col">
                <div class="card card-bor card-testmonial ">
                  <i class="fa-solid fa-quote-left"></i>
                  <div class="card-body">
                    <p class="card-text">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                  <div className="card-body d-flex">
                    <div className='client-img'>
                      <img src="/image/3.jpg" className='client-img' width="50px" alt="" />
                    </div>
                    <div>
                      <h5 class="card-title">David Parker</h5>
                      <p class="card-text">Chart Expert</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card card-bor card-testmonial">
                  <i class="fa-solid fa-quote-left"></i>
                  <div class="card-body">
                    <p class="card-text">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                  <div className="card-body d-flex">
                    <div className='client-img'>
                      <img src="/image/4.jpg" className='client-img' width="50px" alt="" />
                    </div>
                    <div>
                      <h5 class="card-title">Julia Parker</h5>
                      <p class="card-text">Stocks Expert</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card card-bor card-testmonial">
                  <i class="fa-solid fa-quote-left"></i>
                  <div class="card-body">
                    <p class="card-text">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                  <div className="card-body d-flex">
                    <div className='client-img'>
                      <img src="/image/5.jpg" className='client-img' width="50px" alt="" />
                    </div>
                    <div>
                      <h5 class="card-title">Russel Parker</h5>
                      <p class="card-text">Trading Expert</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial