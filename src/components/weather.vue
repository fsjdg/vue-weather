<template>
  <div>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search city.."/>
      <button type="button" v-on:click="onSearch">Search</button>
      <a href="">All Cities</a>
    </div>
    <div v-if="notFound"><p>“No results were found. Try changing the keyword!”</p></div>
    <group v-bind:weathers="weathers" v-if="type=='generalWeather'"></group>
    <place v-bind:weathers="weathers" v-else-if="type=='placeWeather'"></place>
  </div>
</template>
<script>
import Group from './group'
import Place from './place'
export default {
  name: 'weather',
  components: {Place, Group},
  props: ['type', 'woeid'],
  data: function () {
    return {
      weathers: [],
      search: '',
      notFound: false
    }
  },
  created () {
    this.getWeather(this.type)
  },
  methods: {
    generalWeather: function (cities) {
      let self = this
      cities.forEach(function (city) {
        self.$http.get('http://localhost/vue-weather/weather.php?command=search&keyword=' + city).then(function (place) {
          this.getPlaceWeather(place.body[0].woeid)
        }, function () {
          console.error('Error getting the place ' + city)
        })
      })
    },
    getPlaceWeather: function (woeid) {
      this.$http.get('http://localhost/vue-weather/weather.php?command=location&woeid=' + woeid).then(function (response) {
        this.weathers.push(response.body)
      }, function () {
        console.error('Error getting the weather for ' + city)
      })
    },
    getWeather: function (type) {
      this.weathers = []
      switch (type) {
        case 'generalWeather':
          this.generalWeather(this.theCities())
          break
        case 'placeWeather':
          this.getPlaceWeather(this.woeid)
          break
      }
    },
    theCities: function () {
      let cities = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver']
      let filteredCities = cities.filter(city => {
        return city.toLowerCase().includes(this.search.toLowerCase())
      })
      this.notFound = false
      if (filteredCities.length === 0) { this.notFound = true }
      return filteredCities
    },
    onSearch: function () {
      this.$router.push({name: 'search', params: {city: this.search}})
      this.getWeather(this.type)
    }
  }
}
</script>
<style>
  .weather-box {
    width: 150px;
    display: inline-block;
    margin: 10px;
  }
  .weather-box .icon {
    width: 50px;
    height: 50px;
    margin: 10px auto;
  }
  .weather-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
