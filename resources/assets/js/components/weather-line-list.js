import Vue from "vue/dist/vue";
import VueResource from 'vue-resource'
import config from '../../config'
import weatherLine from './weather-line'

Vue.use(VueResource);

var weatherLineList = Vue.component('weather-line-list', {
    props: {
        cityId: {type: Number, required: true},
    },
    data: function () {
        return {
            forecasts: [],
        }
    },
    created() {
        this.loadForecasts();
    },
    methods: {
        loadForecasts: function () {
            let apiUrl = this.apiUrlPrepared(this.cityId);
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
            <div v-if="forecasts.length == 0">Loading...</div>
            <div v-if="forecasts.length > 0">
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
        </div>
    `
})

export default weatherLineList;