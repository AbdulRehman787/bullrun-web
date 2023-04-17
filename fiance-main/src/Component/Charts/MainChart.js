import Stock from '../MarketTrade/Stock'
import TeslaChart from '../StockApi/TeslaChart';
import AppleChart from './../StockApi/AppleChart';
import DowChart from './../StockApi/DowChart';
const MainChart = [
    {
        Charts: <Stock />,
        title: 'IBM Chart'
    },
    {
        Charts: <TeslaChart />,
        title: 'Tesla Chart'

    },
    {
        Charts: <AppleChart />,
        title: "AppleChart"
    },
    {
        Charts: <DowChart/>,
        title: "DowCharts"
    }
]

export default MainChart;