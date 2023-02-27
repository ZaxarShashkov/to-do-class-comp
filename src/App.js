import React, { Component } from "react";

import AppInfo from "../src/components/app-info/app-info";
import SearchInfo from "../src/components/search-info/search-info";
import AppFilter from "./components/app-filter/app-filter";
import Employees from "./components/employees/employees";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Zaxar", salary: 5000, increase: true, like: false, id: 1 },
        { name: "Vasya", salary: 2500, increase: false, like: true, id: 2 },
        { name: "Ivan", salary: 1500, increase: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleLike = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'increase':
        return items.filter(item => item.increase);
      case 'moreThen1000':
        return items.filter(item => item.salary >= 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    // const like = this.state.data.filter((item) => item.like).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search">
          <SearchInfo onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter}
                     onFilterSelect={this.onFilterSelect}/>
        </div>
        <Employees
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleLike={this.onToggleLike}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;

