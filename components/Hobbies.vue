<template>
  <section>
    <span id="hobbies" class="anchor" />
    <h2>Harrastukset</h2>
    <div class="cols">
      <div v-for="hobby in hobbies" :key="hobby.id" class="col">
        <p><img :src="hobby.image" alt=""></p>
        <h4>{{ hobby.name }}</h4>
        <p>{{ hobby.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      hobbies: [
        {id: 1, name: 'Martimoaapa.com', description: 'Sivuston ylläpito ja blogin kirjoitus', image: '/hobbies/hobby1.jpg', link: 'https://www.martimoaapa.com', type: ''},
        //{id: 2, name: 'Itsensä kehittäminen', description: 'Erilaiset kurssit, uusien web-tekniikoiden opiskelu', image: '/hobbies/hobby2.jpg', link: '', type: ''},
        {id: 3, name: 'Vapaaehtoistyö', description: 'Vanhusten avustaminen, keittiöapu', image: '/hobbies/hobby3.jpg', link: '', type: ''},
        {id: 4, name: 'Liikunta', description: 'Maastopyöräily, hiihto', image: '/hobbies/hobby4.jpg', link: '', type: ''},
        {id: 5, name: 'Luonnossa liikkuminen', description: 'Retkeily, valokuvaus', image: '/hobbies/hobby5.jpg', link: '', type: ''},
        {id: 6, name: 'Entisöinti', description: 'Kalusteet, moottoripyörä, auto', image: '/hobbies/hobby6.jpg', link: '', type: ''}
      ]
    }
  }
}
</script>

<style lang="scss">
.cols {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  .col {
    width: 20%;
    padding: 0rem 1rem 2rem 1rem;

    @media only screen and (max-width: 1200px) {
      width: 25%;
    }

    @media only screen and (max-width: 920px) {
      width: 33.33333%;
    }

    @media only screen and (max-width: 550px) {
      width: 50%;
      padding: 1rem 1rem;
    }

    @media only screen and (max-width: 400px) {
      width: 100%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
