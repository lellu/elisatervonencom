<template>
  <main>
    <Info />
    <Filters/>
    <div class="bg-gray"><Work/></div>
    <Education/>
    <div class="bg-gray"><Courses/></div>
    <Knowledge/>
    <div class="bg-gray"><Others/></div>
    <Hobbies/>
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
  }
}
</script>

<style lang="scss">

</style>
