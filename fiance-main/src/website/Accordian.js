import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Why should we invest?",
    details:"Inflation is the secret force that works in the background making you poorer every day without you knowing it. If you didn’t spend time studying economics or finance at school then you likely weren’t taught this one life changing principle. So what is inflation? Inflation is the rise in the price of goods and services you consume over time. To put this another way,, $100 would have bought you considerably more 10 years ago than it buys you today. This concept by itself doesn’t mean much, but if we say inflation runs at 2.5% per year on average and the interest rate in a bank runs at 0.5% per year, on average, then it is clear to see that your cash savings aren’t keeping pace with this general increase in prices .This 2% may not sound like a lot to the average person, however, when we compound 2% year-on-year, over a period of most peoples working lives it makes it nearly impossible to ‘save’ your way to wealth.",
    details1: "As mentioned above, 2% is the difference between the rate of inflation and the banks saving rate. Taking this figure, if you had $100,000 in your bank account today, in 50 years time it will be worth just $37,000. The same concept goes if you save a small amount each month. For example, if you save $300 per month for 30 years your bank account will show $108,000, however, after taking inflation into account this would only be worth $60,000 in today’s terms. Alternatively, if you’d invested each month instead you would have $597,000! ",
    details2: "In short, it’s not what you do that matters - in both scenario’s the individual put $300 a side each month - but it’s how you do it that matters. The only difference between having $108,000 or $597,000 is the account you hold this money in over that 30 year period.",
    details3: "But investing is risk, right? Wrong! Saving your hard earned money in a bank account losing 2% purchasing power for a lifetime is far more risk in my book. Why? Because you’d better hope you win the lottery (or die early) because no one can ‘save’ their way to retirement. "
    },
  {
    title: "How to invest?",
details: "There is one fundamental rule of investing - Don’t put all your eggs in one basket. ",
details1: "Any investment portfolio should have as a minimum between 10-15 foundational stocks and a further 10-30 satellite stocks. ",
details2: "Foundational stocks are the ‘buy and never sell’ stocks. The backbone of the portfolio. The stocks that you have absolute faith will continue to deliver returns over the next 40 years even if you never place another trade or watch any sort of financial news. Foundational stocks should make up between 50%-75% of the average investors portfolio. "  ,
details3: "Spreading your funds over 10-15 foundational stocks and a further 10-30 satellite stocks minimises nearly all company specific risk from your portfolio. As seen on the image. Of course, this principle works far better if each of the stocks aren’t correlated. For example, if you held a portfolio made up entirely of Chinese tech stocks in 2021 when China started to introduce huge regulation in its tech space then you’d have experience a significant decline in overall value compared to if you held a portfolio made up of Chinese tech stocks, but also US oil stocks, German manufacturing, UK Finance and South African mining. ",
details4: "This example demonstrates that even if there is a major fundamental shift in one sector or country, the majority of your portfolio will remain untouched due to diversification. The risk being referred to here is diversifiable risk. Unfortunately, not all risk can be diversified away and regardless of the amount of stocks you hold non-diversifiable risk, or systematic risk, will always remain. This type of risk applies to the entire system. For example, global recessions impact all stocks, irrelevant of country or sector.",
details5: "Risk management is one of the most important concepts when it comes to investing that’s why we’ve created a list of our 15 foundational stocks on our members dashboard. Of course, all our members have access to every stock we’ve ever recommended.",
},
  {
    title: "What to invest in?",
    details:"There is one fundamental rule of investing - Don’t put all your eggs in one basket. Any investment portfolio should have as a minimum between 10-15 foundational stocks and a further 10-30 satellite stocks. Foundational stocks are the ‘buy and never sell’ stocks. The backbone of the portfolio. The stocks that you have absolute faith will continue to deliver returns over the next 40 years even if you never place another trade or watch any sort of financial news. Foundational stocks should make up between 50%-75% of the average investors portfolio. ",
  },
  {
    title: "Who to invest with? / What to invest in? ",
    details: "Financial Advisers - 9 times out of 10 whether your adviser claims to be ‘independent’ or not, any recommendation you receive is often driven by fees and/or commissions. This is even more apparent in the world of ‘offshore’ investing or in countries with lower regulation i.e. Middle East (UAE, Qatar, Saudi Arabia) and North Africa. In jurisdictions where regulators are tougher such as UK, Europe, U.S., Financial Advisers still charge a fee of between 1%-1.5% and it is our firm belief that unless you’re an individual with a net worth of more than $5,000,000 realistically there’s a very good chance that personalised financial advice or a discretionary fund manager (DFM) is of no benefit to you (and as a result are actually detrimental to your investment success due to the fee’s they charge). In the information age, we believe so called ‘professionals’ need to do more than just ‘manage money’ for their clients. So unless your adviser is reducing your capital gains tax bill in real time, putting your wealth into Trusts or corporations, using Specialised Purpose Vehicles, or advising you in some other tangible way that is more than just ‘buy this fund’ or ‘sell this fund’ then we advise cutting ties (and fee’s) and managing your capital yourself.",
    details1: "Watch any investment guru - Warren Buffett - or read any best selling financial freedom/investment book - Millionaire Expat - they all say the same thing - Keep costs low, keep control of your own money.",
    details2: "Thats why when creating XXX instead of setting up as a mutual fund, we decided to keep costs low, give more power to our investors and generate better outcomes for the masses by way of a monthly subscription service that our members can leave the instant they no longer find value. ",

  },
];

const Accordian = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
                <p>{accordion.details1}</p>
                <p>{accordion.details2}</p>
                <p>{accordion.details3}</p>
                <p>{accordion.details4}</p>
                <p>{accordion.details5}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordian