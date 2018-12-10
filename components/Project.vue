<template>
  <main>
    <div class="steps">
      <div class="slides">
        <div class="step">
          <h1>{{ project.name }}</h1>
          <p>{{ project.description }}</p>
          <img :src="project.mainimage" alt="">
        </div>

        <div v-for="(step, key) in project.steps" :key="key" class="step">
          <img :src="step.image" alt="">
          <p>{{ step.title }}</p>
          <p>{{ step.description }}</p>
        </div>
      </div>

      <div class="row thumbs">
        <div class="thumb">
          <img :src="project.mainimage" alt="">
        </div>
        <div v-for="(step, key) in project.steps" :key="key" class="thumb">
          <img :src="step.image" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import projects from '@/data/project'

export default {
  props: {
    project: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/projects.scss';

.slides {
  position: relative;
  overflow: hidden;

  .step {
    width: 100%;
    display: none;

    &:first-child {
      display: block;
    }
  }
}

.thumbs {
  .thumb {
    display: inline-block;
    width: 100px;
    height: 70px;
    position: relative;
    cursor: pointer;
    margin: 1rem;
  }
}
</style>
