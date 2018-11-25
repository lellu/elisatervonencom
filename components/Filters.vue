<template>
  <div class="filters">
    <span class="label">{{ $t('filters.filter') }}: </span>
    <button :aria-label="$t('filters.filterall')" :title="$t('filters.filterall')" :class="{ active: filter == 'all' }" @click="setFilter('all')">{{ $t('filters.all') }}</button>
    <button :aria-label="$t('filters.filterweb')" :title="$t('filters.filterweb')" :class="{ active: filter == 'web' }" @click="setFilter('web')">{{ $t('filters.web') }}</button>
    <button :aria-label="$t('filters.filtersocial')" :title="$t('filters.filtersocial')" :class="{ active: filter == 'other' }" @click="setFilter('other')">{{ $t('filters.social') }}</button>
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
    setFilter: function (type) {
      this.$store.commit('setFilter',type);
      this.filter = type;
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';
.filters {
  display: inline-block;
  padding: 0.9rem 0;
  text-align: right;

  @media only screen and (max-width: 768px) {
    padding: 0.7rem 0;
    width: 100%;
    text-align: left;
    padding-left: 1.7rem;
  }

  @media only screen and (max-width: 550px) {
    display: none;
    padding: 0.5rem 1rem;
  }

  .label {
    padding: 0 0.3rem 0;
    display: inline-block;
    color: $white;

    @media only screen and (max-width: 550px) {
      padding: 0;
    }
  }

  button {
    display: inline-block;
    padding: 0.4rem 0.5rem;
    width: auto;
    //text-transform: uppercase;
    border: none;
    color: $graydark;
    background-color: $white;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    transition: all .3s;

    &:hover,
    &.active {
      color: $white;
      background-color: $graydark;
    }
  }
}
</style>
