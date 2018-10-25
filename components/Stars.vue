<template>
  <span class="stars">
    <i v-for="n in number" :key="n" class="fa fa-star" />
  </span>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

.stars {
  color: $orange;

  .fa {
    font-size: 1.5rem;
    padding: 0 0.2rem;
  }

  @media only screen and (max-width: 550px) {
    display: none;
  }
}
</style>
