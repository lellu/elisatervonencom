<template>
  <section id="info" class="info">
    <p><img class="profile-image" src="assets/mie.jpg" alt=""></p>
    <h1>Kuka Elisa?</h1>
    <p>Työskentelen kymmenettä vuotta web-kehityksen parissa. Työni on teknistä ja järjestelmällistä, mutta samalla luovaa ongelman ratkaisua. Tästä kombinaatiosta pidän eniten työssäni. Tekniikan vastapainoksi käytän vapaa-aikaani vanhuksien avustamiseen ja itseni kehittämiseen erilaisilla sosiaalialan kursseilla. Harrastan myös luonnossa liikkumista sekä kaikenlaista käsillä puuhastelua.</p>
    <p>"Voi oppia mitä vain, kunhan omistaa intohimon, motivaation ja hyvän opettajan"</p>
  </section>
</template>

<script>
</script>

<style lang="scss">
.info {
  text-align: center;

  h2 {
    border-bottom: 0;
  }

  p {
    font-size: 1.5rem;
    margin: 0 auto;
    max-width: 70%;

    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
}
</style>
