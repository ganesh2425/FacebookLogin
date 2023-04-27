import React, { useState } from 'react';
import Chart from "react-apexcharts";

function Charts() {
    const [state, setState] = useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "series-2",
                data: [24, 98, 75, 34, 87, 52, 49, 86]
              }
          ]
    })
  return (
    <>
    <div className='App'>
    <h2>React Charts Demo!!</h2>
    <div className='row'>
        <div className='col-4'>
        <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="450"
            />
        </div>
        <div className='col-4'>
        <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="450"
            />
        </div>
        <div className='col-4'>
        <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="450"
            />
        </div>
        <div className='col-4'>
        <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="450"
            />
        </div>
        {/* <div className='col-4'>
        <Chart
              options={state.options}
              series={state.series}
              type="histogram"
              width="450"
            />
        </div> */}
    </div>
    </div>
    
    </>
  )
}

export default Charts;