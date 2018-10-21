<template>
  <section rel="education">
    <h2>Koulutus</h2>

    <table id="v-for-object" class="demo">
      <tr>
        <th>Koulu</th>
        <th>Aika</th>
        <th>Tutkinto</th>
        <th>Kuvaus</th>
      </tr>
      <tr v-for="study in studies" :key="study.id">
        <td>{{ study.name }}</td>
        <td class="nowrap">{{ study.time }}</td>
        <td>{{ study.title }}</td>
        <td>{{ study.duties }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      studies: [
        {id: 1, name: 'Oulun seudun ammattiopisto, OSAO', time: '2016-2017', title: 'Senior Front-End developer, Team leader', duties: 'Lähiesimiestyön ammattitutkinto	Kehittämissuunnitelma: Koodiviidakko Oy, Perehdytyksen kehittäminen ja koulutuskalenterin suunnittelu', type: 'web' },
        {id: 2, name: 'Oulun seudun ammattikorkeakoulu', time: '2010-2011', title: 'Ohjelmistotestaajan erikoistumisopinnot', duties: 'Projektityö: Koodiviidakko Oy, Sivuviidakko-julkaisujärjestelmän käyttöliittymätestaus ja testauksen automatisointi', type: 'web' },
        {id: 3, name: 'Oulun seudun ammattikorkeakoulu', time: '2006-2009', title: 'Tietojenkäsittelyn koulutusohjelma, Tradenomi', duties: 'Työharjoittelut: Oulun 4H-yhdistys ja Koodiviidakko Oy, Opinnäytetyö: Mieluummin-kollektiivin websivuston rakentaminen', type: 'web' },
        {id: 4, name: 'Piippolan käsi- ja taideteollisuusoppilaitos', time: '2003-2006', title: 'Audiovisuaalisen viestinnän perustutkinto, Media-assistentti', duties: 'Suuntautuminen: verkko-ohjelmointi (php) ja multimedia, Työharjoittelut: Piippolan käsi- ja taideteollisuusoppilaitos ja MSS Group Oy, Opinnäytetyö: 4H-yhdistyksen alueellisen lehden kokoaminen ja taitto', type: 'web' },
        {id: 5, name: 'Lapinlahden lukio', time: '1999-2002', title: 'Ylioppilas', duties: 'Kuvataidelinja' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
