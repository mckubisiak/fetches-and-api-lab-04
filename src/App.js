import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import PokeIndex from './PokeIndex';
import PokeItem from './PokeItem';

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/pokedex" exact component={PokeIndex} />
                        <Route path="/pokedex/:id" exact component={PokeItem} />

                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}
