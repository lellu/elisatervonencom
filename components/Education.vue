<template>
  <section class="page-break">
    <span id="education" class="anchor" />
    <h2>{{ $t('links.education') }}</h2>

    <div class="history-list">
      <div v-for="study in studies[$i18n.locale]" v-if="study.type==filter||filter=='all'||study.type==''" :key="study.id" :class="{even: study.id % 2, odd: !(study.id % 2)}">
        <div class="name">
          <h3>{{ study.name }}</h3>
          <p>{{ study.title }}</p>
        </div>
        <div class="year"><span>{{ study.time }}</span></div>
        <div class="desc" v-html="study.duties" />
      </div>
    </div>
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
      studies: {
        fi: [
          {id: 6, name: 'Go Artic Oy ja Kempeleen, Tyrnävän ja Limingan kunnat', time: '2020-', title: 'Lakeuden matkailuopas', duties: 'Lakeuden matkailuopaskoulutus: Kempele, Liminka, Tyrnävä, Oulu', type: '' },
          {id: 5, name: 'Oulun seudun ammattiopisto, OSAO', time: '2016 - 2017', title: 'Lähiesimiestyön ammattitutkinto', duties: 'Kehittämissuunnitelma: Koodiviidakko Oy, Perehdytyksen kehittäminen ja koulutuskalenterin suunnittelu', type: '' },
          {id: 4, name: 'Oulun seudun ammattikorkeakoulu', time: '2010 - 2011', title: 'Ohjelmistotestaajan erikoistumisopinnot', duties: 'Projektityö: Koodiviidakko Oy, Sivuviidakko-julkaisujärjestelmän käyttöliittymätestaus ja testauksen automatisointi', type: 'web' },
          {id: 3, name: 'Oulun seudun ammattikorkeakoulu', time: '2006 - 2009', title: 'Tietojenkäsittelyn koulutusohjelma, Tradenomi', duties: 'Työharjoittelut: Oulun 4H-yhdistys ja Koodiviidakko Oy<br>Opinnäytetyö: Mieluummin-kollektiivin websivuston rakentaminen', type: 'web' },
          {id: 2, name: 'Piippolan käsi- ja taideteollisuusoppilaitos', time: '2003 - 2006', title: 'Audiovisuaalisen viestinnän perustutkinto, Media-assistentti', duties: 'Suuntautuminen: verkko-ohjelmointi (php) ja multimedia<br>Työharjoittelut: Piippolan käsi- ja taideteollisuusoppilaitos ja MSS Group Oy<br>Opinnäytetyö: 4H-yhdistyksen alueellisen lehden kokoaminen ja taitto', type: 'web' },
          {id: 1, name: 'Lapinlahden lukio', time: '1999 - 2002', title: 'Ylioppilas', duties: 'Kuvataidelinja', type: '' }
        ],
        en: [
          {id: 6, name: 'Go Artic Oy and Kempele, Tyrnävä ja Liminga municipality', time: '2020-', title: 'Local tourist guide', duties: 'Local tourist guide training. Regions: Kempele, Liminka, Tyrnävä, Oulu', type: '' },
          {id: 5, name: 'Oulu Vocational College, OSAO', time: '2016 - 2017', title: 'Management and entrepreneurship training', duties: 'Thesis: Koodiviidakko Oy, induction development and designing training calendar', type: '' },
          {id: 4, name: 'Oulu University of Applied Sciences', time: '2010 - 2011', title: 'Computer software Testing, further training', duties: 'Project work: Koodiviidakko Oy, Sivuviidakko-content management system user interface testing and testing automation', type: 'web' },
          {id: 3, name: 'Oulu University of Applied Sciences', time: '2006 - 2009', title: 'Information Technology, Bachelor of Business Administration', duties: 'Interships: Oulun 4H-yhdistys and Koodiviidakko Oy<br>Thesis: Building Mieluummin-collective website', type: 'web' },
          {id: 2, name: 'Piippola Municipal Education and Training Consortium', time: '2003 - 2006', title: 'Audiovisual Communication, Media-assistant', duties: 'Orientation: web-programming (php) ja multimedia<br>Interships: Piippola Municipal Education and Training Consortium ja MSS Group Oy<br>Thesis: Building and folding The Regional Magazine of The 4H-organization', type: 'web' },
          {id: 1, name: 'Senior High School in Visual Arts', time: '1999 - 2002', title: 'Finnish Matriculation Examination', duties: 'National artistic programme specialized in visual arts', type: '' }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';
.history-list {
  position: relative;
  padding: 1rem 0;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    left: 50%;
    background-color: $gray;
    z-index: 0;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 1rem 0;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      top: 50%;
      background-color: $gray;
      z-index: 0;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    .year {
      order: 1;
      width: 16%;
      text-align: center;

      @media only screen and (max-width: 768px) {
        order: 0;
        width: 100%;
      }

      span {
        display: inline-block;
        padding: 0.5rem 0.7rem;
        color: $white;
        text-transform: uppercase;
        border: none;
        background-color: $green;
      }
    }

    h3 {
      margin: 0;
      font-size: 1.15rem;
    }

    p {
      margin: .5rem 0 0 0;
    }

    .name,
    .desc {
      width: 42%;
      padding: 1rem;
      margin-top: 3rem;
      border: solid 2px $gray;
      background-color: $graylight;
      z-index: 1;

      @media only screen and (max-width: 768px) {
        width: 50%;
      }

      @media only screen and (max-width: 500px) {
        width: 100%;
      }
    }

    .name {
      background-color: $white;
    }

    &.odd {
      .name {
        text-align: right;
        order: 0;

        @media only screen and (max-width: 768px) {
          order: 1;
          text-align: left;
          border-right: none;
          background-color: $white;
        }

        @media only screen and (max-width: 500px) {
          margin-top: 1rem;
          border-right: solid 2px $gray;
          border-bottom: none;
          padding: 1rem 1rem 0.5rem 1rem;
        }
      }

      .desc {
        order: 2;

        @media only screen and (max-width: 768px) {
          border-left: none;
          background-color: $white;
        }

        @media only screen and (max-width: 500px) {
          border-left: solid 2px $gray;
          border-top: none;
          margin-top: 0;
          padding: 0.5rem 1rem 1rem 1rem;
        }
      }
    }

    &.even {

      &:first-child {
        padding-top: 0;
      }

      .name {
        order: 2;

        @media only screen and (max-width: 768px) {
          order: 1;
          border-right: none;
          background-color: $white;
        }

        @media only screen and (max-width: 500px) {
          margin-top: 1rem;
          border-right: solid 2px $gray;
          border-bottom: none;
          padding: 1rem 1rem 0.5rem 1rem;
        }
      }

      .desc {
        text-align: right;
        order: 0;

        @media only screen and (max-width: 768px) {
          order: 2;
          border-left: none;
          text-align: left;
          background-color: $white;
        }

        @media only screen and (max-width: 500px) {
          border-left: solid 2px $gray;
          border-top: none;
          margin-top: 0;
          padding: 0.5rem 1rem 1rem 1rem;
        }
      }
    }
  }
}
</style>
