<template>
  <nav :class="{ 'is-scroll': isScroll }" @scroll="scrollClass()">
    <ul class="nav">
      <li><a @click="scrollTo('#work')">Työ</a></li>
      <li><a @click="scrollTo('#education')">Koulutus</a></li>
      <li><a @click="scrollTo('#knowledge')">Osaaminen</a></li>
      <li><a @click="scrollTo('#others')">Muu toiminta</a></li>
    </ul>

    <Filters @filter-changed="$emit('filter-changed', $event)"/>
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

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 0.5rem;
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

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  li {
    display: inline-block;

    @media only screen and (max-width: 550px) {
      width: 100%;
    }
  }

  a {
    color: $white;
    display: inline-block;
    padding: 1.3rem 0.7rem;
    text-transform: uppercase;
    cursor: pointer;

    @media only screen and (max-width: 922px) {
      padding: 1.3rem 0.5rem;
    }

    .first & {
      padding: 1rem .5rem;
    }

    .current &,
    &:hover {
      background-color: $greendark;
    }

    @media only screen and (max-width: 550px) {
      width: 100%;
      padding: 0.5rem;
    }
  }
}

/*.languages {
  display: block;
  text-align: right;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 550px) {
    white-space: nowrap;
  }

  li {
    display: inline-block;
  }

  a {
    color: $white;
    display: inline-block;
    padding: 1.5rem 1rem;
    text-transform: uppercase;

    @media only screen and (max-width: 550px) {
      padding: 0.5rem;
    }

    .first & {
      padding: 1rem;
    }

    &.nuxt-link-exact-active {
      display: none;
    }

    &:hover {
      background-color: $greendark;
    }
  }
}*/
</style>
