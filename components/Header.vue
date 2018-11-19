<template>
  <div class="bg-gray">
    <header>
      <h1>Elisa Tervonen</h1>

      <div class="languages">
        <nuxt-link v-if="$i18n.locale === 'fi'" :to="`/en` + $route.fullPath" active-class="none" exact>
          <span>{{ $t('links.english') }}</span>
        </nuxt-link>
        <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
          <span>{{ $t('links.finnish') }}</span>
        </nuxt-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {

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
