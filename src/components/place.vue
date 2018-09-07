<template>
  <div class="place">
    <div v-for="w in weathers" v-bind:key="w.woeid">
      <h2>{{ w.title }}</h2>
      <div v-for="day in w.consolidated_weather" v-bind:key="day.id" class="weather-box">
        <div class="icon">
          <img :src="`https://www.metaweather.com/static/img/weather/${ day.weather_state_abbr }.svg`">
        </div>
        <div>
          <strong>-{{ day.applicable_date | moment("dddd") }}-</strong>
          <ul>
            <li>Temp: {{ Math.round(day.the_temp * 100) / 100 }}º</li>
            <li>Max/Min: {{ Math.round(day.max_temp * 100) /100 }}º/{{ Math.round(day.min_temp * 100) / 100 }}º</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'place',
  props: ['weathers'],
  data: function () {
    return {
      weather: {data: this.weathers}
    }
  }
}
</script>

<style scoped>
  .weather-day {
    display: inline-block;
    margin: 10px;
  }
</style>
