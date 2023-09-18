import React from "react";
import Persons from "../Persons";
interface Props {
  onselectPerson: (person: string) => void;
}

const ExpenseFilter = ({ onselectPerson }: Props) => {
  return (
    <div className="mb-3">
      <select
        id="person"
        className="form-select"
        onChange={(event) => onselectPerson(event.target.value)}
      >
        <option value="">All Persons</option>
        {Persons.map((person) => (
          <option key={person} value={person}>
            {person}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
