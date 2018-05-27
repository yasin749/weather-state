import Vue from "vue/dist/vue";

var weatherBox = Vue.component('weather-box', {
    data: function () {
        return {
            count: 0
        }
    },
    template: `
        <div class="vue-template">
            <div class="box weather-box">
                <a href="javascript:;" class="adaptLink">
                    <span class="city-name">İstanbul</span>
                    <img src="http://openweathermap.org/img/w/04d.png" class="ico" alt="istanbul">
                    <span class="temperature">19 to 23 °С</span>
                    <span class="state">Clouds</span>
                    <span class="description">broken clouds</span>
                    <span class="wind">Wind : 5.1 m/s</span>
                    <span class="button small border-button">Five day forecast</span>
                </a>
            </div>
        </div>
    `
})

export default weatherBox;