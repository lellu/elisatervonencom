<template>
  <div>
    <Header/>
    <Navigation @filter-changed="filter = $event" />
    <nuxt :filter="filter" />
    <Sidebar/>
    {{ filter }}
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
    return {
      filter: 'all'
    }
  }
}
</script>

<style lang="scss">
</style>
