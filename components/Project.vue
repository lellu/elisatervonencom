<template>
  <main>
    <div class="container">
      <div class="thumbs">
        <div class="thumb">
          <img :src="project.mainimage" alt="">
        </div>
        <div v-for="(step, key) in project.steps" :key="key" class="thumb">
          <span>{{ key }} <img :src="step.image" alt=""></span>
        </div>
      </div>

      <div class="steps">
        <div class="step">
          <h1>{{ project.name }}</h1>
          <p>{{ project.description }}</p>
          <img :src="project.mainimage" alt="">
        </div>

        <div v-for="(step, key) in project.steps" :key="key" class="step">
          <h2>{{ key }} {{ step.title }}</h2>
          <img :src="step.image" alt="">
          <p>{{ step.description }}</p>
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
.container {
  padding-left: 100px;
  padding-right: 2rem;
}
.thumbs {
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 1rem;
  background-color: #000;
  width: 20%;
  width: 50px;

  .thumb {
    display: inline-block;
    width: 100%;
    position: relative;
    cursor: pointer;
    margin: 1rem 0;
  }
}

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

</style>
