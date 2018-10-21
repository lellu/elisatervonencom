<template>
  <section rel="work">
    <h2>Työkokemus</h2>

    <table>
      <thead>
        <tr>
          <th>Työpaikka</th>
          <th>Aika</th>
          <th>Titteli</th>
          <th>Työtehtävät</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="work in works" v-if="work.type==filter||filter=='all'||work.type==''" :key="work.id">
          <td>{{ work.name }}</td>
          <td class="nowrap">{{ work.time }}</td>
          <td>{{ work.title }}</td>
          <td>{{ work.duties }}</td>
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
      works: [
        {id: 1, name: 'Koodiviidakko Oy', time: '1.10.2017 alkaen', title: 'Senior Front-End developer, Team leader', duties: 'Web-sivujen, uutiskirjeiden ja verkkokauppojen nopeat bugikorjaukset ja muutokset sekä spesifikaatiot. Sisäisen intranetin kehittäminen. Production Support-tiimin esimies', type: 'web' },
        {id: 2, name: 'Koodiviidakko Oy', time: '1.3.2017-30.9.2017', title: 'Senior Front-End developer', duties: 'Web-sivujen, uutiskirjeiden ja verkkokauppojen nopeat bugikorjaukset ja muutokset sekä spesifikaatiot. Production Support-tiimin vetäminen', type: 'web' },
        {id: 3, name: 'Koodiviidakko Oy', time: '1.2.2016-30.2.2017', title: 'Senior Front-End developer', duties: 'Web-sivujen ja verkkokauppojen rakentaminen. CMS-tiimin vetäminen', type: 'web' },
        {id: 4, name: 'Koodiviidakko Oy', time: '1.9.2008-30.1.2016', title: 'Web-designer', duties: 'Sähköisten uutiskirjeiden ja web-sivujen suunnittelu ja rakentaminen sekä verkkokauppojen rakentaminen', type: 'web' },
        {id: 5, name: 'Koodiviidakko Oy', time: '1.6.2008-31.8.2008', title: 'Harjoittelija', duties: 'Sähköisten uutiskirjeiden ja web-sivujen rakentaminen', type: 'web' },
        {id: 6, name: 'Oulun 4H-yhdistys', time: '2.7.2007–31.9.2008', title: 'Keikkatyöntekijä', duties: 'Kotitalouksien siivous Oulun alueella ja lasten taidekerhon ohjaaminen', type: 'other' },
        {id: 7, name: 'SOL palvelut, Stockmann Oulu', time: '4.6–26.8.2007', title: 'Kesätyöntekijä', duties: 'Liha-/kala-alueen siivous', type: 'other' },
        {id: 8, name: 'Oulun keskuspesula', time: '1.6-7.7.2006', title: 'Pesulatyöntekijä', duties: 'Tekstiilien huolto', type: 'other' },
        {id: 9, name: 'Keskipisteen 4H-yhdistys', time: '1.-16.6.2005', title: 'Kesätyöntekijä', duties: 'Kotitalouksien siivous Piippola-Pulkkila alueella', type: 'other' },
        {id: 10, name: 'K-kauppa Piippola', time: '7.7-28.10.2004', title: 'Kesätyöntekijä', duties: 'Lihatiskin ja kylmätilojen siivous', type: 'other' },
        {id: 11, name: 'Anna Kuittinen', time: '1.3-30.4.2002', title: 'Lastenhoito', duties: '2 vuotiaan lapsen hoito', type: 'other' },
        {id: 12, name: 'S-market Nilsiä', time: '19.6-30.6.2000', title: 'Kesätyöntekijä', duties: 'Kuorman purku, hyllyjen järjestely', type: 'other' },
        {id: 13, name: 'Vuokatinrannan Leirikeskus', time: '27.-1.7.2000', title: 'Ryhmänohjaaja', duties: 'Varhaisnuortenleirin ryhmän ohjaus', type: 'other' },
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
