<template>
  <section class="info">
    <span id="info" class="anchor" />
    <p><img class="profile-image" src="/mie.jpg" alt=""></p>
    <h1>Kuka Elisa?</h1>
    <p>Tällä hetkellä toimin web-kehittäjä ja tiimin vetäjänä Koodiviidakko Oy:ssä. Web-kehityksen parissa olen työskennellyt jo yli kymmenen vuotta. Työni on teknistä ja järjestelmällistä, mutta samalla luovaa ongelman ratkaisua ja kommukointia eri osapuolten välillä. Tästä kombinaatiosta pidän eniten työssäni.</p>
    <p>Tekniikan vastapainoksi käytän vapaa-aikaani vanhuksien avustamiseen ja itseni kehittämiseen erilaisilla kursseilla. Harrastan myös luonnossa liikkumista sekä kaikenlaista käsillä puuhastelua.</p>
    <p>"Voi oppia mitä vain, kunhan omistaa intohimon, motivaation ja hyvän opettajan"</p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';
@import 'assets/scss/general.scss';

.info {
  text-align: center;

  h2 {
    border-bottom: 0;
  }

  p {
    font-size: 1.5rem;
    margin: 1.5rem auto;
    max-width: 70%;

    @media only screen and (max-width: 768px) {
      max-width: 100%;
      font-size: 1.3rem;
    }
  }

  .profile-image {
    @include border-radius(100px);
    height: auto;
    width: 200px;
  }
}
</style>
