import React, { Component } from 'react';
// import {robot} from './Robots';
import Cardlist from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response => response.json()).
        then(users => this.setState({robots : users}));
        
    }

    OnSearchChange = (event) =>{
        this.setState({ searchField : event.target.value })
    }

    render(){
        const filteredrobots = this.state.robots.filter((robot) => {
          return robot.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase());
        });
        console.log('render');
        if(this.state.robots.length === 0){
            return <h1 className = "tc f1 title">Loading</h1>
        }
        else{
            return (
              <div className="tc">
                <h1 className="f1 title">RoboFriends</h1>
                <SearchBox searchChange={this.OnSearchChange} />
                <Scroll>
                  <Cardlist robot={filteredrobots} />
                </Scroll>
              </div>
            );
        }
    }
}

export default App;
