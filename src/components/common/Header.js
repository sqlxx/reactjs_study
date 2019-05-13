import React from 'react'
import {NavLink} from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeStyle={{color: 'red'}} exact={true}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/boil-cal" activeStyle={{color: 'red'}}>Boil Calculator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tic-tac-toe"  activeStyle={{color: 'red'}}>Tic-Tac-Toe</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter"  activeStyle={{color: 'red'}}>Counter</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        )
    }
}