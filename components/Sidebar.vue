<template>
  <div class="utilities">
    <a href="https://www.linkedin.com/in/elisa-tervonen-85114592/"><span>LinkedIn</span><i class="fab fa-linkedin" /></a>
    <a href="https://www.instagram.com/elllulellu/?hl=fi"><span>Instagram</span><i class="fab fa-instagram" /></a>
    <a href="https://github.com/lellu"><span>Github</span><i class="fab fa-github" /></a>
    <a href="javascript:print();" title="Tulosta"><span>Tulosta</span> <i class="fas fa-print" /></a>
    <a v-if="false" href="#"><span>Tallenna pdf</span> <i class="fas fa-file-pdf"/></a>
    <a href="mailto:eeelisa.t( at )gmail.com"><span>Ota yhteyttä</span> <i class="fas fa-envelope" /></a>
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
    text-transform: uppercase;
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
        }
      }

      i {
        font-size: 1.5rem;
      }

      background-color: $orangedark;
    }


  }
}
</style>
