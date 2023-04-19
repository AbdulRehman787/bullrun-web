import { Fragment, useState } from "react";
import BlogPopup from "./BlogPopus";

const blogData = [
  {
    title: "MAKING THE WORLD SMARTER, HAPPIER, AND RICHER",
    category: "Stock Traders",
    date: "02 June, 2022",
    author: "John Smith",
    img: "/image/blog1-1.jpg",
    description: [
     "This membership package is designed, and priced, to add value to as broader group of individuals as possible. Whether you’re an absolute beginner that has never invested in a stock, share or bond before, or a seasoned stock picker with a successful track record we believe everyone can find value and guidance from this package. As a Stock Picker member, you will get immediate access to every stock we’ve ever recommended, still recommend and will recommend in the future. Our impressive track record will be available to you, with all the background research to back up our recommendations, so you can pick and choose which stocks belong in your portfolio.",
      "In addition to being handed our full investing playbook so you can start generating return on investment from day 1 you will also have access to our University: Novice to Analyst module. Here you will learn everything from the very fundamentals of investing through to complex portfolio construction theory and even our own analyst teams stock picking criteria so that you can start picking winning stocks for yourself.",
      "Recommended to have a minimum of $1,000 to invest.",
      "No knowledge or experience needed",
      "We will tell you exactly how to get started and invest in your first stock!",
      "Experienced investor? Improve your existing portfolio with over X years of market beating stock picks.",
    ],
  },
  {
    title: "MAKING THE WORLD SMARTER, HAPPIER, AND RICHER",
    category: "Stock Traders",
    date: "02 June, 2022",
    author: "John Smith",
    img: "/image/blog1-2.jpg",
    description: [
      "This membership package is for anyone who’s already got the fundamentals of wealth creation in place. If your well on your way to accumulating a sizable networth then your next priority is answering the question - how much is enough?",
      "The Financial Planner membership package unlocks access to our University: Financial Planning A-Z module and financial planning calculators and tools so you can become your own Financial Planner. With the knowledge and tools you’ll unlock at this tier you’ll have the power to pinpoint your exact retirement date, how much you can afford to spend in retirement and how much more you need to invest to get there. ",

      "Worried about market risk as your portfolio grows? Our commodities and alternatives picks allow you to reduce overall market risk and protect your hard earned money and returns. ",
      "Experienced long term investor comfortable with risk management and short term volatility",
      "Serious about achieving predetermined financial goals"
    ],
  },
  {
    title: "MAKING THE WORLD SMARTER, HAPPIER, AND RICHER",
    category: "Stock Traders",
    date: "02 June, 2022",
    author: "John Smith",
    img: "/image/blog1-3.jpg",
    description: [
   "Here at XXX we pride ourselves on delivering considerably more than strong returns. If that was our only objective we would have set up as a fund (and charged you the same as a fund (much more)). Instead, we consider ourselves as much of an education platform as a stock picker. That’s why we’ve given all members - irrelevant of the membership tier - exclusive access to our University programme. In this Novice to Analyst module we have ensured there is something for everyone, irrelevant of investing experience. We go through the very fundamentals of investing from which platform/brokerage account is best,  to basic portfolio construction all the way to Modern Portfolio Theory, Capital Asset Pricing Model and even our own Analysts stock picking strategy. We want to do more than just instruct our members basic buy and sell orders - we want all members to be in a position to identity their own winning stocks" ,],
  },
];

const Blog = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const onClick = (e, blog) => {
    e.preventDefault();
    setOpen(true);
    setActiveData(blog);
  };
  return (
    <Fragment>
      <BlogPopup open={open} close={() => setOpen(false)} data={activeData} />
      <div className="devman_tm_section" id="blog">
        <div className="devman_tm_news">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Latest News</span>
              <h3>Checkout My Recent Blogs</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="news_list">
              <ul>
                {blogData.map((blog, i) => (
                  <li
                    key={i}
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={`0.${i * 2}s`}
                  >
                    <div className="list_inner">
                      <div className="image">
                        <img src={blog.img} alt="" c />
                        <div className="main" data-img-url={blog.img} />
                        <a
                          className="devman_tm_full_link"
                          href="#"
                          onClick={(e) => onClick(e, blog)}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#" onClick={(e) => onClick(e, blog)}>
                            {blog.category}
                          </a>
                        </span>
                        <h3 className="title">
                          <a href="#" onClick={(e) => onClick(e, blog)}>
                            {blog.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Blog;
