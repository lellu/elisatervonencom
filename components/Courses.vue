<template>
  <section id="courses">
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
          <td class="nowrap">{{ course.time }}</td>
          <td class="nowrap"><span v-show="course.duration">({{ course.duration }})</span></td>
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
        {id: 3, name: 'MuistiKaVeRi koulutus', duration: '', time: 'syksy 2016', trainer: 'Oulun seudun muistiyhdistys', type: 'other'},
        {id: 4, name: 'Henkisen tuen jatkokurssi', duration: '', time: 'kevät 2016', trainer: 'Suomen Punainen Risti', type: 'other'},
        {id: 5, name: 'Henkisen tuen peruskurssi', duration: '', time: '4.-5.12.2015', trainer: 'Suomen Punainen Risti', type: 'other'},
        {id: 6, name: 'Viittomakielen jatkokurssi 2', duration: '', time: 'syksy 2015', trainer: 'Oulu-opisto', type: 'other'},
        {id: 7, name: 'Vapaaehtoistoiminnan koulutus', duration: '', time: '2.9-11.11.2014', trainer: 'Kempeleen Seurakunta', type: 'other'},
        {id: 8, name: 'Responsiivinen web-suunnittelu', duration: '', time: '20.-21.5.2015', trainer: 'OAMK', type: 'web'},
        {id: 9, name: 'Mielenterveyden ensiapu 1', duration: '', time: '2014', trainer: 'Suomen mielenterveysseura', type: 'other'},
        {id: 10, name: 'Varhaisen puuttumisen kurssi', duration: '', time: '2013', trainer: 'Punainen Risti', type: 'other'},
        {id: 11, name: 'Mielenterveyskuntoutujan ystävänä', duration: '', time: '2012', trainer: 'Punainen Risti', type: 'other'},
        {id: 12, name: 'Ystäväpalvelun peruskurssi', duration: '', time: '2012', trainer: 'Punainen Risti', type: 'other'},
        {id: 13, name: 'Tukiviittomien jatkokurssi', duration: '', time: '2011', trainer: 'Oulu-opisto', type: 'other'},
        {id: 14, name: 'Tukiviittomien alkeiskurssi', duration: '', time: '2010', trainer: 'Oulu-opisto', type: 'other'},
        {id: 15, name: 'Viittomakielen jatkokurssi 2', duration: '', time: '2009', trainer: 'Oulu-opisto', type: 'other'},
        {id: 16, name: 'Viittomakielen jatkokurssi', duration: '', time: '2009', trainer: 'Oulu-opisto', type: 'other'},
        {id: 17, name: 'Viittomakielen alkeiskurssi', duration: '', time: '2008', trainer: 'Oulu-opisto', type: 'other'},
        {id: 18, name: 'Hygieniapassi', duration: '', time: '23.2.2008', trainer: 'Oulun 4H-yhdistys', type: 'other'},
        {id: 19, name: 'Isoiskoulutus', duration: '', time: '1998-1999', trainer: 'Nilsiän SRK', type: 'other'},
        {id: 20, name: 'Siivoustyökurssi', duration: '', time: '1998', trainer: 'Nilsiän 4H-yhdistys', type: 'other'},
        {id: 21, name: 'Vanhuspalvelukurssi', duration: '', time: '1998', trainer: 'Nilsiän 4H-yhdistys', type: 'other'},
        {id: 22, name: 'Nuorten kuvataidekoulu', duration: '', time: '1993-1996', trainer: 'Nilsiän kansalaisopisto', type: 'other'}
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
