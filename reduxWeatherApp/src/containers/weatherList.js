import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

//always remove export default on the class once the export default connect has been written
class WeatherList extends Component {

    //first argument for every call will be an object containing the city data
    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //these variables are handling the data, therefore the sparklines component will not need to have access to Redux
        const { lon, lat } = cityData.city.coord;
        

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} />{name}</td>
                <td><Chart data={temps} color="green" units="K" /></td>
                <td><Chart data={pressures} color="red" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)} 
                </tbody>
            </table>
            //call function for every city object in the array
        )
    }
}

function mapStateToProps({ weather }) {
     return { weather }; // same as {weather: weather}
}

export default connect (mapStateToProps)(WeatherList);