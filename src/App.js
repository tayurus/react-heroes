import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  HeroTable  from './HeroTable/HeroTable.js';
import InputHero from './InputHero/InputHero.js';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {Heroes: [{name: "Pidor", status : "отправился нахуй"}, {name: "Jopa", status: "сыбался в страхе"}]}
    }

    remove(){

    }

    add(){

    }

  render() {
    return (
        <div className="App">
            <InputHero></InputHero>
            <HeroTable heroesList={this.state.Heroes}></HeroTable>
        </div>
    );
  }
}

export default App;
