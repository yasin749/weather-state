import Vue from "vue/dist/vue";
import config from '../../config'
import dateTimeFormat from '../helpers/date-time-format'

var weatherLine = Vue.component('weather-line', {
    props: {
        forecast: {type: Object, required: true}
    },
    data: function () {
        return {
            date: dateTimeFormat(new Date(this.forecast.dt_txt))
        }
    },
    methods: {
        imageUrlPrepared: function () {
            let imageUrl = `${config.weatherState.api.iconUrl}${this.forecast.weather[0].icon}.png`;
            return imageUrl;
        }
    },
    template: `
        <div v-bind:class="['weather-line', date.dayName.toLowerCase()]">
            <div class="date">
                <span class="day">{{date.dayName}}</span>
                <span class="time">{{date.timeNumber}}</span>
            </div>
            <div class="ico"><img v-bind:src="imageUrlPrepared()" class="ico"></div>
            <div class="temperature">{{this.forecast.main.temp}}</div>
            <div class="state">{{this.forecast.weather[0].main}}</div>
            <div class="wind">{{this.forecast.wind.speed}}</div>
        </div>
    `
})

export default weatherLine;
