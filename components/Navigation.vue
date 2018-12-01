<template>
  <nav :class="{ 'is-scroll': isScroll }" @scroll="scrollClass()">
    <ul class="nav">
      <li><a :aria-label="$t('links.movetosection')+$t('links.work')" :title="$t('links.movetosection')+$t('links.work')" href="#work" @click="scrollTo('#work', $event)">{{ $t('links.work') }}</a></li>
      <li><a :aria-label="$t('links.movetosection')+$t('links.education')" :title="$t('links.movetosection')+$t('links.education')" href="#education" @click="scrollTo('#education', $event)">{{ $t('links.education') }}</a></li>
      <li><a :aria-label="$t('links.movetosection')+$t('links.knowledge')" :title="$t('links.movetosection')+$t('links.knowledge')" href="#knowledge" @click="scrollTo('#knowledge', $event)">{{ $t('links.knowledge') }}</a></li>
      <li><a :aria-label="$t('links.movetosection')+$t('links.other')" :title="$t('links.movetosection')+$t('links.other')" href="#others" @click="scrollTo('#others', $event)">{{ $t('links.other') }}</a></li>
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
    scrollTo: function (target, $event) {
      $event.preventDefault();
      //$event.addClass('current');
      VueScrollTo.scrollTo(target);
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';

nav {
  background-color: $green;
  padding: 0 2rem 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    background-color: $greendark;
    padding: 0 1rem;
  }

  @media only screen and (max-width: 400px) {
      padding: 0.5rem 0.8rem;
  }

  li {
    display: inline-block;

    @media only screen and (max-width: 400px) {
      width: 49%;
    }
  }

  a {
    color: $white;
    display: inline-block;
    padding: 1.2rem 0.7rem;
    //text-transform: uppercase;
    font-size: 1.1rem;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      padding: 1rem 0.7rem;
      font-size: 1rem;
    }

    .first & {
      padding: 1rem .5rem;
    }

    .current &,
    &:hover {
      background-color: $greendark;

      @media only screen and (max-width: 768px) {
        background-color: $green;
      }
    }

    @media only screen and (max-width: 400px) {
      width: 100%;
      padding: 0.5rem 0.5rem;
    }
  }
}

.filters {
  @media only screen and (max-width: 550px) {
    display: none;
  }
}
</style>
