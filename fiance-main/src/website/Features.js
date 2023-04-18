import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ShowChartSharpIcon from '@mui/icons-material/ShowChartSharp';
import './style.css'
const api = [
    {
        icon: <CandlestickChartIcon />,
        text: "New Stock Picks Each Month"
    },
    {
        icon: <AssessmentIcon />,
        text: "Detailed Analysis of Companies"
    },
    {
        icon: <ShowChartSharpIcon />,
        text: "Model Portfolios and Advanced Tools"
    },
    {
        icon: <MotionPhotosAutoIcon />,
        text: 'Live Streaming During Market Hours'
    }
]

const Features = () => {
  return (
    <div className="devman_tm_section"> 
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
          <div className="row  row-dei  row-cols-1 row-cols-md-6 g-4">
          {api.map((curelem,index)=>{
            return(
                <>
                <div className="col row-desia" key={index}>
            <div className="card row-desins h-100 w-6    0">
              <div className="card-body">
                <h5 className="card-title">{curelem.icon}</h5>
                <p className="card-text">{curelem.text}</p>
              </div>
            </div>
          </div>
                </>
            )
          })} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
