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
.filters {
  display: inline-block;
  padding: 1rem 0;
  text-align: right;

  @media only screen and (max-width: 950px) {
    width: 100%;
    text-align: left;
    padding-left: 1.7rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 0.5rem 1rem 0.5rem 1rem;
    width: 50%;
  }

  label {
    padding: 0 0.3rem;
    display: inline-block;
    color: $white;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: 950px) {
      padding-left: 0;
    }

    @media only screen and (max-width: 550px) {
      width: 100%;
    }
  }

  button {
    padding: 0.2rem 0.5rem;
    width: auto;
    text-transform: uppercase;
    border: none;
    color: $graydark;
    background-color: $white;
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;

    @media only screen and (max-width: 550px) {
      width: 100%;
    }

    &:hover,
    &.active {
      color: $white;
      background-color: $graydark;
    }
  }
}
</style>
