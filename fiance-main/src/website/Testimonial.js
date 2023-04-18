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
            <div className="row test-func row-cols-1 row-cols-md-3 g-5">

              <div className="col">
                <div className="card card-bor card-testmonial ">
                  <i className="fa-solid fa-quote-left"></i>
                  <div className="card-body">
                    <p className="card-text">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                  <div className="card-body d-flex">
                    <div className='client-img'>
                      <img src="/image/3.jpg" className='client-img' width="50px" alt="" />
                    </div>
                    <div>
                      <h5 className="card-title">David Parker</h5>
                      <p className="card-text">Chart Expert</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-bor card-testmonial">
                  <i className="fa-solid fa-quote-left"></i>
                  <div className="card-body">
                    <p className="card-text">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                  <div className="card-body d-flex">
                    <div className='client-img'>
                      <img src="/image/4.jpg" className='client-img' width="50px" alt="" />
                    </div>
                    <div>
                      <h5 className="card-title">Julia Parker</h5>
                      <p className="card-text">Stocks Expert</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-bor card-testmonial">
                  <i className="fa-solid fa-quote-left"></i>
                  <div className="card-body">
                    <p className="card-text">Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                  <div className="card-body d-flex">
                    <div className='client-img'>
                      <img src="/image/5.jpg" className='client-img' width="50px" alt="" />
                    </div>
                    <div>
                      <h5 className="card-title">Russel Parker</h5>
                      <p className="card-text">Trading Expert</p>
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