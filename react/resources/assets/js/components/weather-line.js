import React from "react";
import config from '../../config'
import dateTimeFormat from '../helpers/date-time-format'


class WeatherLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.datePrepared()
        };
    }

    imageUrlPrepared() {
        let imageUrl = `${config.weatherState.api.iconUrl}${this.props.forecast.weather[0].icon}.png`;
        return imageUrl;
    }

    datePrepared() {
        let splitDate = this.props.forecast.dt_txt.split(/[ :-]+/);
        return dateTimeFormat(new Date(splitDate[0], splitDate[1] - 1, splitDate[2], splitDate[3], splitDate[4], splitDate[5]));
    }

    render() {
        const {date} = this.state;
        const {forecast} = this.props;
        return (
            <div className={'weather-line ' + date.dayName}>
                <div className="date">
                    <span className="day">{date.dayName}</span>
                    <span className="time">{date.timeNumber}</span>
                </div>
                <div className="ico"><img src={this.imageUrlPrepared()} className="ico"/></div>
                <div className="temperature">{forecast.main.temp}</div>
                <div className="state">{forecast.weather[0].main}</div>
                <div className="wind">{forecast.wind.speed}</div>
            </div>
        );
    }
}

export default WeatherLine;