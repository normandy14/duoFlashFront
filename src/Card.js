import React, {Component} from 'react';

class Card extends Component {

  render() {
    return (
      <div>
        <div> The key is: {this.props.target}</div>
        <div> The val is: {this.props.english.join(', ')} </div>
      </div>
    )
  }
}

export default Card;