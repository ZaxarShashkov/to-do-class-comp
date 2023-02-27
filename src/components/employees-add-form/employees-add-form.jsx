import React, { Component } from "react";

import "./employees-add-form.css";


class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length <= 2 || !this.state.salary) return undefined;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Как его зовут..."
            name="name"
            defaultValue={name}
            onClick={this.onValueChange}
          />
          <input
            type="number"
            className="form-control"
            placeholder="ЗП в $"
            name="salary"
            defaultValue={salary}
            onClick={this.onValueChange}
          />
          <button type="submit" className="btn">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
