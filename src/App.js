import React, { Component } from 'react';
import Card from './Card.js'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      filteredDict: this.props.transDict,
      components: []
    }
  }

  cycleIndex = () => {
    let nextIndex = this.state.index + 1;
    let cycleSize = Object.keys(this.state.filteredDict).length;
    if (this.state.index >= cycleSize) {
      nextIndex = 0;
    }
    this.setState ({
      index: nextIndex
    })
  }
  
  componentDidMount() {
    if (this.state.index === 0) {
      let words = this.state.filteredDict;
      let keys = Object.keys(words);
      let componentsArray = []
      keys.map((key) => {
        componentsArray.push(<Card target={key} english={this.props.transDict[key]}/>)
      });
      this.setState({
        components : componentsArray
      });
    }
  }
  
  render() {
    let keys = Object.keys(this.state.filteredDict);
    let currentWord = this.state.components[this.state.index]
    return (
      <div className="uk-container">
        <div>Card vocab: </div>
        <div>{currentWord}</div>
        <button className="uk-button uk-button-primary" onClick={this.cycleIndex}>Next Word</button>
      </div>
    )}
}

export default App;

