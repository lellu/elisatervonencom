<template>
  <section rel="knowledge">
    <h2>Osaaminen</h2>
    <p class="web">Responsiivisten web-sivustojen, verkkokauppojen sekä graafisten uutiskirjeiden suunnittelu, rakentaminen ja testaus<br>
      Valokuvaus ja kuvankäsittely (Photoshop)<br>
      Projektin hallinta<br>
      Tiimin vetäminen<br>
      Pienien koulutuksien järjestäminen (materiaalit, koulutustapahtuma, yhteenveto),
      Ohjeiden ja raporttien laatiminen, dokumentointi.</p>

    <p class="other">Vanhusten avustaminen (liikunta- ja asiointiavustustus)<br>
      Muistisairaan kanssa toimiminen<br>
      Kotitaloustyöt (Siivous, ikkunanapesu, ruuanlaitto, haravointi, ruohon- ja pensaidenleikkaus)<br>
      Valokuvaus ja kuvankäsittely<br>
      Pienien koulutuksien järjestäminen (materiaalien laatiminen, koulutustapahtuma, yhteenveto)<br>
      Ohjeiden ja raporttien laatiminen, dokumentointi.</p>

    <h3>Kielitaito</h3>
    <ul>
      <li v-for="language in languages" :key="language.id">
        <span class="stars">{{ language.levelnumber }}</span> {{ language.name }} ({{ language.level }})
      </li>
    </ul>

    <h3 class="web">Ohjelmistot</h3>
    <ul>
      <li v-for="software in softwares" :key="software.id">
        {{ software.name }} <span v-show="software.level">({{ software.level }})</span>
      </li>
    </ul>

    <h3 class="web">Palvelut</h3>

    <ul>
      <li v-for="service in services" :key="service.id">
        {{ service.name }} <span v-show="service.level">({{ service.level }})</span>
      </li>
    </ul>

    <h3 class="web">Ohjelmointikielet</h3>

    <ul>
      <li v-for="codelanguage in codelanguages" :key="codelanguage.id">
        {{ codelanguage.name }} <span v-show="codelanguage.level">({{ codelanguage.level }})</span>
      </li>
    </ul>

    <h3 class="web">Muut</h3>

    <ul>
      <li v-for="other in others" :key="other.id">
        {{ other.name }} <span v-show="other.level">({{ other.level }})</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
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
        {id: 4, name: 'Photoshop', type: '' },
        {id: 5, name: 'Indesign', level: 'perusteet', type: 'web' },
        {id: 6, name: 'Atom', level: '', type: 'web' },
        {id: 7, name: 'Excell', level: '', type: '' },
        {id: 8, name: 'Word', level: '', type: '' },
        {id: 9, name: 'PowerPoint', level: '', type: '' },
        {id: 10, name: 'Visual Code', level: '', type: 'web' },
        {id: 12, name: 'Open Office', level: '', type: '' },
        {id: 11, name: 'Numbers', level: '', type: 'web' }
      ],
      services: [
        {id: 1, name: 'Litmus', level: '', type: 'web' },
        {id: 2, name: 'Facebook API', level: '', type: 'web' },
        {id: 3, name: 'WordPress', level: 'perusteet', type: 'web' },
        {id: 4, name: 'WooCommerce', level: 'perusteet', type: 'web' },
        {id: 5, name: 'Gitlab / Github', level: '', type: 'web' },
        {id: 6, name: 'Git', level: '', type: 'web' }
      ],
      codelanguages: [
        {id: 1, name: 'CSS3', level: '', type: 'web' },
        {id: 1, name: 'HTML5', level: '', type: 'web' },
        {id: 1, name: 'JavaScript', level: '', type: 'web' },
        {id: 1, name: 'SASS', level: '', type: 'web' },
        {id: 1, name: 'LESS', level: '', type: 'web' },
        {id: 1, name: 'Angular', level: 'perusteet', type: 'web' },
        {id: 1, name: 'Vue.js', level: 'perusteet', type: 'web' },
        {id: 1, name: 'PHP/MySQL', level: 'perusteet', type: 'web' }
      ],
      others: [
        {id: 1, name: 'SEO', level: '', type: 'web' },
        {id: 2, name: 'Saavutettavuus (wcag)', level: '', type: 'web' },
        {id: 3, name: 'Statistiikkojen visualisointi', level: '', type: 'web' },
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
</style>
