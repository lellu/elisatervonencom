<template>
  <nav :class="{ 'is-scroll': isScroll }" @scroll="scrollClass()">
    <ul class="nav">
      <li><a @click="scrollTo('#work')">{{ $t('links.work') }}</a></li>
      <li><a @click="scrollTo('#education')">{{ $t('links.education') }}</a></li>
      <li><a @click="scrollTo('#knowledge')">{{ $t('links.knowledge') }}</a></li>
      <li><a @click="scrollTo('#others')">{{ $t('links.other') }}</a></li>
    </ul>
    <Filters/>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
import Filters from '~/components/Filters.vue'

export default {
  components: {
    Filters
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
    scrollTo: function (target) {
      VueScrollTo.scrollTo(target);
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';

nav {
  background-color: $green;
  padding: 0 2rem 0 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 950px) {
    padding: 0;
  }

  .toggle-menu {
    display: none;
  }

  &.is-scroll {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
  }
}

.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;

  @media only screen and (max-width: 950px) {
    width: 100%;
    background-color: $greendark;
    padding: 0 1rem;
  }

  @media only screen and (max-width: 550px) {
      padding: 0rem 1rem 0rem 1rem;
  }

  li {
    display: inline-block;

    @media only screen and (max-width: 500px) {
      width: 49%;
    }
  }

  a {
    color: $white;
    display: inline-block;
    padding: 1.3rem 0.7rem;
    text-transform: uppercase;
    cursor: pointer;

    @media only screen and (max-width: 950px) {
      padding: 1rem 0.7rem;
    }

    .first & {
      padding: 1rem .5rem;
    }

    .current &,
    &:hover {
      background-color: $greendark;

      @media only screen and (max-width: 950px) {
        background-color: $green;
      }
    }

    @media only screen and (max-width: 550px) {
      width: 100%;
      padding: 0.5rem;
    }
  }
}

.filters {
  @media only screen and (max-width: 550px) {
    display: none;
  }
}
</style>
