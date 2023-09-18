
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import React, { useState, useEffect } from 'react';

const BarCharts = ({MongoBarData}:any) => {
 
//   const [MongoBarData, setData] = useState([
//     {
//       topic:"topic:oil",
//       country:3,
//       fee:"xx"
//    },
//    {
//      topic:"topic:gas",
//       country:10,
//       fee:"yy"
//    },
//    {
//     topic:"topic:gdp",
//     country:10,
//     fee:"zz"
//  }
//   ])

//     // useEffect(() => {
//   //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);  

     const BarData= MongoBarData.map((item:any) => {
      return {
        // country:" "+`${item.country}`+", "+"likelihood : "+item.likelihood,
        country:item.country,
        likelihood:  item.likelihood,
        fee:item.region
      }
    });
  return (
     <ResponsiveContainer width="50%" aspect={3}>
         <BarChart data={BarData} width={400} height={400}>
          <XAxis dataKey='country'/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey='likelihood' fill='green'/>
         </BarChart>
     </ResponsiveContainer>

    
  );
};

export default BarCharts;
