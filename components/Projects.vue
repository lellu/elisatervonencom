<template>
  <section>
    <h1>{{ $t('projects.projects') }}</h1>

    <div class="row">
      <div v-for="(project, key) in projects[$i18n.locale]" :key="key" class="box">
        <nuxt-link :to="$route.fullPath.replace(/^\/[^\/]+/, '') + '/'+$route.fullPath +'/'+project.link+'/'" active-class="none" exact>
          <img :src="project.mainimage" alt="">
          <div class="details">
            <h2>{{ project.name }}</h2>
          </div>
        </nuxt-link>
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
@import 'assets/scss/projects.scss';

.box {
  width: 300px;
  padding: 1rem 1rem 4rem 1rem;
  background-color: #fcfaf2;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  margin: 1rem;

  &:after,
  &:before {
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
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;

    &:after,
    &:before {
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
      color: #000;
      margin: 0;
    }
  }

  &:hover {
    box-shadow: inset 0 0 20px rgba(0,0,0,0.7);
  }

  .steps {
    display: none;
  }
}
</style>
