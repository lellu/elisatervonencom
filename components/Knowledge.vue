<template>
  <section class="page-break">
    <span id="knowledge" class="anchor" />
    <h2>{{ $t('links.knowledge') }}</h2>
    <ul class="icon-list">
      <li v-show="filter=='web'||filter=='all'"><i class="fa fa-check"/> {{ $t('knowledge.info1') }}</li>
      <li v-show="filter=='other'||filter=='all'"><i class="fa fa-check"/> {{ $t('knowledge.info2') }}</li>
      <li v-show="filter=='other'||filter=='all'"><i class="fa fa-check"/> {{ $t('knowledge.info3') }}</li>
      <li v-show="filter=='other'||filter=='all'"><i class="fa fa-check"/> {{ $t('knowledge.info4') }}</li>
      <li><i class="fa fa-check"/> {{ $t('knowledge.info5') }}</li>
      <li><i class="fa fa-check"/> {{ $t('knowledge.info6') }}</li>
      <li><i class="fa fa-check"/> {{ $t('knowledge.info7') }}</li>
      <li><i class="fa fa-check"/> {{ $t('knowledge.info8') }}</li>
      <li><i class="fa fa-check"/> {{ $t('knowledge.info9') }}</li>
    </ul>

    <h3 class="tac">{{ $t('knowledge.softwares') }}</h3>
    <ul class="tag-list tac">
      <li v-for="daily in dailysoftwares[$i18n.locale]" v-if="daily.type==filter||filter=='all'||daily.type==''" :key="'daily-' + daily.id">
        {{ daily.name }} <span v-if="daily.level">({{ daily.level }})</span>
      </li>
      <li v-for="software in softwares[$i18n.locale]" v-if="software.type==filter||filter=='all'||software.type==''" :key="'software-' + software.id">
        {{ software.name }} <span v-if="software.level">({{ software.level }})</span>
      </li>
    </ul>

    <h3 v-show="filter=='web'||filter=='all'" class="tac">{{ $t('knowledge.programming') }}</h3>
    <div class="cols round-icons">
      <div v-for="code in coding[$i18n.locale]" v-if="code.type==filter||filter=='all'||code.type==''" :key="'code-' + code.id" class="col square">
        <span class="round-icon">
          <div>
            <i :class="code.icon" />
            <h4>{{ code.name }} <span v-if="code.level" class="level"><br>({{ code.level }})</span></h4>
          </div>
        </span>
      </div>
    </div>

    <h3 v-show="filter=='web'||filter=='all'" class="tac">{{ $t('knowledge.social-media') }}</h3>
    <div class="cols round-icons">
      <div v-for="service in services[$i18n.locale]" v-if="service.type==filter||filter=='all'||service.type==''" :key="'service-' + service.id" class="col square">
        <span class="round-icon">
          <div>
            <i :class="service.icon" />
            <h4>{{ service.name }} <span v-if="service.level" class="level"><br>({{ service.level }})</span></h4>
          </div>
        </span>
      </div>
    </div>

    <h3 class="tac">{{ $t('knowledge.other') }}</h3>
    <ul class="icon-list tac">
      <li v-for="otherweb in othersweb[$i18n.locale]" v-if="otherweb.type==filter||filter=='all'||otherweb.type==''" :key="'other-' + otherweb.id">
        <i class="fa fa-check"/> {{ otherweb.name }} <span v-if="otherweb.level">({{ otherweb.level }})</span>
      </li>
    </ul>

    <div class="cols round-icons">
      <div v-for="other in others[$i18n.locale]" v-if="other.type==filter||filter=='all'||other.type==''" :key="'other-' + other.id" class="col square">
        <span class="round-icon">
          <div>
            <i :class="other.icon" />
            <h4><span v-html="other.name" /> <span v-if="other.level" class="level"><br>({{ other.level }})</span></h4>
          </div>
        </span>
      </div>
    </div>

    <h3 class="tac">{{ $t('knowledge.languages') }}</h3>
    <div class="t-table tac-table">
      <div v-for="language in languages[$i18n.locale]" v-if="language.type==filter||filter=='all'||language.type==''" :key="'language-' + language.id" class="t-row">
        <div class="t-cell">{{ language.name }} <br class="br">({{ language.level }})</div>
        <div class="t-cell"><Stars :number="language.levelnumber" /></div>
      </div>
    </div>
  </section>
</template>

<script>
import Stars from '~/components/Stars.vue';
//import Bar from '~/components/Bar.vue';

export default {
  components: {
    Stars
  },
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  },
  data: function () {
    return {
      languages: {
        fi: [
          {id: 1, name: 'Suomi', level: 'äidinkieli', levelnumber: 5, type: '' },
          {id: 2, name: 'Englanti', level: 'sujuva', levelnumber: 4, type: '' },
          {id: 3, name: 'Ruotsi', level: 'heikko', levelnumber: 2, type: '' },
          {id: 4, name: 'Suomalainen Viittomakieli', level: 'perusteet', levelnumber: 1, type: ''}
        ],
        en: [
          {id: 1, name: 'Finnis', level: 'native language', levelnumber: 5, type: '' },
          {id: 2, name: 'English', level: 'fluent', levelnumber: 4, type: '' },
          {id: 3, name: 'Swedish', level: 'low', levelnumber: 2, type: '' },
          {id: 4, name: 'Finnish Sign Language', level: 'basics', levelnumber: 1, type: ''}
        ]
      },
      dailysoftwares: {
        fi: [
          {id: 1, name: 'LianaCMS', level: '', levelnumber: 100, type: 'web' },
          {id: 2, name: 'LianaMailer', level: '', levelnumber: 80, type: 'web' },
          {id: 3, name: 'LianaCommerce', level: '', levelnumber: 70, type: 'web' },
          {id: 4, name: 'Visual Code', level: '', levelnumber: 80, type: 'web' },
          {id: 5, name: 'Open Office', level: '', levelnumber: 90, type: '' },
          {id: 6, name: 'iWork', level: '', levelnumber: 80, type: '' },
          {id: 7, name: 'Photoshop', level: '', levelnumber: 80, type: '' },
          {id: 8, name: 'Gitlab', level: '', levelnumber: 70, type: 'web', icon: 'fab fa-gitlab' },
          {id: 9, name: 'Git', level: '', levelnumber: 70, type: 'web', icon: 'fab fa-git' }
        ],
        en: [
          {id: 1, name: 'LianaCMS', level: '', levelnumber: 100, type: 'web' },
          {id: 2, name: 'LianaMailer', level: '', levelnumber: 80, type: 'web' },
          {id: 3, name: 'LianaCommerce', level: '', levelnumber: 70, type: 'web' },
          {id: 4, name: 'Visual Code', level: '', levelnumber: 80, type: 'web' },
          {id: 5, name: 'Open Office', level: '', levelnumber: 90, type: '' },
          {id: 6, name: 'iWork', level: '', levelnumber: 80, type: '' },
          {id: 7, name: 'Photoshop', level: '', levelnumber: 80, type: '' },
          {id: 8, name: 'Gitlab', level: '', levelnumber: 70, type: 'web', icon: 'fab fa-gitlab' },
          {id: 9, name: 'Git', level: '', levelnumber: 70, type: 'web', icon: 'fab fa-git' }
        ]
      },
      softwares: {
        fi: [
          {id: 1, name: 'Github', level: '', levelnumber: 70, type: 'web', icon: 'fab fa-github' },
          {id: 2, name: 'Google Analytics', level: '', levelnumber: 40, type: 'web'  },
          {id: 3, name: 'Indesign', level: 'perusteet', levelnumber: 40, type: 'web' },
          {id: 4, name: 'WordPress', level: '', levelnumber: 0, type: 'web' },
          {id: 5, name: 'WooCommerce', level: 'perusteet', levelnumber: 40, type: 'web' }
        ],
        en: [
          {id: 1, name: 'Github', level: '', levelnumber: 70, type: 'web', icon: 'fab fa-github' },
          {id: 2, name: 'Google Analytics', level: '', levelnumber: 40, type: 'web'  },
          {id: 3, name: 'Indesign', level: 'basics', levelnumber: 40, type: 'web' },
          {id: 4, name: 'WordPress', level: '', levelnumber: 0, type: 'web' },
          {id: 5, name: 'WooCommerce', level: 'basics', levelnumber: 40, type: 'web' }
        ]
      },
      services: {
        fi: [
          {id: 1, name: 'Facebook API', level: '', levelnumber: 80, icon: 'fab fa-facebook-f', type: 'web' },
          {id: 2, name: 'Twitter API', level: '', levelnumber: 75, icon: 'fab fa-twitter', type: 'web' },
          {id: 3, name: 'LinkedIn API', level: '', levelnumber: 75, icon: 'fab fa-linkedin-in', type: 'web' }
        ],
        en: [
          {id: 1, name: 'Facebook API', level: '', levelnumber: 80, icon: 'fab fa-facebook-f', type: 'web' },
          {id: 2, name: 'Twitter API', level: '', levelnumber: 75, icon: 'fab fa-twitter', type: 'web' },
          {id: 3, name: 'LinkedIn API', level: '', levelnumber: 75, icon: 'fab fa-linkedin-in', type: 'web' }
        ]
      },
      coding: {
        fi: [
          {id: 1, name: 'CSS3', level: '', levelnumber: 100, type: 'web', icon: 'fab fa-css3' },
          {id: 2, name: 'HTML5', level: '', levelnumber: 100, type: 'web', icon: 'fab fa-html5' },
          {id: 3, name: 'JavaScript', level: '', levelnumber: 90, type: 'web', icon: 'fab fa-js' },
          {id: 4, name: 'SASS', level: '', levelnumber: 100, type: 'web', icon: 'fab fa-sass' },
          {id: 5, name: 'LESS', level: '', levelnumber: 100, type: 'web', icon: 'fab fa-less' },
          {id: 6, name: 'Vue.js', level: '', levelnumber: 40, type: 'web', icon: 'fab fa-vuejs' },
          {id: 7, name: 'ES6', level: '', levelnumber: 90, type: 'web', icon: 'fab fa-js-square' },
          {id: 8, name: 'PHP', level: 'perusteet', levelnumber: 20, type: 'web', icon: 'fab fa-php' },
          {id: 9, name: 'MySQL', level: 'perusteet', levelnumber: 20, type: 'web', icon: 'fa fa-database' },
        ],
        en: [
          {id: 1, name: 'CSS3', level: '', levelnumber: 100, type: 'web', icon: 'fab fa-css3' },
          {id: 2, name: 'HTML5', level: '', levelnumber: 100, type: 'web', icon: 'fab fa-html5' },
          {id: 3, name: 'JavaScript', level: '', levelnumber: 90, type: 'web', icon: 'fab fa-js' },
          {id: 4, name: 'SASS', level: '', levelnumber: 100, type: 'web', icon: 'fab fa-sass' },
          {id: 5, name: 'LESS', level: '', levelnumber: 100, type: 'web', icon: 'fab fa-less' },
          {id: 6, name: 'Vue.js', level: '', levelnumber: 40, type: 'web', icon: 'fab fa-vuejs' },
          {id: 7, name: 'ES6', level: '', levelnumber: 90, type: 'web', icon: 'fab fa-js-square' },
          {id: 8, name: 'PHP', level: 'basics', levelnumber: 20, type: 'web', icon: 'fab fa-php' },
          {id: 9, name: 'MySQL', level: 'basics', levelnumber: 20, type: 'web', icon: 'fa fa-database' },
        ]
      },
      othersweb: {
        fi: [
          {id: 1, name: 'SEO', level: '', type: 'web' },
          {id: 2, name: 'Saavutettavuus (wcag)', level: '', type: 'web' },
          {id: 3, name: 'Statistiikkojen ja prosessien visualisointi', level: '', type: 'web' },
        ],
        en: [
          {id: 1, name: 'SEO', level: '', type: 'web' },
          {id: 2, name: 'Accessibility (wcag)', level: '', type: 'web' },
          {id: 3, name: 'Visualize statistics and processes', level: '', type: 'web' },
        ]
      },
      others: {
        fi: [
          {id: 1, name: 'Validaatio-<br>menetelmä', level: '', type: 'other' },
          {id: 2, name: 'Hygieniapassi', level: '', type: 'other' },
        ],
        en: [
          {id: 1, name: 'Validation-<br>method', level: '', type: 'other' },
          {id: 2, name: 'Hygienepassport', level: '', type: 'other' },
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';
@import 'assets/scss/general.scss';

.icon-list {
  list-style: none;
  padding-left: 0;
  line-height: 1.4;
  margin-bottom: 2rem;

  li {
    padding: 0.2rem 0;
  }

  .fa {
    margin-right: 0.2rem;
  }
}

.tag-list {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  width: 70%;
  margin: 1rem auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  li {
    display: inline-block;
    padding: 0.5rem 0.7rem;
    margin: 0 0.3rem 1rem 0.3rem;
    background-color: $green;
    color: $white;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 4px;
      background: $greendark;
      transition: width .6s;
    }

    &:hover:after {
      width: 100%;
    }
  }

  .fa {
    margin-right: 0.2rem;
  }
}

.t-table {
  display: table;

  @media only screen and (max-width: 920px) {
    margin: 0 auto;
  }

  .t-row {
  display: table-row;

  .t-cell {
    display: table-cell;
    padding: 0.3rem 1rem 0.3rem 0;
  }

  @media only screen and (max-width: 550px) {
    display: block;
    margin-bottom: 1rem;
    text-align: center;

    .t-cell {
      display: block;
      padding: 0.2rem 0rem 0.2rem 0;
    }
  }
}
}

.cols.round-icons {
  text-align: center;
}

.round-icon {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  @include border-radius(100%);
  background-color: $white;
  //border: solid 1px $gray;
  position: relative;
  cursor: default;
  transition: box-shadow 0.2s, background-color 0.5s;
  box-shadow: 0 0 0 2px $gray;

  &:hover {
    background-color: $graylight;
  }

  @media only screen and (max-width: 400px) {
    width: 80%;
    margin: 0 auto;
  }

  &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
  }

  .fab {
    font-size: 4rem;
    line-height: 4rem;

    @media only screen and (max-width: 400px) {
      font-size: 5.5rem;
      line-height: auto;
    }
  }

  h4 {
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 0;
    font-size: 1.2rem;

    .level {
      font-size: 80%;
    }

    @media only screen and (max-width: 900px) {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }

    @media only screen and (max-width: 400px) {
      margin-top: 1rem;
      font-size: 1.3rem;
    }
  }
}

.cols {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  .col2 {
    width: 50%;
    padding: 1rem 0;

    @media only screen and (max-width: 920px) {
      width: 100%;
    }
  }
}

.br {
  display: none;

  @media only screen and (max-width: 768px) {
    display: inline;
  }

  @media only screen and (max-width: 550px) {
    display: none;
  }
}




</style>
