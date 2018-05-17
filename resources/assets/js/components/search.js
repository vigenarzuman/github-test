import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './suggestions'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            results: [],
            page: 1,
            count: 20,
        }
        this.getInfo = this.getInfo.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    getInfo() {
        this.getDataByPage(1);
    }

    getDataByPage(page){
        axios.get(`/api/user/${this.state.user}/${this.state.page}/${this.state.count}`)
            .then(({ data }) => {
                let results = this.state.results;
                // results = results.concat(data.items);
                let newResultr = data.items;
                if(page!==1){
                    newResultr = [...results, ...data.items]
                }
                this.setState({ results: newResultr })
            })
    }

    handleInputChange () {
        this.setState({
            user: this.search.value,
            page: 1
        }, () => {
            if(this.state.user.length > 4)
                this.getInfo()
        })
    }
    loadMore() {
        this.setState({
            page: ++this.state.page
        }, () => {
            this.getDataByPage(this.state.page)
        })
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="usr">Search for login:</label>
                    <input type="text" className="form-control" id="usr"
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                </div>
                {this.state.user.length > 4 && (
                    <Suggestions 
                        results={this.state.results} 
                        user = {this.state.user}
                        loadMore = {this.loadMore}
                    />
                )}
            </div>
        )
    }
}

export default Search
