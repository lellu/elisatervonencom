<template>
  <nav>
    <ul class="nav">
      <li><a @click="scrollTo('#work')">Työ</a></li>
      <li><a @click="scrollTo('#education')">Koulutus</a></li>
      <li><a @click="scrollTo('#knowledge')">Osaaminen</a></li>
      <li><a @click="scrollTo('#others')">Muu toiminta</a></li>
    </ul>

    <ul class="languages">
      <li><nuxt-link to="/">FI</nuxt-link></li>
      <li><nuxt-link to="/en">EN</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
  },
  methods: {
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
  padding: 0 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  .toggle-menu {
    display: none;
  }

  &.fixed {
    left: 0;
    position: fixed;
    top: 0;
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
    padding: 1.5rem 1rem;
    text-transform: uppercase;

    .first & {
      padding: 1rem .5rem;
    }

    .current &,
    &:hover {
      background-color: $greendark;
    }

    @media only screen and (max-width: 550px) {
      width: 100%;
    }
  }
}

.languages {
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
}
</style>
