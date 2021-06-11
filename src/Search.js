import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                
                <input type="text" onChange={this.props.handleSearch} />
                        <button  onClick={this.props.handleClick} > Search! </button>

            </div>
        )
    }
}
