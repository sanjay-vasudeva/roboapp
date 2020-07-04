import React, {Component} from 'react';
import logo from './logo.svg';
import './Hello.css';
import './App.css';




class Hello extends Component {
    render() {
      return (
        <div class="Welcome tc baskerville grow flex flex-column flex-wrap">
          <h1>Hello World</h1>
          <p class="f3">Welcome to my first react app</p>
      <p class = "f4">{this.props.greet()}, Used props for the afore-mentioned message </p>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    }
  }
  

//   class Hello1 extends Component {
//     render() {
//       return(
//       <h1>Hello World 1</h1>
//     );
//     }
//   }
  

  export default Hello;