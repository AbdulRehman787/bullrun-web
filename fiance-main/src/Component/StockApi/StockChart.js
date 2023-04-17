import AppleChart from './AppleChart';
import DowChart from './DowChart';
import GoodChart from './GoodChart';
import IbmChart from './IbmChart';
import NeoChart from './NeoChart';
import TeslaChart from './TeslaChart';
import MsftChart from './MsftChart';

const StockData = [
    {
        chart: <IbmChart />,
        name: 'IbmChart'
        
    },
    {
        chart: <AppleChart />,
        name: 'AppleChart'
    },
    {
        chart: <DowChart />,
        name: 'DowChart'

    },
    {
        chart: <GoodChart />,
        name: 'GoodChart'
    },
    {
        chart: <MsftChart />,
        name: 'MsftChart'
        
    },
    {
        chart: <NeoChart />,
        name: 'NeoChart'
    }, 
    {
        chart: <TeslaChart />,
        name: 'TeslaChart'  
    }

]

export default StockData