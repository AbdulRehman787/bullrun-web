import React from 'react'
import ReactApexChart from 'react-apexcharts';
class ReChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 480,
            type: 'pie',
          },
          labels: ['Meta', 'AAPL', 'NFLX', 'NIKE', 'GOGL'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'left'
              }
            }
          }]
        },
      
      
      };
    }
    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={350} />
</div>


      );
    }
  }


  export default ReChart