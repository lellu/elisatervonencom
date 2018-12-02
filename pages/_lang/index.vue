<template>
  <div>
    <Header/>
    <Navigation />
    <main>
      <div class="bg-gray"><Work :filter="selectedfilter"/></div>
      <Education :filter="selectedfilter"/>
      <div class="bg-gray"><Courses :filter="selectedfilter"/></div>
      <Knowledge :filter="selectedfilter"/>
      <div class="bg-gray"><Others :filter="selectedfilter"/></div>
      <Hobbies :filter="selectedfilter"/>
    </main>
    <Sidebar/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
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
    Navigation,
    Header,
    Sidebar,
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
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale
      },
      title: this.getText('meta', 'title'),
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.getText('meta', 'title') },
        { hid: 'twitter:title', name: 'og:title', content: this.getText('meta', 'title') },
        { hid: 'description', name: 'description', content: this.getText('meta', 'description') },
        { hid: 'og:description', name: 'og:description', content: this.getText('meta', 'description') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.getText('meta', 'description') },
        { hid: 'og:url', name: 'og:url', content: this.getUrl() }
      ],
      link: [
        { rel: 'canonical', href: this.getUrl() }
      ]
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
    },
    getText(group, key) {
      const texts = require('~/locales/'+this.$store.state.locale+'.json');
      return texts[group][key];
    },
    getUrl() {
      let path = 'https://elisatervonen.com'+this.$nuxt.$route.fullPath;
      return path;
    }
  }
}
</script>

<style lang="scss">

</style>
