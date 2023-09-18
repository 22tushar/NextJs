import React from "react";
import { useState } from "react";
const useData = () => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      person: "Prakash",
      date: "15-2-2023",
      hours: 7,
    },
    {
      id: 2,
      person: "Sajith",
      date: "15-2-2023",
      hours: 4,
    },
    {
      id: 3,
      person: "Sanjai",
      date: "15-2-2023",
      hours: 5,
    },
    {
      id: 4,
      person: "Sowbarnika",
      date: "15-2-2023",
      hours: 8,
    },
  ]);
  return { datas, setDatas };
};

export default useData;
