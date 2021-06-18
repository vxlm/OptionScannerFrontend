import React from 'react'

import { Line } from 'react-chartjs-2';

export const Historical = (props) => {

     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
      let testQuery=props.data['0']['symbols'][0]['historical']
      console.log(testQuery)
      var volm=  [];
      var last = []
      var labels = []
      testQuery.forEach(element =>{
          labels.push([element['datetime']])
          last.push(element['last'])
          volm.push(element['volume'])
        });
    console.log(volm)
    console.log(last)

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'volm',
            data: volm,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: 'last',
            data: last,
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnArea: false,
              },
            },
          ],
        },
      };
    return (
        <div>
    
            <Line data={data} options={options} />
        </div>

    )
}
