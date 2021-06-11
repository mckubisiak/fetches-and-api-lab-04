import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                
                <label>
                    <select onChange={this.props.sortOrder}>
                            
                            <option value=" "> Unordered </option>
                            <option value="asc"> Ascending </option>
                            <option value="desc"> Descending </option>
                    </select>
                </label>

                <label>
                    <select onChange={this.props.sortCategory}>
                            
                            <option value=" "> No category </option>
                            <option value="id"> Pokemon # </option>
                            <option value="height"> height </option>
                            <option value="weight"> weight </option>
                            <option value="weight"> weight </option>
                            <option value="type_1"> primary type </option>
                            <option value="type_2"> secondary type </option>
                            <option value="hp"> hit points </option>
                    </select>
                </label>

            </div>
        )
    }
}
