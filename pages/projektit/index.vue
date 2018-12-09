<template>
  <main>
    <Projects/>
  </main>
</template>

<script>
import Projects from '~/components/Projects.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Projects
  },
  props: {
  },
  fetch({ store }) {
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
        { hid: 'og:url', name: 'og:url', content: 'https://elisatervonen.com' }
      ]
    }
  },
  computed: mapState([
  ]),
  methods: {
    getText(group, key) {
      const texts = require('~/locales/'+this.$store.state.locale+'.json');
      return texts[group][key];
    }
  }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
</style>
