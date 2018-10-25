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
    <ul>
      <li v-for="language in languages" v-if="language.type==filter||filter=='all'||language.type==''" :key="language.id">
        <span class="stars">{{ language.levelnumber }}</span> {{ language.name }} ({{ language.level }})
      </li>
    </ul>

    <h3>Ohjelmistot</h3>
    <ul>
      <li v-for="software in softwares" v-if="software.type==filter||filter=='all'||software.type==''" :key="software.id">
        {{ software.name }} <span v-show="software.level">({{ software.level }})</span>
      </li>
    </ul>

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
export default {
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  },
  data: function () {
    return {
      languages: [
        {id: 1, name: 'Suomi', level: 'äidinkieli', levelnumber: '*****', type: '' },
        {id: 2, name: 'Englanti', level: 'sujuva', levelnumber: '****', type: '' },
        {id: 3, name: 'Ruotsi', level: 'heikko', levelnumber: '**', type: '' },
        {id: 4, name: 'Suomalainen Viittomakieli', levelnumber: '*', level: 'perusteet', type: ''}
      ],
      softwares: [
        {id: 1, name: 'LianaCMS', level: '', type: 'web' },
        {id: 2, name: 'LianaMailer', level: '', type: 'web' },
        {id: 3, name: 'LianaCommerce', level: '', type: 'web' },
        {id: 4, name: 'Indesign', level: 'perusteet', type: 'web' },
        {id: 5, name: 'Atom', level: '', type: 'web' },
        {id: 6, name: 'Visual Code', level: '', type: 'web' },
        {id: 7, name: 'Gitlab / Github', level: '', type: 'web' },
        {id: 8, name: 'Git', level: '', type: 'web' },
        {id: 9, name: 'WooCommerce', level: 'perusteet', type: 'web' },
        {id: 10, name: 'Open Office', level: '', type: 'other' },
        {id: 11, name: 'Numbers', level: '', type: '' },
        {id: 12, name: 'Excell', level: '', type: '' },
        {id: 13, name: 'Word', level: '', type: '' },
        {id: 14, name: 'PowerPoint', level: '', type: '' },
        {id: 15, name: 'Pages', level: '', type: '' },
        {id: 16, name: 'Photoshop', type: '' }
      ],
      testing: [
        {id: 1, name: 'Litmus', level: '', type: 'web' },
        {id: 2, name: 'BrowserStack', level: '', type: 'web' },
        {id: 3, name: 'ChromeDevTools', level: '', type: 'web' }
      ],
      services: [
        {id: 1, name: 'Facebook API', level: '', type: 'web' },
        {id: 2, name: 'Twitter API', level: '', type: 'web' },
        {id: 3, name: 'LinkedIn API', level: '', type: 'web' }
      ],
      coding: [
        {id: 1, name: 'CSS3', level: '', type: 'web' },
        {id: 2, name: 'HTML5', level: '', type: 'web' },
        {id: 3, name: 'JavaScript', level: '', type: 'web' },
        {id: 4, name: 'SASS', level: '', type: 'web' },
        {id: 5, name: 'LESS', level: '', type: 'web' },
        {id: 6, name: 'Angular', level: 'perusteet', type: 'web' },
        {id: 7, name: 'Vue.js', level: 'perusteet', type: 'web' },
        {id: 8, name: 'PHP/MySQL', level: 'perusteet', type: 'web' }
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
.stars {
  font-size: 2rem;
}

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
</style>
