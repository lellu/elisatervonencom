<template>
  <main>
    <Info />
    <div class="bg-gray"><Work :filter="filter"/></div>
    <Education :filter="filter"/>
    <div class="bg-gray"><Courses :filter="filter"/></div>
    <Knowledge :filter="filter"/>
    <div class="bg-gray"><Others :filter="filter"/></div>
    <Hobbies :filter="filter"/>
  </main>
</template>

<script>
import Info from '~/components/Info.vue'
import Filters from '~/components/Filters.vue'
import Work from '~/components/Work.vue'
import Education from '~/components/Education.vue'
import Courses from '~/components/Courses.vue'
import Knowledge from '~/components/Knowledge.vue'
import Others from '~/components/Others.vue'
import Hobbies from '~/components/Hobbies.vue'

export default {
  components: {
    Filters,
    Work,
    Education,
    Courses,
    Knowledge,
    Others,
    Hobbies,
    Info
  },
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  }
}
</script>

<style lang="scss">

</style>
