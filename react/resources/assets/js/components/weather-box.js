import React from "react";
import Popup from './popup';
import WeatherLineList from './weather-line-list';
import config from '../../config'


class WeatherBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleForecasts: false,
        }

        this.openForecasts = this.openForecasts.bind(this);
        this.closeForecasts = this.closeForecasts.bind(this);
    }

    imageUrlPrepared() {
        let imageUrl = `${config.weatherState.api.iconUrl}${this.props.city.weather[0].icon}.png`;
        return imageUrl;
    }

    openForecasts() {
        this.setState({
            visibleForecasts: true
        });
    }

    closeForecasts() {
        this.setState({
            visibleForecasts: false
        });
    }

    render() {
        const {city} = this.props;
        const {visibleForecasts} = this.state;

        let forecastsTitle = <h2>{city.name}</h2>;
        let forecastsBody = <WeatherLineList cityId={city.id}/>;

        return (
            <React.Fragment>
                <div className="box weather-box" onClick={this.openForecasts}>
                    <span className="city-name">{city.name}</span>
                    <img src={this.imageUrlPrepared()} className="ico" alt={city.name}/>
                    <span className="temperature">{city.main.temp} °С</span>
                    <span className="state">{city.weather[0].main}</span>
                    <span className="wind">Wind : {city.wind.speed} m/s</span>
                    <span className="button small border-button">Five day forecast</span>
                </div>
                {visibleForecasts ? <Popup head={forecastsTitle} body={forecastsBody} onClose={this.closeForecasts} /> : ""}
            </React.Fragment>
        );
    }
}

export default WeatherBox;