import React, { Component } from 'react';
import './HeroTable.css';

 class HeroTable extends React.Component{
    render(){
        return (
            <table cellPadding="10" className="HeroTable">
                <tbody>
                    <tr>
                        <th>Имя</th>
                        <th>Статус</th>
                    </tr>
                    {this.props.heroesList.map((hero) => {
                        return (
                        <tr>
                            <td>
                                {hero.name}
                            </td>
                            <td>
                                {hero.status}
                            </td>
                            <td className="HeroTable__remove" title={"Удалить пидора " + hero.name + " нахуй"}>
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
