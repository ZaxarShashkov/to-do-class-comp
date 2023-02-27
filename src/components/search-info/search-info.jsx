import { Component } from "react";
import "./search-info.css";

class SearchInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term})
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input
        type="text"
        className="search-info"
        placeholder="Найти сотрудника"
        defaultValue={this.state.term}
        onChange={this.onUpdateSearch}/>
    );
  }
}

export default SearchInfo;
