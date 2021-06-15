import { Component } from 'react';
import request from 'superagent';

// const loadDelay = (time) => new Promise((res, rej) => setTimeout(() => { res() }, time))

export default class PokeDetails extends Component {
    state = {
        pokeDetail: {},
        loading: false,
    };
    componentDidMount() {
        this.fetchDetail();
    }

    fetchDetail = async () => {
        this.setState({ loading: true });
        // https://pokedex-alchemy.herokuapp.com/api/pokedex/<pokeId>
        const uniqueId = this.props.match.params.pokeId;
        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex/${uniqueId}`
        );
        console.log(data.body);
        this.setState({ pokeDetail: data.body });
        this.setState({ loading: false });
    };
    render() {
        return (
            <div>
                {this.state.loading && <h1>Loading!</h1>}
                {!this.state.loading && (
                    <>
                        <h2>Welcome to Poke Details Page</h2>
                        <h3>{this.props.match.params.pokeId}</h3>

                        <h3>{this.state.pokeDetail.pokemon}</h3>
                    </>
                )}
            </div>
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
