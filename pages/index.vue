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
  head: {
    htmlAttrs: {
      lang: 'fi',
    },
    title: 'Elisa Tervonen - Minun CV',
    meta: [
      {
        'og:title': 'Elisa Tervonen - Minun CV',
        'twitter:title': 'Elisa Tervonen - Minun CV',
        'description': 'Web-kehittäjä Oulun alueella',
        'og:description': 'Web-kehittäjä Oulun alueella',
        'twitter:description': 'Web-kehittäjä Oulun alueella',
        'og:url': 'https://elisatervonen.com'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://elisatervonen.fi' }
    ]
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
