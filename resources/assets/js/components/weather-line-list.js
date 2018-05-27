import Vue from "vue/dist/vue";
import VueResource from 'vue-resource'
import config from '../../config'
import weatherLine from './weather-line'

Vue.use(VueResource);

var weatherLineList = Vue.component('weather-line-list', {
    data: function () {
        return {
            forecasts: [],
            cityId : 745044
        }
    },
    created() {
        this.loadForecasts();
    },
    methods: {
        loadForecasts: function () {
            let cityId = this.cityId;
            let apiUrl = this.apiUrlPrepared(cityId);
            this.apiFetchData(apiUrl);
        },
        apiUrlPrepared: function (cityId) {
            let apiUrl = `${config.weatherState.api.dataUrl}forecast?id=${cityId}&appid=${config.weatherState.api.appId}`;
            return apiUrl;
        },
        apiFetchData: function (url) {
            this.$http.get(url).then(response => {
                this.forecasts.push(response.body);
            }, response => {
                console.log('Api verileri alınamadı');
            });
        },
    },
    template: `
        <div>
            <h2>{{forecasts[0].city.name}}</h2>
            <div class="weather-line head">
                <div class="date">Date</div>
                <div class="ico">Expect</div>
                <div class="temperature">Temperature (°С)</div>
                <div class="state">State</div>
                <div class="wind">Wind (m/s)</div>
            </div>
            <div v-for="(forecast, index) in forecasts[0].list">
                <weather-line v-bind:forecast="forecast"></weather-line>
            </div>
        </div>
    `
})

export default weatherLineList;