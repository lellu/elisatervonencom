<template>
  <main>
    <div class="container">
      <div class="thumbs">
        <div class="thumb">
          <span>1</span>
          <img :src="project.mainimage" alt="">
        </div>
        <div v-for="(step, key) in project.steps" :key="key" class="thumb">
          <span>{{ key + 2 }}</span>
          <img :src="step.image" alt="">
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
  top: 30%;
  padding: 0.3rem 0.6rem;
  background-color: #fff;
  width: 50px;
  color: #000;

  .thumb {
    display: inline-block;
    width: 100%;
    position: relative;
    cursor: pointer;
    margin: 0.3rem 0;

    span {
      position: absolute;
      background-color: rgba(0,0,0,0.3);
      width: 100%;
      line-height: 50px;
      text-align: center;
      color: #fff;
      left: 0;
      top: 0;
      font-weight: bold;
    }
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
