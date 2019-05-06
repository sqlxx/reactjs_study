import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import TicTacToeApp from './TicTacToeApp'
import BoilCalApp from './BoilCalApp'

function Index() {
    return <h2>Home Page</h2>
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/boil-cal">Boil Calculator</Link>
                        </li>
                        <li>
                            <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Route path="/" exact component={Index}/>
            <Route path="/boil-cal" component={BoilCalApp}/>
            <Route path="/tic-tac-toe" component={TicTacToeApp}/>
        </Router>
    )
}

export default AppRouter