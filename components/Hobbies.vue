<template>
  <section>
    <span id="hobbies" class="anchor" />
    <h2>{{ $t('otheractivity.hobbies') }}</h2>
    <div class="cols">
      <div v-for="hobby in hobbies[$i18n.locale]" :key="hobby.id" class="col">
        <p v-if="hobby.link"><a :href="hobby.link" :title="hobby.name" rel="noreferrer"><img :src="hobby.image" :alt="hobby.name"></a></p>
        <p v-else><img :src="hobby.image" alt=""></p>
        <h3 v-if="hobby.link" class="h4"><a :href="hobby.link" :title="hobby.name" rel="noreferrer">{{ hobby.name }}</a></h3>
        <h3 v-else class="h4">{{ hobby.name }}</h3>
        <p>{{ hobby.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      hobbies: {
        fi: [
          {id: 1, name: 'Vapaaehtoistyö', description: 'Vanhusten avustaminen ja keittiöapu tapahtumissa', image: '/hobbies/hobby3.jpg', link: '', type: ''},
          {id: 2, name: 'Ulkoilu', description: 'Maastopyöräily, hiihto ja retkeily', image: '/hobbies/hobby4.jpg', link: '', type: ''},
          {id: 3, name: 'Valokuvaus', description: 'Luonto, linnut, kodin juhlat', image: '/hobbies/hobby5.jpg', link: 'https://kuvat.elisatervonen.com', type: ''},
          {id: 4, name: 'Entisöinti', description: 'Kalusteet, moottoripyörä ja auto', image: '/hobbies/hobby6.jpg', link: '', type: ''},
          {id: 5, name: 'Martimoaapa.com', description: 'Sivuston ylläpito ja blogin kirjoitus', image: '/hobbies/hobby1.jpg', link: 'https://www.martimoaapa.com', type: ''},
          {id: 6, name: 'Itsensä kehittäminen', description: 'Erilaiset sosiaalisen alan kurssit ja web-tekniikat', image: '/hobbies/hobby2.jpg', link: '', type: ''},
          {id: 7, name: 'Kirjoittaminen', description: 'Wikipedia sivut, Martimoaapa.com blogi, runot', image: '/hobbies/hobby1.jpg', link: '', type: ''},
        ],
        en: [
          {id: 1, name: 'Voluntary work', description: 'Helping and walking elderly and helping in kitchen in various events', image: '/hobbies/hobby3.jpg', link: '', type: ''},
          {id: 2, name: 'Enjoy of nature', description: 'Mountain biking, skiing and hiking', image: '/hobbies/hobby4.jpg', link: '', type: ''},
          {id: 3, name: 'Photography', description: 'Nature, birds, celebrations at home', image: '/hobbies/hobby5.jpg', link: 'https://kuvat.elisatervonen.com', type: ''},
          {id: 4, name: 'Restoration', description: 'Furnitures, motorbike and car', image: '/hobbies/hobby6.jpg', link: '', type: ''},
          {id: 5, name: 'Martimoaapa.com', description: 'Maintaining website', image: '/hobbies/hobby1.jpg', link: 'https://www.martimoaapa.com', type: ''},
          {id: 6, name: 'Self-studies', description: 'Various social cources and web-techniques', image: '/hobbies/hobby2.jpg', link: '', type: ''},
          {id: 7, name: 'Writing', description: 'Wikipedia pages, Martimoaapa.com blog, poems', image: '/hobbies/hobby1.jpg', link: '', type: ''},
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';

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
      transition: box-shadow 0.2s;

      &:hover {
        -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	      animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }

      @-webkit-keyframes shadow-drop-center {
        0% {
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
          box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
        }
      }
      @keyframes shadow-drop-center {
        0% {
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
          box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
        }
      }
    }
  }
}
</style>
