<template>
  <div>
    <Header/>
    <Navigation/>
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Navigation,
    Header
  }
}
</script>

<style>

</style>
