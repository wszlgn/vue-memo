import Vue from 'vue';
import App from './App';
import plugins from './plugin';
Vue.use(plugins);
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    render: h => h(App)
});