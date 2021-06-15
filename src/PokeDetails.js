import { Component } from 'react';
import request from 'superagent';
import styled from 'styled-components'


export default class PokeDetails extends Component {
    state = {
        pokeDetails: {},
        loading: false,
    };


    componentDidMount() {
        this.fetchDetails();
    }


    fetchDetails = async () => {
        this.setState({ loading: true });


        const apiId = this.props.match.params.pokeId;


        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex/${apiId}`
        );


        this.setState({ pokeDetails: data.body });
        this.setState({ loading: false });
    };




    render() {


        const Div = styled.div`
        background-color: ${this.state.pokeDetails.color_1};
        color: ${this.state.pokeDetails.color_2};
        border: solid .2em ${this.state.pokeDetails.color_1};
        border-inline: .8em solid ${this.state.pokeDetailgacs.color_1};
        `

        const color = this.state.pokeDetails.color_1;


        return (
            <Div className='pokemon-divs'>
                <h1 color={color}>{this.state.pokeDetails.pokemon}</h1>
                <img className='wobble-hor-bottom' src={this.state.pokeDetails.url_image} alt={this.state.pokeDetails.pokemon} />
                <p className='poke-number'> #{this.state.pokeDetails.id}</p>
                <p className='primary-type'>Type: {this.state.pokeDetails.type_1} </p>
                <p className='speed'>Speed: {this.state.pokeDetails.speed} </p>
            </Div>
        );
    }
}



















// import React, { Component } from 'react'
// import styled from 'styled-components'

// //take a single pokeman in as a prop

// export default class PokeItem extends Component {
//     render() {

//         const Div = styled.div`
//         background-color: ${this.props.data.color_1};
//         color: ${this.props.data.color_2};
//         border: solid .2em ${this.props.data.color_1};
//         border-inline: .8em solid ${this.props.data.color_1};
//         `
//         // let objectData = this.props.data;
//         const color = this.props.data.color_1;
//         const pokemonArray = Object.keys(this.props.data)
        
//         return (
//             <Div className='pokemon-divs'>
                
//                 <h1 color={color}> {this.props.data.pokemon} </h1> 
//                 <img className='wobble-hor-bottom' src={this.props.data.url_image} alt={this.props.data.pokemon} />
//                 <p className='poke-number'> #{this.props.data.id}</p>
//                 <p className='primary-type'>Type: {pokemonArray} </p>
//                 <p className='speed'>Speed: {this.props.data.speed} </p>
//             </Div>
//         )
//     }
// }
