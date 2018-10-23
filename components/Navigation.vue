<template>
  <nav>
    <ul class="nav">
      <li><a href="#work">Työ</a></li>
      <li><a href="#education">Koulutus</a></li>
      <li><a href="#knowledge">Osaaminen</a></li>
      <li><a href="#hobbies">Muu toiminta</a></li>
    </ul>

    <ul class="languages">
      <li><nuxt-link to="/">FI</nuxt-link></li>
      <li><nuxt-link to="/en">EN</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
//import vueSmoothScroll from 'vue2-smooth-scroll'
//Vue.use(vueSmoothScroll)

export default {
  components: {
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
    padding: 1rem 1rem;
    text-transform: uppercase;

    .first & {
      padding: 1rem;
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

  @media only screen and (max-width: 550px) {
    white-space: nowrap;
  }

  li {
    display: inline-block;
  }

  a {
    color: $white;
    display: inline-block;
    padding: 1rem 1rem;
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
