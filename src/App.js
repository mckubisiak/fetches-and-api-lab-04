import Header from './Header';
import PokeList from './PokeList';
import './App.css';
import request from 'superagent';
import React, { Component } from 'react'



export default class App extends Component {
  state = {
    sortOrder: '',
    query: '',
    pokeApi: []
  }


  componentDidMount = async () => {
  
    const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=')
    this.setState({pokeApi: data.body.results})

    console.log(this.state.pokeApi);
  }
  

  render() {
    return (
      <div>
        <Header />
        <PokeList pokemon={this.state.pokeApi} />

      </div>
    )
  }
}
