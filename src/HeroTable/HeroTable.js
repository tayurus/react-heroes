import React, { Component } from 'react';
import './HeroTable.css';

 class HeroTable extends React.Component{
    render(){
        return (
            <table cellPadding="10" className="HeroTable">
                <tbody>
                    <tr>
                        <th onClick={this.props.heroesSort("name")}>Имя</th>
                        <th onClick={this.props.heroesSort("status")}>Статус</th>
                    </tr>
                    {this.props.heroesList.map((hero) => {
                        if (hero.visible)
                            return (
                            <tr>
                                <td>
                                    {hero.name}
                                </td>
                                <td>
                                    {hero.status}
                                </td>
                                <td className="HeroTable__remove" title={"Удалить " + hero.name} onClick={this.props.heroRemove(hero.id)}>
                                    Х
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
        )
    }
}

export default HeroTable;
