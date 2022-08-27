import Vue from 'vue';

const mixin = {
    methods: {
        capitalize(string) {
            return (string.toString().charAt(0).toUpperCase() + string.toString().slice(1)).replace('-', ' ');
        }
    }
}

Vue.mixin(mixin)
