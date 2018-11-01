<template>
  <section>
    <span id="courses" class="anchor" />
    <h2>Kurssit</h2>

    <table id="v-for-object" class="demo">
      <thead>
        <tr>
          <th>Kurssi</th>
          <th>Aika</th>
          <th>Kesto</th>
          <th>Kouluttaja</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" v-if="course.type==filter||filter=='all'||course.type==''" :key="course.id">
          <td>{{ course.name }}</td>
          <td class="time nowrap">{{ course.time }}</td>
          <td class="duration nowrap"><span v-show="course.duration">{{ course.duration }}</span></td>
          <td>{{ course.trainer }}</td>
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
      courses: [
        {id: 1, name: 'Luovan kirjoittamisen aineopinnot', duration: '25op', time: '25.9.2018-18.05.2019', trainer: 'Oulun Kesäyliopisto', type: 'other'},
        {id: 2, name: 'Mielenterveyden ensiapu 2', duration: '14h', time: '20.-21.11.2017', trainer: 'Suomen mielenterveysseura/OAKK', type: 'other'},
        {id: 3, name: 'MuistiKaVeRi koulutus', duration: '12h', time: '7.-8.9.2016', trainer: 'Oulun seudun muistiyhdistys', type: 'other'},
        {id: 4, name: 'Henkisen tuen jatkokurssi', duration: '12h', time: '26.-27.11.2016', trainer: 'Suomen Punainen Risti', type: 'other'},
        {id: 5, name: 'Henkisen tuen peruskurssi', duration: '12h', time: '4.-5.12.2015', trainer: 'Suomen Punainen Risti', type: 'other'},
        {id: 6, name: 'Viittomakielen jatkokurssi 2', duration: '24h', time: '12.1-16.3.2015', trainer: 'Oulu-opisto', type: 'other'},
        {id: 7, name: 'Vapaaehtoistoiminnan koulutus', duration: '', time: '2.9-11.11.2014', trainer: 'Kempeleen Seurakunta', type: 'other'},
        {id: 8, name: 'Responsiivinen web-suunnittelu', duration: '16h', time: '20.-21.5.2015', trainer: 'Oulun Ammattikorkeakoulu', type: 'web'},
        {id: 9, name: 'Mielenterveyden ensiapu 1', duration: '14h', time: '12.5.2014', trainer: 'Suomen mielenterveysseura', type: 'other'},
        {id: 10, name: 'Varhaisen puuttumisen kurssi', duration: '18op', time: '6-7.4.2013', trainer: 'Punainen Risti', type: 'other'},
        {id: 11, name: 'Mielenterveyskuntoutujan ystävänä', duration: '6h', time: '13.10.2012', trainer: 'Punainen Risti', type: 'other'},
        {id: 12, name: 'Ystäväpalvelun peruskurssi', duration: '', time: '20.5.2012', trainer: 'Punainen Risti', type: 'other'},
        {id: 13, name: 'Tukiviittomien jatkokurssi', duration: '24h', time: '24.1-18.4.2012', trainer: 'Oulu-opisto', type: 'other'},
        {id: 14, name: 'Tukiviittomien alkeiskurssi', duration: '20h', time: '6.9-29.11.2011', trainer: 'Oulu-opisto', type: 'other'},
        {id: 15, name: 'Viittomakielen jatkokurssi 2', duration: '30h', time: '26.1-6.4.2010', trainer: 'Oulu-opisto', type: 'other'},
        {id: 16, name: 'Viittomakielen jatkokurssi', duration: '30h', time: '8.9-17.11.2009', trainer: 'Oulu-opisto', type: 'other'},
        {id: 17, name: 'Viittomakielen jatkokurssi', duration: '30h', time: '26.1-20.4.2009', trainer: 'Oulu-opisto', type: 'other'},
        {id: 18, name: 'Viittomakielen alkeiskurssi', duration: '30h', time: '10.9-19.11.2008', trainer: 'Oulu-opisto', type: 'other'},
        {id: 19, name: 'Hygieniapassi', duration: '', time: '23.2.2008', trainer: 'Oulun 4H-yhdistys', type: 'other'},
        {id: 21, name: 'Asiakaspalvelukoulutus', duration: '5h', time: '22.5.1999', trainer: 'Nilsiän 4H-yhdistys', type: 'other'},
        {id: 22, name: 'Isoiskoulutus', duration: '', time: '1998-1999', trainer: 'Nilsiän SRK', type: 'other'},
        {id: 23, name: 'Siivoustyökurssi', duration: '23h', time: '18.2-21.2.1998', trainer: 'Nilsiän 4H-yhdistys', type: 'other'},
        {id: 24, name: 'Vanhuspalvelukurssi', duration: '22h', time: '28.9-23.11.1998', trainer: 'Nilsiän 4H-yhdistys', type: 'other'},
        {id: 25, name: 'Nuorten kuvataidekoulu', duration: '', time: '1993-1996', trainer: 'Nilsiän kansalaisopisto', type: 'other'}
      ]
    }
  }
}
</script>

<style lang="scss">
table td.nowrap {
  @media only screen and (max-width: 768px) {
    display: inline-block;
    width: auto;
  }
}
</style>
