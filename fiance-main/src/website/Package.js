import { Fragment } from "react";
import './style.css'

const Package = () => {
  return (
    <Fragment>

      <div className="devman_tm_section" id="portfolio">
      <div className="devman_tm_section_package">
        <div class="row rows-func row-dea row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card card-bor  h-100">
              <div className="breaker ">
                <h5 class="card-title">Rule Breakers</h5>
                <p class="card-text package-para">High Growth bussiness we think are poised to be tomorrow market leaders</p>

              </div>
              <div class="card-body">
              <div className="designa">
                <h5 class="card-title package-head">OUR GOAL</h5>
                <p class="card-text package-para">Help Member earn a positive return and  build the foundation of a portfolio backend by Motley Fool priciple</p>
              </div>
              <hr />
              <div className="designa">
                <h5 class="card-title package-head">DESIGNED FOR</h5>
                <p class="card-text package-para">Individual who are seeking easy-to-use guidance on investing in more familar-named-companes</p>
              </div>
              <hr />
              <div className="desiga">
                <h5 class="card-title package-head">RECOMMENDED MINIMUM PORTFOLIO SIZE</h5>
                <p class="card-text package-para">$5.000 +</p>
              </div>
              <hr />
              <div className="design1">
              <h5 class="card-title package-head">KEY FEATURES</h5>
              <ul className="package-list">
              <li>Monthly Stock recommendations (usually large and mid-cap stocks)</li>
              <li>Portfolio allocation guidance via the Motely Fool's Allocator tool</li>
              <li>On Going Coverage of pour recommendation</li>
              <li>Access to Motely Fool live video stream weekdays form 9 a.m to 12 p.m ET</li>
              </ul>
            </div>
            <hr />
            <div className="package-cent">
            <span className="d-flex"><h5 class="card-title ">$99</h5>/Year</span>
            <p className="package-para">New Member Introductory Offer</p>
            <button className="package_btns">Join Breakers</button>
              </div>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card card-bor h-100">
              <div className=" bundle col-pack">
                <h5 class="card-title">Epic Bundle</h5>
                <p class="card-text package-para">A Bundle membership that combines our four foundational stock-investing services into one</p>

              </div>
              <div class="card-body">
              <div className="designa">
                <h5 class="card-title package-head">OUR GOAL</h5>
                <p class="card-text package-para">Help Member outperform the benchmark by gaining exposure to a wider variety of stocks and investment</p>
              </div>
              <hr />
              <div className="designa">
                <h5 class="card-title  package-head">DESIGNED FOR</h5>
                <p class="card-text package-para">Individual who are (regularly adding new money to thier borkerage account intersted in bussiness and want to spend more time learning the art of investing)</p>
              </div>
              <hr />
              <div className="desiga">
                <h5 class="card-title package-head">RECOMMENDED MINIMUM PORTFOLIO SIZE</h5>
                <p class="card-text package-para">$25.000 +</p>
              </div>
              <hr />
              <div className="design1">
              <h5 class="card-title package-head">KEY FEATURES</h5>
              <ul className="package-list">
              <li className="package-para">Include access to Stock Advisor + Rule Breaker + Everlasting Stock + Real Estate Winners</li>
              <li className="package-para">Weekly Stock recommendation (from ranging small to large-stocks) </li>
              <li className="package-para">PortFolio allocation guidance via The Motely Fool's Allocator tool</li>
              <li className="package-para">On-goin coverage of piror recommendation from all include services</li>
              <li className="package-para">Access to Motely Fool live video stream weekdays form 9 a.m to 12 p.m  amd 3 p.m ET - 5 p.m ET</li>
              </ul>
            </div>
            <hr />
            <div className="package-cent">
            <span className="d-flex"><h5 class="card-title ">$499</h5>/Year</span>
            <p className="package-para">New Member Introductory Offer</p>
            <button className="package_btns">Join Epic Bundle</button>
              </div>
              </div>
            </div>
          </div>
          <div class="col ">
          <div class="card card-bor h-100">
            <div className=" backstage col-pack">
              <h5 class="card-title ">Backstage  Bundle</h5>
              <p class="card-text package-para">Our premier membership tier unlocked bu joining one of our 20+ portfolio-building services</p>

            </div>
            <div class="card-body">
            <div className="designa">
              <h5 class="card-title package-head">OUR GOAL</h5>
              <p class="card-text package-para">Help Member outperform the benchmark and build lasting wealth with a complete financial gameplan</p>
            </div>
            <hr />
            <div className="designa">
              <h5 class="card-title package-head">DESIGNED FOR</h5>
              <p class="card-text package-para">Individual with established (and growing) portfolios, passionate about bussiness and regularly spend time following the market each week </p>
            </div>
            <hr />
            <div className="desiga">
              <h5 class="card-title package-head">RECOMMENDED MINIMUM PORTFOLIO SIZE</h5>
              <p class="card-text package-para">$50.000 +</p>
            </div>
            <hr />
            <div className="design1">
            <h5 class="card-title package-head">KEY FEATURES</h5>
            <ul className="package-list">
            <li className="package-para">Twice monthly stock recommendations (ranging from micro to  large cap stocks) from our Chief investment Officer</li>
            <li className="package-para">Access to Powereful tools like watchlist </li>
            <li className="package-para">PortFolio allocation guidance via The Motely Fool's Allocator tool</li>
            <li className="package-para">On-goin coverage of piror recommendation from all include services</li>
            <li className="package-para">Access to Motely Fool live video stream weekdays form 9 a.m to 12 p.m ET amd 3 p.m  - 5 p.m ET</li>
            </ul>
          </div>
          <hr />
          <div className="package-cent">
          <center>
          <span className="d-flex" ><h5 class="card-title">$1,999</h5>/Year</span>
          <p className="package-para">New Member Introductory Offer</p>
          </center>
          <button className="package_btns">Join Backstage</button>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>

    </Fragment>
  );
};
export default Package;
