<template>
  <div class="filters">
    <label>Suodata: </label>
    <button :class="{ active: filter == 'all' }" @click="onFilterChanged('all')">Kaikki</button>
    <button :class="{ active: filter == 'web' }" @click="onFilterChanged('web')">Web-kehitys</button>
    <button :class="{ active: filter == 'other' }" @click="onFilterChanged('other')">Sosiaalinen ala</button>
  </div>
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
/*
.filters {
  display: flex;

  button {
    padding: 1rem;
    width: 33.33%;
    color: $black;
    text-transform: uppercase;
    border: none;
    background-color: $gray;
    font-size: 1.5rem;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: $gray;
    }

    &.active {
      color: $white;
      background-color: $orange;
    }
  }
}
*/

.filters {
  display: inline-block;
  padding: 1rem 0;
  text-align: right;

  label {
    padding: 0 0.3rem;
    display: inline-block;
    color: $white;
  }

  button {
    padding: 0.2rem 0.5rem;
    width: auto;
    text-transform: uppercase;
    border: none;
    color: $graydark;
    background-color: $gray;
    font-size: 1rem;
    outline: none;
    cursor: pointer;

    &:hover,
    &.active {
      color: $white;
      background-color: $graydark;
    }
  }
}
</style>
