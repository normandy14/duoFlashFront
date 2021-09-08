import React, { Component } from 'react';
import Card from './Card.js'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      propsDict: this.props.transDict,
      numCycle: 1,
      components: []
    }
  }

  cycleIndex = () => {
    let nextIndex = this.state.index + 1;
    let cycleSize = Object.keys(this.state.propsDict).length;
    if (this.state.index >= cycleSize) {
      let newNumCycle = this.state.numCycle + 1;
      this.setState ({
        numCycle: newNumCycle
      })
      nextIndex = 0;
    }
    this.setState ({
      index: nextIndex
    })
  }
  
  generateAndSetComponents = () => {
    let words = this.state.propsDict; // this is an exact copy from props
    let keys = Object.keys(words); // get all the keys from the struct (target language)
    let componentsArray = []; // array to be pushed upon
    keys.map((key) => {
      componentsArray.push(<Card target={key} english={this.props.transDict[key]}/>)
    });
    
    // update state with new component array
    this.setState({
      components : componentsArray
    });
  }
  
  // ComponentDidMount is triggered only once immediately after the initial rendering. ComponentDidUpdate does not occur for the initial render
  
  
  componentDidMount() {
    console.log("Component Did Mount");
    this.generateAndSetComponents();
  }
  
  /*
  componentDidUpdate() {
    console.log("Component Did Update")
    if (this.state.index === 0) {
      console.log("If statement fired!!!")
    
    }
  }
  */
  
  render() {
    let currentWord = this.state.components[this.state.index];
    let numCycle = this.state.numCycle;
    return (
      <div className="uk-container">
        <div className="uk-container">
          <div>Num of Cycles: {numCycle}</div>
        </div>
        <div className="uk-container">
          <div>Card vocab: </div>
          <div>{currentWord}</div>
          <button className="uk-button uk-button-primary" onClick={this.cycleIndex}>Next Word</button>
        </div>
      </div>
    )}
}

export default App;

