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
export default {
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  },
  data: function () {
    return {
      projects: {
        fi: [
          {id: 9, name: 'Nojatuoli', year: '2018', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] },
          {id: 8, name: 'Ford Granada', year: '2018', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] },
          {id: 7, name: 'DT moottoripyörä', year: '2014-2016', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] },
          {id: 6, name: 'Lyhdyt', year: '2015', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] },
          {id: 5, name: 'Kattolamppu', year: '2015', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] },
          {id: 4, name: 'Yövalo', year: '2015', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] },
          {id: 3, name: 'Kiikku', year: '2015', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] },
          {id: 2, name: 'Klaffipöytä', year: '2014', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] },
          {id: 1, name: 'Komuutti', year: '2014', description: 'Projektin kuvaus', mainimage: '/projects/nightlight/box.jpg', steps: [ {title: 'Step 1 otsikko', description: 'Step 1 kuvaus', image: '/work.kv.png' }, {title: 'Step 2 otsikko', description: 'Step 2 kuvaus', image: '/work.kv.png'}] }
        ],
        en: []
      }
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
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
  max-width: 1000px;
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
    margin: 1rem 0;

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
      background-image: url('/projects/cover.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;

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
    }

    &:hover {
      box-shadow: 0 0 20px rgba(0,0,0,0.9);
      &:after,
      &:before {
        display: block;
      }

      .details {
        display: block;

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
