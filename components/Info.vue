<template>
  <section class="info page-break">
    <span id="info" class="anchor" />
    <p><img class="profile-image" src="/mie.jpg" alt=""></p>
    <p>{{ $t('info.info1') }}</p>
    <p>{{ $t('info.info2') }}</p>
    <p><i>"{{ $t('info.info3') }}"</i></p>
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

    @media only screen and (max-width: 920px) {
      max-width: 80%;
    }

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
