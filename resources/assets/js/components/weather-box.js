import Vue from "vue/dist/vue";
import config from '../../config'

var weatherBox = Vue.component('weather-box', {
    props: {
        city: {type: Object, required: true}
    },
    data: function () {
        return {}
    },
    methods: {
        imageUrlPrepared : function () {
            let imageUrl = `http://openweathermap.org/img/w/${this.city.weather[0].icon}.png`;
            return imageUrl;
        }
    },
    template: `
        <div>
            <div class="box weather-box">
                <span class="city-name">{{this.city.name}}</span>
                <img v-bind:src="imageUrlPrepared()" class="ico" v-bind:alt="city.name">
                <span class="temperature">{{this.city.main.temp}} °С</span>
                <span class="state">{{this.city.weather[0].main}}</span>
                <span class="description">{{this.city.weather[0].description}}</span>
                <span class="wind">Wind : {{this.city.wind.speed}} m/s</span>
                <span class="button small border-button">Five day forecast</span>
            </div>
        </div>
    `
})

export default weatherBox;
