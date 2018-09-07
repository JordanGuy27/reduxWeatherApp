import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({ term: e.target.value });
    }

    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a five day forecast for your favourite cities" 
                    onChange={this.onChange}
                    className="form-control"
                    value={this.state.term}
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}