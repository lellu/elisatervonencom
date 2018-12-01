<template>
  <section>
    <span id="others" class="anchor" />
    <h2>{{ $t('links.other') }}</h2>

    <h3>{{ $t('otheractivity.repsentative') }}</h3>
    <table>
      <thead>
        <tr>
          <th>{{ $t('otheractivity.name') }}</th>
          <th>{{ $t('work.time') }}</th>
          <th>{{ $t('otheractivity.place') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="confidence in confidences[$i18n.locale]" v-if="confidence.type==filter||filter=='all'||confidence.type==''" :key="confidence.id">
          <td>{{ confidence.name }}</td>
          <td class="nowrap">{{ confidence.time }}</td>
          <td>{{ confidence.place }}</td>
        </tr>
      </tbody>
    </table>

    <h3>{{ $t('otheractivity.voluntary') }}</h3>
    <table>
      <thead>
        <tr>
          <th>{{ $t('otheractivity.place') }}</th>
          <th>{{ $t('work.time') }}</th>
          <th>{{ $t('otheractivity.activity') }}</th>
          <th>{{ $t('otheractivity.description') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in activities[$i18n.locale]" v-if="activity.type==filter||filter=='all'||activity.type==''" :key="activity.id">
          <td>{{ activity.name }}</td>
          <td class="nowrap">{{ activity.time }}</td>
          <td>{{ activity.title }}</td>
          <td>{{ activity.duties }}</td>
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
      activities: {
        fi: [
          {id: 1, name: 'Oulun muistiyhdistys', time: '2016 alkaen', title: 'MuistiKaVeRi', duties: 'Muistisairaan avustaminen ja ulkoilutus', type: 'other'},
          {id: 2, name: 'Suomen Punainen Risti', time: '2014 alkaen', title: 'Ystäväpalvelu', duties: 'Vanhuksen avustaminen ja ulkoilutus', type: 'other'},
          {id: 3, name: 'Kempeleen seurakunta', time: '2015-2017', title: 'Verkkotoimittaja', duties: 'Valokuvaaminen tapahtumissa sekä haastattelujen tekeminen ja kirjoittaminen', type: 'web'},
          {id: 4, name: 'Kempeleen seurakunta', time: '2014 alkaen', title: 'Keittiöapulainen', duties: 'Keittiössä avustaminen erilaisissa tapahtumissa', type: 'other'},
          {id: 5, name: 'Oulun Diakonissalaitos', time: '2014-2015', title: 'Ystäväpalvelu', duties: 'Vanhusten luona vierailu ja kävelytys', type: 'other'}
        ],
        en: [
          {id: 1, name: 'The Alzheimer Society of Oulu', time: 'from 2016', title: 'MuistiKaVeRi', duties: 'Helping and walking the memory sick', type: 'other'},
          {id: 2, name: 'Finnish Red Cross', time: 'from 2014', title: 'Friend visitor service', duties: 'Helping and walking elderly', type: 'other'},
          {id: 3, name: 'Kempele parish', time: '2015-2017', title: 'Web reporter', duties: 'Event photography and making and writing interviews', type: 'web'},
          {id: 4, name: 'Kempele parish', time: 'from 2014', title: 'Kitchen assistant', duties: 'Helping in the kitchen in various events', type: 'other'},
          {id: 5, name: 'Oulu Deaconess Institute', time: '2014-2015', title: 'Friend visitor service', duties: 'Helping and walking elderly', type: 'other'}
        ]
      },
      confidences: {
        fi: [
          {id: 1, name: 'Varaluottamusvaltuutettu', time: '2014-2017', place: 'Koodiviidakko Oy', type: ''}
        ],
        en: [
          {id: 1, name: 'Employee Representative', time: '2014-2017', place: 'Liana Technologies', type: ''}
        ]
      }
    }
  }
}
</script>

<style lang="scss">

</style>
