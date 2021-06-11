import Header from './Header';
import Sort from './Sort';
import PokeList from './PokeList';
import './App.css';
import request from 'superagent';
import React, { Component } from 'react'
import Search from './Search';


const loadDelay = (time) => new Promise((res, rej) => setTimeout(() => { res() }, time))

export default class App extends Component {
  state = {
    sortOrder: '',
    query: '',
    pokeApi: [],
    loading: false,
    setCategory: ''
  }

  handleOrderChange = async (e) => {
    this.setState({ sortOrder: e.target.value })
    await this.fetchPokeApi();
  }

  handleCategoryChange = async (e) => {
    this.setState({ setCategory: e.target.value })
    await this.fetchPokeApi();
  }

  handleSearchChange = (e) => {
  this.setState({ query: e.target.value })
  }

  componentDidMount = async () => { 
    await this.fetchPokeApi();
    
  }

  handleClick = async () => { 
    await this.fetchPokeApi();
  }

  

  fetchPokeApi = async () => {
    console.log(this.state)
    this.setState({ loading: true});
    
    const URL = this.state.sortOrder
    ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.setCategory}&direction=${this.state.sortOrder}`
    : 'https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=';


    await loadDelay(3000)
    
    const data = await request.get(URL)
    
    this.setState({ loading: false });
    this.setState({ pokeApi: data.body.results });
    
    console.log(URL)
  }


  render() {
    console.log(this.state.sortOrder)
    // console.log(this.state.setCategory)

    return (
      <div>
        <Header />
        <Search handleSearch={this.handleSearchChange} handleClick={this.handleClick} />
        <Sort sortOrder={this.handleOrderChange} sortCategory={this.handleCategoryChange} />
        <PokeList pokemon={this.state.pokeApi} />
      </div>
    )
  }
}
