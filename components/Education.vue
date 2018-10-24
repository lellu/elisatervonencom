<template>
  <section id="education">
    <h2>Koulutus</h2>

    <table id="v-for-object" class="demo">
      <thead>
        <tr>
          <th>Koulu</th>
          <th>Aika</th>
          <th>Tutkinto</th>
          <th>Kuvaus</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="study in studies" v-if="study.type==filter||filter=='all'||study.type==''" :key="study.id">
          <td>{{ study.name }}</td>
          <td class="nowrap">{{ study.time }}</td>
          <td>{{ study.title }}</td>
          <td v-html="study.duties" />
        </tr>
      </tbody>
    </table>
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
      studies: [
        {id: 1, name: 'Oulun seudun ammattiopisto, OSAO', time: '2016-2017', title: 'Senior Front-End developer, Team leader', duties: 'Lähiesimiestyön ammattitutkinto<br>Kehittämissuunnitelma: Koodiviidakko Oy, Perehdytyksen kehittäminen ja koulutuskalenterin suunnittelu', type: '' },
        {id: 2, name: 'Oulun seudun ammattikorkeakoulu', time: '2010-2011', title: 'Ohjelmistotestaajan erikoistumisopinnot', duties: 'Projektityö: Koodiviidakko Oy, Sivuviidakko-julkaisujärjestelmän käyttöliittymätestaus ja testauksen automatisointi', type: 'web' },
        {id: 3, name: 'Oulun seudun ammattikorkeakoulu', time: '2006-2009', title: 'Tietojenkäsittelyn koulutusohjelma, Tradenomi', duties: 'Työharjoittelut: Oulun 4H-yhdistys ja Koodiviidakko Oy,<br>Opinnäytetyö: Mieluummin-kollektiivin websivuston rakentaminen', type: 'web' },
        {id: 4, name: 'Piippolan käsi- ja taideteollisuusoppilaitos', time: '2003-2006', title: 'Audiovisuaalisen viestinnän perustutkinto, Media-assistentti', duties: 'Suuntautuminen: verkko-ohjelmointi (php) ja multimedia,<br>Työharjoittelut: Piippolan käsi- ja taideteollisuusoppilaitos ja MSS Group Oy<br>Opinnäytetyö: 4H-yhdistyksen alueellisen lehden kokoaminen ja taitto', type: 'web' },
        {id: 5, name: 'Lapinlahden lukio', time: '1999-2002', title: 'Ylioppilas', duties: 'Kuvataidelinja', type: '' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
