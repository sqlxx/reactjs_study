import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import TicTacToeApp from './components/TicTacToe/TicTacToeApp'
import BoilCalApp from './components/BoilCalculator/BoilCalApp'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import CounterApp from './components/Counter/Counter'
import MainApp from './components/common/MainApp';

const store = configureStore()

function Index() {
   return <h2>Home Page</h2>
}

function AppRouter() {
    return (
        <Provider store={store}>
            <Router>
                <MainApp/>
                <Route path="/" exact component={Index}/>
                <Route path="/boil-cal" component={BoilCalApp}/>
                <Route path="/tic-tac-toe" component={TicTacToeApp}/>
                <Route path="/counter" component={CounterApp}/>
            </Router>
        </Provider>
    )
}

export default AppRouter