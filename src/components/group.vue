<template>
  <div>
    <div v-for="w in weathers" v-bind:key="w.woeid" v-on:click="goTo(w.woeid)" class="weather-box">
      <div class="icon">
        <img :src="`https://www.metaweather.com/static/img/weather/${ w.consolidated_weather[0].weather_state_abbr }.svg`">
      </div>
      <div>
        <strong>{{ w.title }}</strong>
        <ul>
          <li>Temp: {{ Math.round(w.consolidated_weather[0].the_temp * 100) / 100 }}º</li>
          <li>Max/Min: {{ Math.round(w.consolidated_weather[0].max_temp * 100) /100 }}º/{{ Math.round(w.consolidated_weather[0].min_temp * 100) / 100 }}º</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'group',
  props: ['weathers'],
  methods: {
    goTo: function (woeid) {
      this.$router.push({name: 'location', params: {woeid: woeid}})
    }
  }
}
</script>

<style scoped>

</style>
