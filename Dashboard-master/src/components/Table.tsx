import "bootstrap/dist/css/bootstrap.css";

import ExpenseList from "./ExpenseList";
import { useState, useEffect } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import useData from "../Hooks/useData";
const Table = () => {
  const { datas, setDatas } = useData();
  const [selectedPerson, setselectedPerson] = useState(" ");

  const visiblePersons = selectedPerson
    ? datas.filter((e) => e.person === selectedPerson)
    : datas;
  return (
    <>
      <div>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(newdata) =>
              setDatas([...datas, { ...newdata, id: datas.length + 1 }])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onselectPerson={(person) => setselectedPerson(person)}
          />
        </div>
        <ExpenseList
          datas={visiblePersons}
          onDelete={(id) => setDatas(datas.filter((e) => e.id != id))}
        />
      </div>
    </>
  );
};
export default Table;
