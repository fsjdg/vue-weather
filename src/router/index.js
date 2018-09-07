import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import location from '@/components/location'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(VueMoment)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search/:city',
      name: 'search',
      component: home
    },
    {
      path: '/weather/:woeid',
      name: 'location',
      component: location
    }
  ]
})
