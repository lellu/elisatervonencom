<template>
  <section rel="others">
    <h2>Muu toiminta</h2>

    <h3>Luottamustoiminta</h3>
    <table>
      <thead>
        <tr>
          <th>Nimike</th>
          <th>Aika</th>
          <th>Paikka</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="confidence in confidences" v-if="confidence.type==filter||filter=='all'||confidence.type==''" :key="confidence.id">
          <td>{{ confidence.name }}</td>
          <td class="nowrap">{{ confidence.time }}</td>
          <td>{{ confidence.place }}</td>
        </tr>
      </tbody>
    </table>

    <h3>Vapaaehtoistyö</h3>
    <table>
      <thead>
        <tr>
          <th>Järjestö</th>
          <th>Aika</th>
          <th>Toiminta</th>
          <th>Työnkuva</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in activities" v-if="activity.type==filter||filter=='all'||activity.type==''" :key="activity.id">
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
      activities: [
        {id: 1, name: 'Oulun muistiyhdistys', time: '2016 alkaen', title: 'MuistiKaVeRi', duties: 'Muistisairaan avustaminen ja ulkoilutus'},
        {id: 2, name: 'Suomen Punainen Risti', time: '2014 alkaen', title: 'Ystäväpalvelu', duties: 'Vanhuksen avustaminen ja ulkoilutus'},
        {id: 3, name: 'Kempeleen seurakunta', time: '2015-2017', title: 'Verkkotoimittaja', duties: 'Valokuvaaminen tapahtumissa sekä haastattelujen tekeminen ja kirjoittaminen'},
        {id: 4, name: 'Kempeleen seurakunta', time: '2014 alkaen', title: 'Keittiöapulainen', duties: 'Keittiössä avustaminen erilaisissa tapahtumissa'},
        {id: 5, name: 'ODL', time: '2014-2015', title: 'Ystäväpalvelu', duties: 'Vanhusten luona vierailu ja kävelytys'}
      ],
      confidences: [
        {id: 1, name: 'Varaluottamusvaltuutettu', time: '2016-2017', place: 'Koodiviidakko Oy'},
        {id: 2, name: 'Varaluottamusvaltuutettu', time: '2014-2016', place: 'Koodiviidakko Oy'},
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
