import React from "react";
import WeatherLine from './weather-line';
import config from '../../config';

class WeatherLineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            forecasts: []
        };
    }

    componentDidMount() {
        this.loadForecasts();
    }

    loadForecasts() {
        let apiUrl = this.apiUrlPrepared(this.props.cityId);
        this.apiFetchData(apiUrl);
    }

    apiUrlPrepared(cityId) {
        let apiUrl = `${config.weatherState.api.dataUrl}forecast?id=${cityId}&appid=${config.weatherState.api.appId}&units=metric`;
        return apiUrl;
    }

    apiFetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        forecasts: this.state.forecasts.concat([result])
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log('Api verileri alınamadı');
                }
            )
    }

    render() {
        const {error, isLoaded, forecasts} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div className="weather-line head">
                        <div className="date">Date</div>
                        <div className="ico">Expect</div>
                        <div className="temperature">Temperature (°С)</div>
                        <div className="state">State</div>
                        <div className="wind">Wind (m/s)</div>
                    </div>
                    {forecasts[0].list.map((forecast,key) => (
                        <WeatherLine forecast={forecast} key={key}/>
                    ))}
                </div>
            );
        }
    }
}

export default WeatherLineList;