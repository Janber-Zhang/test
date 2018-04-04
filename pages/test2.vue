<template>
  <section class="container">
    <h1>test2</h1>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data(){
    return {
      load: false
    }
  },
  mounted(){
    this.load = true;
  }
}
</script>

<style>
</style>
