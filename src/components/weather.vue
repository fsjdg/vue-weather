<template>
  <div>
    <div v-for="w in weathers" v-bind:key="w.woeid" class="weather-place">
      <div class="icon">
        <img :src="`https://www.metaweather.com/static/img/weather/${ w.consolidated_weather[weatherNumber].weather_state_abbr }.svg`">
      </div>
      <div>
        <strong>{{ w.title }}</strong>
        <ul>
          <li>Temp: {{ Math.round(w.consolidated_weather[weatherNumber].the_temp * 100) / 100 }}º</li>
          <li>Max/Min: {{ Math.round(w.consolidated_weather[weatherNumber].max_temp * 100) /100 }}º/{{ Math.round(w.consolidated_weather[weatherNumber].min_temp * 100) / 100 }}º</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'weather',
  data: function () {
    return {
      weathers: [],
      weatherNumber: 0
    }
  },
  created () {
    this.getWeather()
  },
  methods: {
    getWeather: function () {
      let cities = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver']
      let self = this
      cities.forEach(function (city) {
        self.$http.get('http://localhost/vue-weather/weather.php?command=search&keyword=' + city).then(function (place) {
          self.$http.get('http://localhost/vue-weather/weather.php?command=location&woeid=' + place.body[0].woeid).then(function (response) {
            self.weathers.push(response.body)
          }, function () {
            console.error('Error getting the weather for ' + city)
          })
        }, function () {
          console.error('Error getting the place ' + city)
        })
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weather-place {
    width: 150px;
    display: inline-block;
    margin: 10px;
  }
  .weather-place .icon {
    width: 50px;
    height: 50px;
    margin: 10px auto;
  }
  .weather-place ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
