<template>
  <section>
    <h1>{{ $t('projects.projects') }}</h1>

    <div class="row">
      <div v-for="(project, key) in projects[$i18n.locale]" :key="key" class="box">

        <img :src="project.mainimage" alt="">
        <div class="details">
          <h2>{{ project.name }}</h2>
        </div>

        <div class="steps">
          <div class="step">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
          </div>
          <div v-for="(step, index) in projects[$i18n.locale][key].steps" :key="index" class="step">
            <img :src="step.mainimage" alt="">
            <p>{{ step.title }}</p>
            <p>{{ step.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/data/project'

export default {
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  },
  data: function () {
    return {
      projects: projects
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

h1, h2, h3 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
  height: 100%;
  width: 100%;
  background-image: url('/projects/bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

main {
  margin: 0 auto;
  max-width: 1040px;
  text-align: center;
  color: #ffffff;
  padding: 0.5rem;
}

.row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .box {
    width: 300px;
    height: 300px;
    position: relative;
    cursor: pointer;
    margin: 1rem;

    &:after,
    &:before {
      display: none;
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      background-image: url('/projects/pin.png');
      background-position: center center;
      background-repeat: no-repeat;
      z-index: 2;
    }

    &:after {
      position: absolute;
      left: 5px;
      top: 5px;
    }

    &:before {
      position: absolute;
      right: 5px;
      top: 5px;
    }

    img {
      width: 100%;
      height: auto;
      position: relative;
      z-index: 0;
    }

    .details {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 1rem;
      text-align: center;
      z-index: 1;
      top: 0;
      left: 0;
      background-image: url('/projects/metal1.jpeg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      text-transform: uppercase;

      &:after,
      &:before {
        display: none;
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        background-image: url('/projects/pin.png');
        background-position: center center;
        background-repeat: no-repeat;
        z-index: 2;
      }

      &:after {
        position: absolute;
        left: 5px;
        bottom: 5px;
      }

      &:before {
        position: absolute;
        right: 5px;
        bottom: 5px;
      }

      h2 {
        display: table-cell;
        vertical-align: middle;
        background-color: rgba(255,255,255,0.4);
        color: #000;
      }
    }

    &:hover {
      box-shadow: 0 0 20px rgba(0,0,0,0.9);
      &:after,
      &:before {
        display: block;
      }

      .details {
        display: table;

        &:after,
        &:before {
          display: block;
        }
      }
    }

    .steps {
      display: none;
    }
  }
}
</style>
