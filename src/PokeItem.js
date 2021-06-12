import React, { Component } from 'react'
import styled from 'styled-components'

//take a single pokeman in as a prop

export default class PokeItem extends Component {
    render() {

        const Div = styled.div`
        background-color: ${this.props.data.color_1};
        color: ${this.props.data.color_2};
        border-radius: 25px;
        `

        const color = this.props.data.color_f;
        console.log(color);
        
        return (
            <Div className='pokemon-divs'>
                
                <h1 color={color}> {this.props.data.pokemon} </h1>#{this.props.data.id}
                <img src={this.props.data.url_image} alt={this.props.data.pokemon} />
            </Div>
        )
    }
}
