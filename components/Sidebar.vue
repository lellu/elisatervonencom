<template>
  <div class="utilities">
    <a href="https://www.linkedin.com/in/elisa-tervonen-85114592/" title="LinkedIn Profile"><span>LinkedIn</span><i class="fab fa-linkedin" /></a>
    <a href="https://www.instagram.com/elllulellu/?hl=fi" title="Instagram"><span>Instagram</span><i class="fab fa-instagram" /></a>
    <a href="https://twitter.com/elisa_tervonen" title="Twitter"><span>Twitter</span><i class="fab fa-twitter" /></a>
    <a href="https://github.com/lellu" title="Github profile"><span>Github</span><i class="fab fa-github" /></a>
    <a :title="$t('sidebar.printpage')" href="javascript:print();"><span>{{ $t('sidebar.print') }}</span> <i class="fas fa-print" /></a>
    <a v-if="false" href="#" title="Tallenna sivu pdf-tiedostona"><span>Tallenna pdf</span> <i class="fas fa-file-pdf"/></a>
    <a :title="$t('sidebar.contactemail')" href="mailto:kokkonen.elisa( at )gmail.com"><span>{{ $t('sidebar.contact') }}</span> <i class="fas fa-envelope" /></a>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

.utilities {
  bottom: 10%;
  position: fixed;
  right: 0;
  z-index: 1;
  -webkit-transition: margin 1s;
  -webkit-transition-delay: 0s;
  transition: margin 1s;

  @media only screen and (max-width: 768px) {
    bottom: auto;
    right: auto;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  a {
    display: block;
    width: 45px;
    height: 45px;
    color: $white;
    text-align: center;
    //text-transform: uppercase;
    background-color: $orange;
    line-height: 45px;
    position: relative;
    white-space: nowrap;

    @media only screen and (max-width: 768px) {
      width: auto;
      height: auto;
      margin: 0 auto;
      width: 33.333%;
      text-align: left;
      padding: 0 0.5rem;
      white-space: nowrap;
    }

    @media only screen and (max-width: 550px) {
      width: 50%;
    }

    @media only screen and (max-width: 400px) {
      width: 100%;
    }

    span {
      position: absolute;
      top: 0;
      right: 45px;
      visibility: hidden;
      height: 45px;
      padding: 0 0.7rem;
      text-align: left;
      background-color: $orange;
      font-size: 0.9rem;
      transition: font-size .5s;

      @media only screen and (max-width: 768px) {
        transition: none;
        display: inline-block;
        visibility: visible;
        position: relative;
        right: auto;
        top: auto;
      }
    }

    i {
      font-size: 1.4rem;
      transition: all .5s;

      @media only screen and (max-width: 768px) {
        transition: none;
        float: left;
        line-height: 45px;
      }
    }

    &:hover {
      span {
        visibility: visible;
        font-size: 1rem;

        @media only screen and (max-width: 768px) {
          background-color: $orangedark;
          font-size: 0.9rem;
        }
      }

      i {
        font-size: 1.5rem;

        @media only screen and (max-width: 768px) {
          font-size: 1.4rem;
        }
      }

      background-color: $orangedark;
    }
  }
}
</style>
