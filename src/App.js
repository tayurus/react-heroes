import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  HeroTable  from './HeroTable/HeroTable.js';
import InputHero from './InputHero/InputHero.js';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {Heroes: [
            {id: 0, name: "Некто", status : "отправился нахер", visible:true},
            {id: 1, name: "Jopa", status: "неизвестно", visible:true},
            {id: 2, name: "Jopa2", status: "неизвестно2", visible:true},
            {id: 3, name: "A", status: "b", visible:true},
            {id: 4, name: "B", status: "c", visible:true}
        ]}
        console.log(this.state.Heroes);
    }

    getHeroIndexByField(fieldName, value){
        return this.state.Heroes.reduce((acc, item, index) => {
            if (typeof item[fieldName] != "undefined")
                if (item[fieldName] === value)
                return index;
            return acc
        }, -1)
    }

    getMaxId(){
        return this.state.Heroes.reduce((acc, item, index) => {
            if (item.id > acc)
                return item.id;
            return acc;
        },0)
    }

    remove(id){
        let newHeroes = this.state.Heroes;
        console.log(this.getHeroIndexByField("id",id));
        newHeroes.splice(this.getHeroIndexByField("id",id),1)
        this.setState({Heroes: newHeroes })

    }

    add(name){
        //parse input string
        let heroFieldsArray = name.split(";");

        //generate new object for hero
        let newHeroObj = {id: this.getMaxId() + 1, name: heroFieldsArray[0], status: heroFieldsArray[1]};

        let newHeroes = this.state.Heroes;
        newHeroes.push(newHeroObj);

        //update state
        this.setState({Heroes: newHeroes})

        this.searchHeroes()
    }

    sort(fieldName){
        let first,last;
        if (this.state.Heroes.length > 1){
            first = this.state.Heroes[0][fieldName];
            last = this.state.Heroes[this.state.Heroes.length - 1][fieldName];

            //если поле первого элемента БОЛЬШЕ поля последнего элемента
            if (first > last){
                console.log(">");
                //сортировка по возрастанию
                let oldHeroes = this.state.Heroes;

                oldHeroes.sort((item1,item2) => {
                    return item1[fieldName] > item2[fieldName];
                })
            }
            //иначе если поле первого МЕНЬШЕ поля последнего элемента
            else if (first < last){
                console.log("<");
                //сортировка по убыванию
                this.state.Heroes.sort((item1,item2) => {
                    return item1[fieldName] < item2[fieldName];
                })
            }


             this.setState(this.state);
        }




    }

    searchHeroes(searchPhrase){
        console.log(this.state.Heroes);
        if (searchPhrase ==  "")
            this.setState({
                Heroes: this.state.Heroes.map( item => ({...item, visible:true}) )
            })
        else{
            this.setState({
                Heroes: this.state.Heroes.map( (item) => {
                    if (Object.values(item).reduce((acc,field) => {
                        return acc || (field.toString().indexOf(searchPhrase) != -1)
                    },false ))
                        return {...item, visible:true}

                    return {...item, visible:false}
                })
            })
        }

    }

  render() {
    return (
        <div className="App">

            <InputHero
                searchHeroes={(searchPhrase) => this.searchHeroes.call(this, searchPhrase)}
                addHero={(name) => this.add.call(this,name)}>
            </InputHero>

            <HeroTable heroesSort={(fieldName) => this.sort.bind(this,fieldName)}
                       heroesList={this.state.Heroes}
                       heroRemove={(id) => this.remove.bind(this,id)}>
            </HeroTable>

        </div>
    );
  }
}

export default App;
