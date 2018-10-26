<template>
  <section id="knowledge">
    <h2>Osaaminen</h2>
    <p>
      <span v-show="filter=='web'||filter=='all'">Responsiivisten web-sivustojen, verkkokauppojen sekä graafisten uutiskirjeiden suunnittelu, rakentaminen ja testaus<br></span>
      <span v-show="filter=='other'||filter=='all'">Vanhusten avustaminen (liikunta- ja asiointiavustustus)<br></span>
      <span v-show="filter=='other'||filter=='all'">Muistisairaan kanssa toimiminen<br></span>
      <span v-show="filter=='other'||filter=='all'">Kotitaloustyöt (Siivous, ikkunoidenpesu, ruuanlaitto, haravointi, ruohon- ja pensaidenleikkaus)<br></span>
      Valokuvaus ja kuvankäsittely<br>
      Projektin hallinta<br>
      Tiimin vetäminen<br>
      Pienien koulutuksien järjestäminen (materiaalit, koulutustapahtuma, yhteenveto)<br>
      Ohjeiden ja raporttien laatiminen, dokumentointi
    </p>

    <h3>Kielitaito</h3>
    <div v-for="language in languages" v-if="language.type==filter||filter=='all'||language.type==''" :key="language.id" class="t-row">
      <div class="t-cell">{{ language.name }} ({{ language.level }})</div>
      <div class="t-cell"><Stars :number="language.levelnumber" /></div>
    </div>

    <h3>Ohjelmistot</h3>
    <div v-for="software in softwares" v-if="software.type==filter||filter=='all'||software.type==''" :key="software.id">
      {{ software.name }} <span v-show="software.level">({{ software.level }})</span>
      <Bar :number="software.levelnumber" />
    </div>

    <h3 v-show="filter=='web'||filter=='all'">Sosiaalisen median palvelut</h3>
    <ul>
      <li v-for="service in services" v-if="service.type==filter||filter=='all'||service.type==''" :key="service.id">
        {{ service.name }} <span v-show="service.level">({{ service.level }})</span>
      </li>
    </ul>

    <h3 v-show="filter=='web'||filter=='all'" class="web">Web-testaus</h3>
    <ul>
      <li v-for="test in testing" v-if="test.type==filter||filter=='all'||test.type==''" :key="test.id">
        {{ test.name }} <span v-show="test.level">({{ test.level }})</span>
      </li>
    </ul>

    <h3 v-show="filter=='web'||filter=='all'" class="web">Ohjelmointi</h3>
    <ul>
      <li v-for="code in coding" v-if="code.type==filter||filter=='all'||code.type==''" :key="code.id">
        {{ code.name }} <span v-show="code.level">({{ code.level }})</span>
      </li>
    </ul>

    <h3>Muut</h3>
    <ul class="icon-list">
      <li v-for="other in others" v-if="other.type==filter||filter=='all'||other.type==''" :key="other.id">
        <i class="fa fa-check"/> {{ other.name }} <span v-show="other.level">({{ other.level }})</span>
      </li>
    </ul>
  </section>
</template>

<script>
import Stars from '~/components/Stars.vue';
import Bar from '~/components/Bar.vue';

export default {
  components: {
    Stars,
    Bar
  },
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  },
  data: function () {
    return {
      languages: [
        {id: 1, name: 'Suomi', level: 'äidinkieli', levelnumber: 5, type: '' },
        {id: 2, name: 'Englanti', level: 'sujuva', levelnumber: 4, type: '' },
        {id: 3, name: 'Ruotsi', level: 'heikko', levelnumber: 2, type: '' },
        {id: 4, name: 'Suomalainen Viittomakieli', level: 'perusteet', levelnumber: 1, type: ''}
      ],
      softwares: [
        {id: 1, name: 'LianaCMS', level: '', levelnumber: 100, type: 'web' },
        {id: 2, name: 'LianaMailer', level: '', levelnumber: 80, type: 'web' },
        {id: 3, name: 'LianaCommerce', level: '', levelnumber: 70, type: 'web' },
        {id: 4, name: 'Indesign', level: 'perusteet', levelnumber: 40, type: 'web' },
        {id: 5, name: 'Atom', level: '', levelnumber: 80, type: 'web' },
        {id: 6, name: 'Visual Code', level: '', levelnumber: 80, type: 'web' },
        {id: 7, name: 'Gitlab / Github', level: '', levelnumber: 70, type: 'web' },
        {id: 8, name: 'Git', level: '', levelnumber: 70, type: 'web' },
        {id: 9, name: 'WooCommerce', level: 'perusteet', levelnumber: 40, type: 'web' },
        {id: 10, name: 'Open Office', level: '', levelnumber: 90, type: 'other' },
        {id: 11, name: 'Numbers', level: '', levelnumber: 80, type: '' },
        {id: 12, name: 'Excell', level: '', levelnumber: 80, type: '' },
        {id: 13, name: 'Word', level: '', levelnumber: 90, type: '' },
        {id: 14, name: 'PowerPoint', level: '', levelnumber: 70, type: '' },
        {id: 15, name: 'Pages', level: '', levelnumber: 80, type: '' },
        {id: 16, name: 'Photoshop', level: '', levelnumber: 80, type: '' }
      ],
      testing: [
        {id: 1, name: 'Litmus', level: '', levelnumber: 100, type: 'web' },
        {id: 2, name: 'BrowserStack', level: '', levelnumber: 90, type: 'web' },
        {id: 3, name: 'ChromeDevTools', level: '', levelnumber: 90, type: 'web' }
      ],
      services: [
        {id: 1, name: 'Facebook API', level: '', levelnumber: 80, type: 'web' },
        {id: 2, name: 'Twitter API', level: '', levelnumber: 75, type: 'web' },
        {id: 3, name: 'LinkedIn API', level: '', levelnumber: 75, type: 'web' }
      ],
      coding: [
        {id: 1, name: 'CSS3', level: '', levelnumber: 100, type: 'web' },
        {id: 2, name: 'HTML5', level: '', levelnumber: 100, type: 'web' },
        {id: 3, name: 'JavaScript', level: '', levelnumber: 90, type: 'web' },
        {id: 4, name: 'ES6', level: '', levelnumber: 90, type: 'web' },
        {id: 5, name: 'SASS', level: '', levelnumber: 100, type: 'web' },
        {id: 6, name: 'LESS', level: '', levelnumber: 100, type: 'web' },
        {id: 7, name: 'Angular', level: 'perusteet', levelnumber: 20, type: 'web' },
        {id: 8, name: 'Vue.js', level: 'perusteet', levelnumber: 40, type: 'web' },
        {id: 9, name: 'PHP/MySQL', level: 'perusteet', levelnumber: 20, type: 'web' }
      ],
      others: [
        {id: 1, name: 'SEO', level: '', type: 'web' },
        {id: 2, name: 'Saavutettavuus (wcag)', level: '', type: 'web' },
        {id: 3, name: 'Statistiikkojen ja prosessien visualisointi', level: '', type: 'web' },
        {id: 4, name: 'Validaatio-menetelmä', level: '', type: 'other' },
        {id: 5, name: 'Hygieniapassi', level: '', type: 'other' },
      ],
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';

.icon-list {
  list-style: none;
  padding-left: 0;

  li {
    padding: 0.2rem 0;
  }

  .fa {
    margin-right: 0.2rem;
  }
}

.t-row {
  display: table-row;

  .t-cell {
    display: table-cell;
    padding: 0.5rem 1rem 0.5rem 0;
  }

  @media only screen and (max-width: 550px) {
    display: block;

    .t-cell {
      display: block;
      padding: 0.2rem 0rem 0.2rem 0;
    }
  }
}

</style>
