import Vue from "vue/dist/vue";

var popup = Vue.component('popup', {
    data: function () {
        return {}
    },
    methods: {
        close: function () {
            this.$emit('closed');
        }
    },
    template: `
        <div class="popup">
            <div class="black-section" v-on:click="close()"></div>
            <div class="content-section-wrapper">
                <a href="javascript:;" class="close-button aligner adaptLink" v-on:click="close()">X</a>
                <div class="content-section">
                    <div class="head-block">
                        <slot name="head"></slot>
                    </div>
                    <div class="body-block">
                        <div class="body-block-inner">
                            <slot name="body"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

export default popup;
