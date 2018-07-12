import React from "react";
import WeatherBox from './weather-box';
import config from '../../config'
import dateTimeFormat from '../helpers/date-time-format'

class WeatherBoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cities: [],
            nowDate: this.nowDateString(new Date())
        };
    }

    componentDidMount() {
        this.loadCities();
    }

    loadCities() {
        let cities = config.weatherState.cities;

        for (var city in config.weatherState.cities) {
            let cityId = cities[city].id;
            let apiUrl = this.apiUrlPrepared(cityId);

            this.apiFetchData(apiUrl);
        }
    }

    apiUrlPrepared(cityId) {
        let apiUrl = `${config.weatherState.api.dataUrl}weather?id=${cityId}&appid=${config.weatherState.api.appId}&units=metric`;
        return apiUrl;
    }

    apiFetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        cities: this.state.cities.concat([result])
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

    nowDateString(date) {
        const formattedDate = dateTimeFormat(date);
        return `${formattedDate.dayNumber} ${formattedDate.monthName} ${formattedDate.dayName}`;
    }

    render() {
        const {error, isLoaded, cities} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>{this.state.nowDate}</h1>
                        </div>
                        {cities.map((city,key) => (
                            <div className="col-4 col-xs-6" key={key}>
                                <WeatherBox city={city}/>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}

export default WeatherBoxList;