import Sort from './Sort';
import PokeList from './PokeList';
import './App.css';
import request from 'superagent';
import React, { Component } from 'react'
import Search from './Search';

const loadDelay = (time) => new Promise((res, rej) => setTimeout(() => { res() }, time))

export default class PokeIndex extends Component {
  state = {
    sortOrder: '',
    query: '',
    pokeApi: [],
    loading: false,
    setCategory: '',
    page: 1,
  }

  handleOrderChange = async (e) => {
    this.setState({ sortOrder: e.target.value })
  }

  handleCategoryChange = async (e) => {
    this.setState({ setCategory: e.target.value })
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

nextPage = async (e) => {
  await this.setState({page: this.state.page + 1});
  this.fetchPokeApi();
}

previousPage = async (e) => {
  await this.setState({page: this.state.page - 1});
  this.fetchPokeApi();
}

  fetchPokeApi = async () => {
    this.setState({ loading: true});
    
    const URL = this.state.sortOrder
    ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.setCategory}&direction=${this.state.sortOrder}`
    : 'https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=';
    
    await loadDelay(3000)
    
    const data = await request.get(URL)
    
    this.setState({ loading: false });
    this.setState({ pokeApi: data.body.results });
  }


  render() {
    return (
        <div className='main-background'>
          <Search handleSearch={this.handleSearchChange} handleClick={this.handleClick} />
          <Sort sortOrder={this.handleOrderChange} sortCategory={this.handleCategoryChange} />
          <PokeList pokemon={this.state.pokeApi} />
          {this.state.page - 1 > 0 && (
                    <button onClick={this.prevPage}>
                        Prev Page ({this.state.page - 1})
                    </button>
                )}
                <button onClick={this.nextPage}>
                    Next Page ({this.state.page + 1})
                </button>
        </div>
    )
  }
}
