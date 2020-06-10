<template>
  <div class="bg-gray">
    <header>
      <h1><a :arial-label="$t('meta.gotomain')" href="#info" @click="scrollTo('#info', $event)">Elisa Tervonen</a></h1>
      <Languages/>
    </header>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
import Languages from '~/components/Languages.vue'

export default {
  components: {
    Languages
  },
  data: function () {
    return {
      filter: 'all',
      isScroll: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.scrollClass);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollClass);
  },
  methods: {
    scrollClass: function () {
      this.isScroll = window.scrollY > 100;
    },
    scrollTo: function (target, $event) {
      $event.preventDefault();
      VueScrollTo.scrollTo(target);
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';

header {
  margin: 0 auto;
  width: 1200px;
  padding: 1rem 0;
  position: relative;
  text-align: center;

  h1 {
    z-index: 0;
  }

  a {
    color: $orange;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    text-align: left;
    padding: 1rem 4.5rem 1rem 1.5rem;
  }
}

</style>
