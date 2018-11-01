<template>
  <div>
    <Header/>
    <Navigation />
    <nuxt />
    <Sidebar/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Navigation,
    Header,
    Sidebar
  },
  data: function () {
    return {}
  }
}
</script>

<style lang="scss">
</style>
