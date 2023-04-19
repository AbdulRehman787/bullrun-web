const aboutData = {
    designation: "Developer",
    title: "MAKING THE WORLD SMARTER, HAPPIER, AND RICHER",
    text: [
      "The team here at XXX has over 25 years experience working in the finance industry in various roles ranging from Fund Manager and Analyst to Private Financial Adviser. Our team of experts have one of the strongest track records in the industry when it comes to individual stock selection for generating returns over the long term. ",
      
    ],
    img: '/image/stock.jpg'
  };
  
  const About = () => {
    return (
      <div className="devman_tm_section" id="about">
        <div className="devman_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div className="image_wrap">
                  <img src={aboutData.img} alt="" />
                  <div className="main" data-img-url={aboutData.img} />
                </div>
              </div>
              <div className="right">
                <div className="title">
                  <span>
                   About Us
                  </span>
                  <h3>{aboutData.title}</h3>
                </div>
                <div className="text">
                  {aboutData.text.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <div className="devman_tm_button">
                  <a className="anchor" href="#portfolio">
                    More AboutUs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default About;
  