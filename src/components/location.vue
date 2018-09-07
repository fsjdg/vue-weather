<template>
  <div class="location">
    <a href="">Back to Weathers</a>
    <weather :type="placeWeather" :woeid="woeid"></weather>
  </div>
</template>
<script>
import weather from './weather.vue'
export default {
  name: 'location',
  components: { weather },
  data: function () {
    return {
      woeid: this.$route.params.woeid,
      placeWeather: 'placeWeather'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
