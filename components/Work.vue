<template>
  <section class="page-break">
    <span id="work" class="anchor" />
    <h2>{{ $t('work.workexperience') }}</h2>

    <table class="work-table">
      <thead>
        <tr>
          <th />
          <th>{{ $t('work.company') }}</th>
          <th>{{ $t('work.time') }}</th>
          <th>{{ $t('work.title') }}</th>
          <th>{{ $t('work.worktasks') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="work in works[$i18n.locale]" v-if="work.type==filter||filter=='all'||work.type==''" :key="'work-' + work.id">
          <td class="first"><span v-if="work.image"><img :src="work.image" width="30" alt=""></span></td>
          <td class="nowrap normalwrap-920">{{ work.name }}</td>
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
      works: {
        fi: [
          {id: 1, name: 'Koodiviidakko Oy', time: '1.12.2019 alkaen', title: 'Senior Software Engineer', duties: 'Tuotekehitys', image: '/work/kv.png', type: 'web' },
          {id: 1, name: 'Koodiviidakko Oy', time: '1.10.2017-30.11.2019', title: 'Senior Front-End developer, Team leader', duties: 'Web-sivujen, uutiskirjeiden ja verkkokauppojen kehitykset sekä spesifikaatiot. Sisäisen intranetin kehittäminen. Tiimin esimies', image: '/work/kv.png', type: 'web' },
          {id: 2, name: 'Koodiviidakko Oy', time: '1.3.2017-30.9.2017', title: 'Senior Front-End developer', duties: 'Web-sivujen, uutiskirjeiden ja verkkokauppojen kehitykset sekä spesifikaatiot. Tiimin vetäminen', image: '/work/kv.png', type: 'web' },
          {id: 3, name: 'Koodiviidakko Oy', time: '1.2.2016-30.2.2017', title: 'Senior Front-End developer', duties: 'Web-sivujen ja verkkokauppojen rakentaminen. Tiimin vetäminen', image: '/work/kv.png', type: 'web' },
          {id: 4, name: 'Koodiviidakko Oy', time: '1.9.2008-30.1.2016', title: 'Web-designer', duties: 'Sähköisten uutiskirjeiden ja web-sivujen suunnittelu ja rakentaminen sekä verkkokauppojen rakentaminen', image: '/work/kv.png', type: 'web' },
          {id: 5, name: 'Koodiviidakko Oy', time: '1.6.2008-31.8.2008', title: 'Harjoittelija', duties: 'Sähköisten uutiskirjeiden ja web-sivujen rakentaminen', image: '/work/kv.png', type: 'web' },
          {id: 6, name: 'Oulun 4H-yhdistys', time: '2.7.2007–31.9.2008', title: 'Keikkatyöntekijä', duties: 'Kotitalouksien siivous Oulun alueella ja lasten taidekerhon ohjaaminen', image: '/work/4h.png', type: '' },
          {id: 7, name: 'SOL palvelut, Stockmann Oulu', time: '4.6–26.8.2007', title: 'Kesätyöntekijä', duties: 'Liha-/kala-alueen siivous', image: '/work/sol.png', type: '' },
          {id: 8, name: 'Oulun keskuspesula', time: '1.6-7.7.2006', title: 'Pesulatyöntekijä', duties: 'Tekstiilien huolto', image: '/work/pesula.png', type: '' },
          {id: 9, name: 'Keskipisteen 4H-yhdistys', time: '1.-16.6.2005', title: 'Kesätyöntekijä', duties: 'Kotitalouksien siivous Piippola-Pulkkila alueella', image: '/work/4h.png', type: '' },
          {id: 10, name: 'K-kauppa Piippola', time: '7.7-28.10.2004', title: 'Kesätyöntekijä', duties: 'Lihatiskin ja kylmätilojen siivous', image: '/work/k-kauppa.jpg', type: '' },
          {id: 11, name: 'Yksityinen henkilö', time: '1.3-30.4.2002', title: 'Lastenhoito', duties: '2 vuotiaan lapsen hoito', image: '', type: 'other' }
          //{id: 12, name: 'S-market Nilsiä', time: '19.6-30.6.2000', title: 'Kesätyöntekijä', duties: 'Kuorman purku, hyllyjen järjestely', image: '/work/s-market.png', type: '' },
          //{id: 13, name: 'Vuokatinrannan Leirikeskus', time: '27.-1.7.2000', title: 'Ryhmänohjaaja', duties: 'Varhaisnuortenleirin ryhmän ohjaus', image: '/work/vuokatinranta.png', type: 'other' },
        ],
        en: [
          {id: 1, name: 'Liana Technologies', time: 'from 1.12.2019', title: 'Senior Software Engineer', duties: 'Software development', image: '/work/kv.png', type: 'web' },
          {id: 1, name: 'Liana Technologies', time: '1.10.2017-30.11.2019', title: 'Senior Front-End developer, Team leader', duties: 'Building websites as well as specifications and work estimations. Internal intranet development. Team superior', image: '/work/kv.png', type: 'web' },
          {id: 2, name: 'Liana Technologies', time: '1.3.2017-30.9.2017', title: 'Senior Front-End developer', duties: 'Building newsletters, websites and webshops as well as specifications and work estimations. Team leading.', image: '/work/kv.png', type: 'web' },
          {id: 3, name: 'Liana Technologies', time: '1.2.2016-30.2.2017', title: 'Senior Front-End developer', duties: 'Building websites and webshops. Team leading.', image: '/work/kv.png', type: 'web' },
          {id: 4, name: 'Liana Technologies', time: '1.9.2008-30.1.2016', title: 'Web-designer', duties: 'Building and designing newsletters, websites and webshops.', image: '/work/kv.png', type: 'web' },
          {id: 5, name: 'Liana Technologies', time: '1.6.2008-31.8.2008', title: 'Trainee', duties: 'Building newsletters and websites', image: '/work/kv.png', type: 'web' },
          {id: 6, name: 'Oulun 4H-yhdistys', time: '2.7.2007–31.9.2008', title: 'Temporary employee', duties: 'Domestic cleaning in Oulu area and leading weekly art club for kids', image: '/work/4h.png', type: '' },
          {id: 7, name: 'SOL services, Stockmann Oulu', time: '4.6–26.8.2007', title: 'Summer employee', duties: 'Cleaning meat/fish handling area', image: '/work/sol.png', type: '' },
          {id: 8, name: 'Oulun keskuspesula', time: '1.6-7.7.2006', title: 'Loundry employee', duties: 'Textile service', image: '/work/pesula.png', type: '' },
          {id: 9, name: 'Keskipisteen 4H-yhdistys', time: '1.-16.6.2005', title: 'Summer employee', duties: 'Domestic cleaning in Piippola-Pulkkila area', image: '/work/4h.png', type: '' },
          {id: 10, name: 'K-kauppa Piippola', time: '7.7-28.10.2004', title: 'Summer employee', duties: 'Cleaning meat counter and gold room', image: '/work/k-kauppa.jpg', type: '' },
          {id: 11, name: 'Private person', time: '1.3-30.4.2002', title: 'Nurse', duties: 'Taking care of a 2-year-old', image: '', type: 'other' }
          //{id: 12, name: 'S-market Nilsiä', time: '19.6-30.6.2000', title: 'Summer employee', duties: 'Filling & organizing the shelfs', image: '/work/s-market.png', type: '' },
          //{id: 13, name: 'Vuokatinrannan Leirikeskus', time: '27.-1.7.2000', title: 'Group leader', duties: 'Working as a group leader at a confirmation camp', image: '/work/vuokatinranta.png', type: 'other' },
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.work-table td.first {
  width: 30px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
}
.work-table td:last-child {
  width: 40%;
  @media only screen and (max-width: 768px) {
    width: auto;
  }
}
</style>
