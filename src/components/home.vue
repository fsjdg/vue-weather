<template>
  <div class="home">
    <h1>Weathers</h1>
    <p>{{msg}}</p>
    <weather></weather>
  </div>
</template>
<script>
import weather from './weather.vue'
export default {
  name: 'home',
  components: { weather },
  data: function () {
    return {
      msg: 'Welcome to Your favorite weather app.'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
