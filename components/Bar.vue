<template>
  <span class="bar-item">
    <span class="bar">
      <span :style="{ width: number + '%'}" class="item" />
    </span>
    <span class="name">{{ number }}%</span>
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

.bar-item {
  display: inline-block;
  width: 320px;

  .bar {
    display: inline-block;
    width: 90%;
    background-color: $graylight;
    line-height: 0;

    .item {
      display: inline-block;
      background-color: $graydark;
      height: 2rem;
    }
  }
}
</style>
