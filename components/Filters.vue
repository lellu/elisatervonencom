<template>
  <section class="tabs">
    <button @click="$emit('filter-changed', 'all')">Kaikki</button>
    <button @click="$emit('filter-changed', 'web')">Web-kehitys</button>
    <button @click="$emit('filter-changed', 'other')">Sosiaalinen ala</button>
    <!--<li><a href="" class="js-toggle-type" data-type="work">Web-kehitys</a></li>
    <li><a href="" class="js-toggle-type" data-type="other">Sosiaalinen ala</a></li>-->
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
