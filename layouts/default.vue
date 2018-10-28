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
import FixedHeader from 'vue-fixed-header'

export default {
  components: {
    Navigation,
    Header,
    Sidebar,
    FixedHeader
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
