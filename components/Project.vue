<template>
  <main>
    <div class="container">
      <div class="thumbs">
        <div class="thumb">
          <a href="/projektit">
            <span><i class="fa fa-chevron-left" /></span>
          </a>
        </div>

        <div class="thumb">
          <a :style="{ backgroundImage: 'url('+project.mainimage+')'}" href="#section1">
            <span/>
          </a>
        </div>

        <div v-for="(step, key) in project.steps" :key="key" class="thumb">
          <a :href="'#step'+key" :style="{ backgroundImage: 'url('+step.image+')'}" >
            <span>{{ key + 1 }}</span>
          </a>
        </div>
      </div>

      <div class="steps">
        <div id="section1" class="step0">
          <div class="detail">
            <h1>{{ project.name }}</h1>
            <p>{{ project.description }}</p>
          </div>
          <div class="img">
            <span><img :src="project.mainimage" alt=""></span>
          </div>
        </div>
        <div class="next"><i class="fa fa-arrow-down"/></div>
        <div v-for="(step, key) in project.steps" :key="key" class="step">
          <div :id="'step'+key" class="desc">
            <span />
            <h3><span class="number">{{ key + 1 }}</span> {{ step.title }}</h3>
            <img :src="step.image" alt="">
            <p>{{ step.description }}</p>
          </div>
          <div class="next"><i class="fa fa-arrow-down"/></div>
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
  top: 2rem;
  padding: 0.25rem 0.5rem;
  background-color: #fff;
  width: 40px;
  color: #000;

  .thumb {
    display: inline-block;
    width: 100%;
    position: relative;
    cursor: pointer;
    margin: 0.25rem 0;

    a {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-position: center center;
      background-size: cover;

      &:first-child {
        background-color: #000;
      }

      &:hover span,
      &.current {
        background-color: transparent;
      }
    }

    span {
      position: absolute;
      background-color: rgba(0,0,0,0.3);
      width: 100%;
      line-height: 40px;
      text-align: center;
      color: #fff;
      left: 0;
      top: 0;
      font-weight: bold;
    }
  }
}

.step0 {
  background-color: #fff;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  display: flex;

  .detail {
    width: 40%;
    padding-right: 2rem;
    position: relative;
  }

  .img {
    width: 60%;
    line-height: 0;
    position: relative;

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
      right: 5px;
      top: 5px;
    }

    &:before {
      position: absolute;
      left: 5px;
      top: 5px;
    }

    span {
      display: block;
      position: relative;
      width: 100%;

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
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;

    .detail,
    .img {
      width: 100%;
    }
  }
}

.number {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  background-color: #000;
  color: #fff;
}

.step {
  width: 100%;

  .desc {
    background-color: #fff;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
  }
}

.next {
  text-align: center;
  color: #fff;
  font-size: 4rem;
  padding: 2rem 0;
}

</style>
