import Vue from 'vue'
import App from './App.vue'
import "@/assets/iconfont/iconfont.css"
import Header from '../src/components/header/Header.vue'
import Footer from '../src/components/footer/Footer.vue'
import router from './router/index.js'

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')