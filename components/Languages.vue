<template>
  <div class="languages">
    <nuxt-link v-if="$i18n.locale === 'fi'" :to="`/en` + $route.fullPath" :aria-label="$t('links.english')" active-class="none" exact>
      <span>{{ $t('links.en') }}</span>
    </nuxt-link>
    <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" :aria-label="$t('links.finnish')" active-class="none" exact>
      <span>{{ $t('links.fi') }}</span>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
@import 'assets/scss/colors.scss';
.languages {
  display: block;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 550px) {
    white-space: nowrap;
  }

  li {
    display: inline-block;
  }

  a {
    color: $green;
    display: inline-block;
    padding: 0.5rem;
    text-transform: uppercase;
    background-color: $white;
    margin-top: 0.7rem;

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

header .languages {
  display: none;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  z-index: 1;

  a {
    color: $white;
    background-color: $green;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
}
</style>
