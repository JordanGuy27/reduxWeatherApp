import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        //console.log(e.target.value);
        this.setState({ term: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div>
                <h1 className="weather">Weather Tracker</h1>
                <form onSubmit={this.onSubmit} className="input-group">
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
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

//callback functions with a reference to 'this' need to be bound