<template>
  <section>
    <div class="filters">
      <button :class="{ active: filter == 'all' }" @click="onFilterChanged('all')">Kaikki</button>
      <button :class="{ active: filter == 'web' }" @click="onFilterChanged('web')">Web-kehitys</button>
      <button :class="{ active: filter == 'other' }" @click="onFilterChanged('other')">Sosiaalinen ala</button>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      filter: 'all'
    }
  },
  methods: {
    onFilterChanged: function (type) {
      this.filter = type;
      this.$emit('filter-changed', type);
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';

.filters {
  display: flex;

  button {
    padding: 1rem;
    width: 33.33%;
    color: $white;
    text-transform: uppercase;
    border: none;
    background-color: $green;
    font-size: 1.5rem;
    outline: none;
    cursor: pointer;

    &.active {
      background-color: $greendark;
    }
  }
}
</style>
