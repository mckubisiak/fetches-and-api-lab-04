import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <section className='test'>
                
                <NavLink className="nav-link" exact to="/">
                    Home
                </NavLink>
                
                <header className='header-text'>
                Alcisiak Code Lab
                </header>
                
                <p className='spoiler'> Please leave the trans pokeball alone.</p>

                <NavLink className="nav-link" to="/pokedex">
                    Pokedex
                </NavLink>

            </section>
        )
    }
}
