import { lineBreak } from "./utilits";
import Counter from "./Counter";

const counterData = [
  { smallVlaue: true, value: 120, name: "Stock Chains" },
  { smallVlaue: true, value: 40, name: "Gainer Stock" },
  { smallVlaue: false, value: 10, name: "Investment 1week" },
];
const CounterSection = () => {
  return (
    <>
      <div className="devman_tm_section">
        <div className="devman_tm_counter_section">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counterData.map((counter, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <div className="wrapper">
                        <div className="value">
                          <span className="abs">
                            <Counter end={counter.value} />
                            {counter.smallVlaue ? (
                              <label className="small">+</label>
                            ) : (
                              <label className="big">M</label>
                            )}
                          </span>
                        </div>
                        <div className="text">
                          <h3 dangerouslySetInnerHTML={lineBreak(counter.name)}></h3>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>

      <div className="pricing-container">

      </div>


    </>

  );
};
export default CounterSection;
