import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        //this.refs.map would give a direct reference to this div
        return <div ref="map"></div>
    }
}

export default GoogleMap;