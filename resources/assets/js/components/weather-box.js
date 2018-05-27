import Vue from "vue/dist/vue";
import config from '../../config'
import popup from './popup'
import weatherLineList from './weather-line-list'

var weatherBox = Vue.component('weather-box', {
    props: {
        city: {type: Object, required: true},
    },
    data: function () {
        return {
            visibleForecasts: false,
        }
    },
    methods: {
        imageUrlPrepared: function () {
            let imageUrl = `${config.weatherState.api.iconUrl}${this.city.weather[0].icon}.png`;
            return imageUrl;
        },
        openForecasts:function () {
            this.visibleForecasts = true;
        },
        closeForecasts:function () {
            this.visibleForecasts = false;
        }
    },
    template: `
        <div>
            <div class="box weather-box" v-on:click="openForecasts()">
                <span class="city-name">{{this.city.name}}</span>
                <img v-bind:src="imageUrlPrepared()" class="ico" v-bind:alt="city.name">
                <span class="temperature">{{this.city.main.temp}} °С</span>
                <span class="state">{{this.city.weather[0].main}}</span>
                <span class="description">{{this.city.weather[0].description}}</span>
                <span class="wind">Wind : {{this.city.wind.speed}} m/s</span>
                <span class="button small border-button">Five day forecast</span>
            </div>
            <div v-if="visibleForecasts">
                <popup v-on:closed="closeForecasts">
                    <h2 slot="head">{{this.city.name}}</h2>
                    <weather-line-list slot="body" v-bind:cityId="city.id"></weather-line-list>
                </popup>
            </div>
            
        </div>
    `
})

export default weatherBox;
