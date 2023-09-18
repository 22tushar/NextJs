import { ResponsivePie } from "@nivo/pie";
// import { PieData as data } from "../Data/pieData";
import { NivoTheme } from "../assets/NivoTheme";
import React, { useState, useEffect } from 'react';
const MyResponsivePie = ({MongoPieData}:any) => {
  
 
  // const [MongoLineData, setData] = useState([
  //   {
  //     "id": "oil",
  //     "label": "oil",
  //     "value": 67,
  //     "color": "hsl(106, 70%, 50%)"
  //   },
  //   {
  //     "id": "gas",
  //     "label": "gas",
  //     "value": 50,
  //     "color": "hsl(17, 70%, 50%)"
  //   },
  //   {
  //     "id":"market",
  //     "label": "market",
  //     "value": 45,
  //     "color": "hsl(17, 70%, 50%)"
  //   },
  //   {
  //     "id": "gdp",
  //     "label": "gdp",
  //     "value": 88,
  //     "color": "hsl(17, 70%, 50%)"
  //   }
  // ])
  
  // useEffect(() => {
  //   const fetchData = async () => {
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
const topicCounts:any = {};
MongoPieData.forEach((entry:any) => {
    const topic = entry.topic;
    if (topic) {
        topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    }
});

// Convert the topic counts to the desired format
const topicCountsArray = Object.keys(topicCounts).map(topic => ({ topic, count: topicCounts[topic] }));

// Now, topicCountsArray contains the desired format
console.log(topicCountsArray);

  const PieData= topicCountsArray.map((item:any)=> {
    return {
      id: item.topic,
      label:item.topic,
      value:item.count,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`, // Assign random color or use a logic to generate unique colors

    }
  });
  return (
  <ResponsivePie
    data={PieData}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.4}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor={{ from: "color", modifiers: [] }}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color", modifiers: [] }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "grey",
            },
          },
        ],
      },
    ]}
  />
  )
};

export default MyResponsivePie;
