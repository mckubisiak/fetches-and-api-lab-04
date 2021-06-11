import React, { Component } from 'react'
import PokeItem  from './PokeItem'


//



export default class PokeList extends Component {
    render() {
        let pokedex = this.props.pokemon;

// if (this.state.sortOrder.value === "descend") {

//         pokedex = pokedex.reverse();
    
    // } 
        return (
            <div className='pokeman-display'>
                
                
                { pokedex.map((pokemon, i) => <PokeItem data={pokemon}  key={i} />)}
                
                




            </div>
        )
    }
}
