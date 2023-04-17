import Counter from "./Counter";
import { Image } from "react-bootstrap";
const homeData = {
  numberOfProject: 500,
  numberofyear: 5,
  img: "/image/24.png"
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
        <div class="image" data-img-url="/image/1.jpg" style={{backgroundImage: "url('image/1.jpg')"}}></div>
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                
                <h5 className="name">
                MAKING THE WORLD SMARTER, HAPPIER, AND RICHER
                </h5>
                <p className="text">Through expert investment guidance</p>
                <h5 className="name">
                Join Nearly 1 Million Premium Members Receiving
                </h5>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Get a Quote
                    </a>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className="right">
              <div className="image">
                <Image src="/image/24.png" alt="" />
                <div className="main" data-img-url={homeData.img} />
                <span className="win">
                  <img src="image/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />K
                      <span className="extra">+</span>
                      
                    </h3>
                    <span className="item_name">
                      People 
                      <br />
                      Earning
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
