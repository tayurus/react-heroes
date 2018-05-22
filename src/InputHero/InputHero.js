import React, { Component } from 'react';
import './InputHero.css';

class InputHero extends React.Component{

    constructor(props){
        super(props);
        this.state = {heroName: ""}
    }

    returnHeroName(){
        this.props.addHero(this.refs._heroName.value);
    }

    search(){
        this.props.searchHeroes(this.refs._heroName.value)
    }

    render(){
        return (
            <div className="InputHero">
                <input className="InputHero__input" onInput={this.search.bind(this)} type="text" ref="_heroName" placeholder="Искать и добавлять тут!"/>
                <button className="InputHero__add" onClick={this.returnHeroName.bind(this)}>+</button>
            </div>
        )
    }
}

export default InputHero;
