const minz = new Date('December 17, 2020 00:00:00');
const maxz = new Date('December 17, 2020 04:00:00');

const a = new Date('December 17, 2020 00:00:00');
const b = new Date('December 17, 2020 02:18:00');
const c = new Date('December 17, 2020 02:57:00');
const d = new Date('December 17, 2020 02:32:00');
const e = new Date('December 17, 2020 01:45:00');
const f = new Date('December 17, 2020 00:00:00');
const g = new Date('December 17, 2020 00:00:00');
const h = new Date('December 17, 2020 00:00:00');
const i = new Date('December 17, 2020 00:00:00');
const j = new Date('December 17, 2020 00:00:00');

console.log(minz.getTime(),maxz.getTime(),b.getTime(),c.getTime(),d.getTime());

var options = {
  annotations: {
    yaxis: [
      {
        y: b.getTime(),
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396'
          },
          text: 'KPI: 02:00'
        }
      }
    ]
  },
  series: [
    {
      name: "Discharge By Interval",
      type: "column",
      data: [0, 1, 16, 11, 5, 2, 0, 0, 0, 0],
    },
    {
      name: "Avg time",
      type: "line",
      data:  [a.getTime(), b.getTime(), c.getTime(),d.getTime(),e.getTime(),f.getTime(),g.getTime(),h.getTime(),i.getTime(),j.getTime()]
    }
    
  ],
  chart: {
    height: 450,
    type: "line",
  
    fill: {
      colors : ['#f7c1c6']
    },
  },
  
  stroke: {
    width: [0, 4],
    curve: 'smooth',
    colors: ['#636593'],
    
    
  },
  title: {
    text: "Discharge Now",
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      colors: ['#636593']
    },
    formatter: function (val) {
      const display = new Date(val);
      const date_display = display.getHours()+":"+display.getMinutes();
      return date_display;
  },
    
  },
  
  labels: [
    "12AM-06AM",
    "06AM-08AM",
    "08AM-10AM",
    "10AM-12PM",
    "12PM-02PM",
    "02PM-04PM",
    "04PM-06PM",
    "06PM-08PM",
    "08PM-10PM",
    "10PM-12AM",
  ],
  xaxis: {
    type: "time",
  },
  
    fill: {
      colors : ['#f7c1c6','#a2a3bf']
    },
    

    
 
  yaxis: [{
    labels: {
      show: false
    }
  },{
    min: minz.getTime(), // minimum value allowed
    max: maxz.getTime(), // maximum value allowed
    // labels: {
    //   datetimeFormatter: {
    //     hour: 'HH:mm'
    //   },
  } 
    //}
    
  ],
 
};

var chart = new ApexCharts(document.getElementById("charts"), options);
chart.render();

// // console.log("test");

//fill: {
  //colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
//}, 
// var options = {
          
//   series: [{
//     name: 'Website Blog',
//     type: 'column',
//     data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
//   }, {
//     name: 'Social Media',
//     type: 'line',
//     data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
//   }],
//   options: {
//     chart: {
//       height: 350,
//       type: 'line',
//     },
//     stroke: {
//       width: [0, 4]
//     },
//     title: {
//       text: 'Traffic Sources'
//     },
//     dataLabels: {
//       enabled: true,
//       enabledOnSeries: [1]
//     },
//     labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
//     xaxis: {
//       type: 'datetime'
//     },
//     yaxis: [{
//       title: {
//         text: 'Website Blog',
//       },
    
//     }, {
//       opposite: true,
//       title: {
//         text: 'Social Media'
//       }
//     }]
//   },


// };
// var chart = new ApexCharts(document.getElementById("charts"), options);
//  chart.render();

// var options = {
//   series: [{
//   name: 'Website Blog',
//   type: 'column',
//   data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
// }, {
//   name: 'Social Media',
//   type: 'line',
//   data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
// }],
//   chart: {
//   height: 350,
//   type: 'line',
// },
// stroke: {
//   width: [0, 4]
// },
// title: {
//   text: 'Traffic Sources'
// },
// dataLabels: {
//   enabled: true,
//   enabledOnSeries: [1]
// },
// labels: ['01 Feb 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
// xaxis: {
//   type: 'datetime'
// },
// yaxis: [{
//   title: {
//     text: 'Website Blog',
//   },

// }, {
//   opposite: true,
//   title: {
//     text: 'Social Media'
//   }
// }]
// };

// // var chart = new ApexCharts(document.querySelector("#chart"), options);
// // chart.render();

// var chart = new ApexCharts(document.getElementById("charts"), options);
// chart.render();