<template>
  <div>
    <Project :project="project"/>
  </div>
</template>
<script>
import projects from '@/data/project'
import Project from '~/components/Project.vue'

export default {
  async asyncData({ params, error }) {
    return {
      link: params.project
    }
  },
  components: {
    Project
  },
  data: function () {
    return {
      project: false
    }
  },
  created: function () {
    this.project = projects.fi.find(item=>item.link==this.link);
  }
}
</script>
