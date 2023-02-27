import React from "react";
import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "increase", label: "На повышение" },
    { name: "moreThen1000", label: "ЗП большей 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    // const active = props.filter === name;
    // const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button className="btn" 
              type="button" 
              key={name}
              onClick={() => props.onFilterSelect(name)}>
              {label}
      </button>
    );
  });

  return (
    <div className="btns">
      {buttons}
    </div>
  );
};

export default AppFilter;
