<template>
  <div>
    {{ project }}
  </div>
</template>
<script>
import projects from '@/data/project'

export default {
  async asyncData({ params, error }) {
    return {
      project: params.project
    }
  }
}
</script>
