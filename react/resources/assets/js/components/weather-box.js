import React from "react";
import config from '../../config'


class WeatherBox extends React.Component {
    constructor(props) {
        super(props);
    }

    imageUrlPrepared() {
        let imageUrl = `${config.weatherState.api.iconUrl}${this.props.city.weather[0].icon}.png`;
        return imageUrl;
    }

    render() {
        const city = this.props.city;
        return (
            <div className="box weather-box">
                <span className="city-name">{city.name}</span>
                <img src={this.imageUrlPrepared()} className="ico" alt={city.name}/>
                <span className="temperature">{city.main.temp} °С</span>
                <span className="state">{city.weather[0].main}</span>
                <span className="wind">Wind : {city.wind.speed} m/s</span>
                <span className="button small border-button">Five day forecast</span>
            </div>
        );
    }

}

export default WeatherBox;