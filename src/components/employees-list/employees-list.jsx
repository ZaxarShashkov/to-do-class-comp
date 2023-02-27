import React, { Component } from "react";
import "./employees-list.css";

const EmployeesList = (props) => {  

    const { name, salary , onDelete , onToggleLike , onToggleIncrease , increase , like} = props;

    let classNames = "list";
    if (increase) {
      classNames += " increase";
    }
    if (like) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span className="name" 
        onClick={onToggleLike}>
          {name}
        </span>
        <input type="text" defaultValue={salary + "$"} />
        <div className="employees_btn">
          <button className="button" type="button" onClick={onToggleIncrease}>
            Повышение
          </button>
          <button className="button" type="button" onClick={onDelete}>Удалить</button>
        </div>
      </li>
    );
}

export default EmployeesList;
