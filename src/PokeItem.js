import React, { Component } from 'react'

//take a single pokeman in as a prop

export default class PokeItem extends Component {
    render() {

        
        return (
            <div>
               <img src={this.props.data.url_image} alt={this.props.data.pokemon} />
            </div>
        )
    }
}
