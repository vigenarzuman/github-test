import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './suggestions'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            results: []
        }
        this.getInfo = this.getInfo.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    getInfo() {
        axios.get(`api/user/${this.state.query}`)
            .then(({ data }) => {
                this.setState({
                    results: data
                })
            })
    }

    handleInputChange () {
        this.setState({
            query: this.search.value
        }, () => {
            if(this.state.query.length > 4)
                this.getInfo()
        })
    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <label for="usr">Search for login:</label>
                    <input type="text" class="form-control" id="usr"
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                </div>
                {this.state.query.length > 4 && (
                    <Suggestions results={this.state.results} />
                )}
                
                
            </div>
        )
    }
}

export default Search
