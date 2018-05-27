import Vue from "vue/dist/vue";
import weatherBox from './weather-box'

var weatherBoxList = Vue.component('weather-box-list', {
    data: function () {
        return {
            count: 0
        }
    },
    template: `
        <div class="vue-template">
            <div class="col-12">
                <h1>26 Mayıs Cumartesi</h1>
            </div>
            <div class="col-4">
                <weather-box></weather-box>
            </div>
        </div>
    `
})

export default weatherBoxList;