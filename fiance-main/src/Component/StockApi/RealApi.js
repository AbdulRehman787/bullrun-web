const date= new Date()
const todayDate= date.toLocaleDateString();

const RealApi = [
    {
        name: 'AAPL',
        dat: todayDate,
        highPrice: document.getElementById('highprice1'),
        lowPrice: document.getElementById('lowprice1'),
        actualPrice: document.getElementById('actualprice1'),
        price: document.getElementById('price1')
    },
    
]


export default RealApi;