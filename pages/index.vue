<template>
  <main>
    <Info />
    <div class="bg-gray"><Work :filter="selectedfilter"/></div>
    <Education :filter="selectedfilter"/>
    <div class="bg-gray"><Courses :filter="selectedfilter"/></div>
    <Knowledge :filter="selectedfilter"/>
    <div class="bg-gray"><Others :filter="selectedfilter"/></div>
    <Hobbies :filter="selectedfilter"/>
  </main>
</template>

<script>
import Info from '~/components/Info.vue'
import Work from '~/components/Work.vue'
import Education from '~/components/Education.vue'
import Courses from '~/components/Courses.vue'
import Knowledge from '~/components/Knowledge.vue'
import Others from '~/components/Others.vue'
import Hobbies from '~/components/Hobbies.vue'
import { mapState } from 'vuex'
//import VueI18n from 'vue-i18n'

export default {
  components: {
    Work,
    Education,
    Courses,
    Knowledge,
    Others,
    Hobbies,
    Info
  },
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  },
  fetch({ store }) {
    store.commit('setFilter')
  },
  computed: mapState([
    'selectedfilter'
  ]),
  methods: {
    setFilter(filter) {
      this.$store.commit('selectedfilter')
    }
  }
}
</script>

<style lang="scss">

</style>
