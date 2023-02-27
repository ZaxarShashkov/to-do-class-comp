import React from "react";
import "./employees.css";
import "../employees-list/employees-list";
import EmployeesList from "../employees-list/employees-list";

const Employees = ({ data, onDelete , onToggleIncrease , onToggleLike}) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesList
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleLike={() => onToggleLike(id)}/>
    );
  });

  return <ul className="app_list">{elements}</ul>;
};

export default Employees;
