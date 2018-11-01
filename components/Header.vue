<template>
  <div class="bg-gray">
    <header>
      <a href="#info"><h1>Elisa Tervonen</h1></a>

      <ul class="languages">
        <li><nuxt-link to="/">FI</nuxt-link></li>
        <li v-if="false"><nuxt-link to="/en">EN</nuxt-link></li>
      </ul>
    </header>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';

header {
  margin: 0 auto;
  width: 1200px;
  padding: 1rem 0;
  position: relative;
  text-align: center;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    text-align: left;
    padding: 1rem 4.5rem 1rem 1.5rem;
  }
}

.languages {
  display: block;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media only screen and (max-width: 550px) {
    white-space: nowrap;
  }

  li {
    display: inline-block;
  }

  a {
    color: $white;
    display: inline-block;
    padding: 0.5rem;
    text-transform: uppercase;
    background-color: $green;

    @media only screen and (max-width: 550px) {
      padding: 0.5rem;
    }

    .first & {
      padding: 1rem;
    }

    &.nuxt-link-exact-active {
      //display: none;
      color: $green;
      background-color: $greendark;
    }

    &:hover {
      background-color: $greendark;
    }
  }
}
</style>
