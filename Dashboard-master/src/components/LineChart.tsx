import { ResponsiveLine } from "@nivo/line";
// import { LineData } from "../Data/linedata";
import { NivoTheme } from "../assets/NivoTheme";
import React, { useState, useEffect } from 'react';

const LineChart = ({MongoLineData}: any) => {

  // Assuming your MongoDB data is stored in a variable called mongoData
    
//   const [MongoLineData, setData] = useState([ {
//     "id": "japan",
//     "color": "hsl(18, 70%, 50%)",
//     "data": [
//       {
//         "x": "topic",
//         "y": 174
//       },
//       {
//         "x": "intensity",
//         "y": 236
//       },
//     ]
//   },

//     {

//     "id": "us",
//     "color": "hsl(326, 70%, 50%)",
//     "data": [
//       {
//         "x": "topic",
//         "y": 125
//       },
//       {
//         "x": "intensity",
//         "y": 68
//       },
//     ]
//     },

//     {

//       "id": "Inida",
//       "color": "hsl(326, 70%, 50%)",
//       "data": [
//         {
//           "x": "topic",
//           "y": 50
//         },
//         {
//           "x": "intensity",
//           "y": 99
//         },
//       ]
//       }

// ]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/getalldata'); // Replace with your API endpoint
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, []);  


const LineData= MongoLineData.map((item:any) => {
  return {
    id: item.country,
    color: `hsl(${Math.random() * 360}, 70%, 50%)`, // Assign random color or use a logic to generate unique colors
    data:[{x:"intensity",y:item.intensity},{x:"relavance",y:item.relevance}]
    };
  });
  

  return (
    <ResponsiveLine
      theme={NivoTheme}
      data={LineData}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
