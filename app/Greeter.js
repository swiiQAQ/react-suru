import React, {Component} from 'react'
import config from './config.json';
import './main.css';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
