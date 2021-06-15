import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
//take a single pokeman in as a prop

export default class PokeItem extends Component {
    render() {

        const Div = styled.div`
        background-color: ${this.props.data.color_1};
        color: ${this.props.data.color_2};
        border: solid .2em ${this.props.data.color_1};
        border-inline: .8em solid ${this.props.data.color_1};
        `

        const color = this.props.data.color_1;

        
        return (
            <Div className='pokemon-divs'>
                
                <h1 color={color}> {this.props.data.pokemon} </h1> 
                <Link to={`/pokemon/${this.props.data._id}`}>
                    <img className='wobble-hor-bottom' src={this.props.data.url_image} alt={this.props.data.pokemon} />
                </Link>
                <p className='poke-number'> #{this.props.data.id}</p>
                <p className='primary-type'>Type: {this.props.data.type_1} </p>
                <p className='speed'>Speed: {this.props.data.speed} </p>
            </Div>
        )
    }
}
