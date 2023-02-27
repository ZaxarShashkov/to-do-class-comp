import React, { Component } from "react";

class WhoIAm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: '',
      text: 'Click',
    };
  }

  nextYear = () => {
    this.setState(state => ({
        years: state.years + 1,
    }));
  };

  commitInputChanges = (e,color) => {
    console.log(color)
    this.setState({
      position: e.target.value
    })
  }


  render() {
    const { name, surname, link } = this.props;
    const { position , years , text } = this.state
    return (
      <>
        <button onClick={this.nextYear}>{text}</button>
        <h1>
          My name is {name},
          surname - {surname}, 
          age - {years},
          position: {position}
        </h1>
        <a href={link}>My Profile</a>
        <form action="">
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'Some color')}/>
        </form>
      </>
    );
  }
}

export default WhoIAm;
