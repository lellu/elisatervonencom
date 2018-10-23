<template>
  <div class="utilities floating">
    <a href="javascript:print();" title="Tulosta"><span>Tulosta</span> <i class="fa fa-print" /></a>
    <a href="/cv-elisa-tervonen.pdf"><span>Tallenna pdf</span> <i class="fa fa-file-pdf-o"/></a>
    <a href="https://www.linkedin.com/in/elisa-tervonen-85114592/"><span>LinkedIn</span><i class="fa fa-linkedin-square" /></a>
    <a href="https://www.instagram.com/elllulellu/?hl=fi"><span>Instagram</span><i class="fa fa-instagram" /></a>
    <a href="mailto:kokkonen.elisa@gmail.com"><span>Ota yhteyttä</span> <i class="fa fa-envelope" /></a>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

.utilities {
  ul {
    list-style: none;
    margin: 0;
  }

  li {
    font-size: .9rem;

    footer & {
      display: inline-block;
      padding: .5rem;
    }
  }

  .icon {
    a {
      color: $black;
    }
  }
}

.floating {
  bottom: 20%;
  position: fixed;
  right: 0;
  z-index: 1;
  -webkit-transition: margin 1s;
  -webkit-transition-delay: 0s;
  transition: margin 1s;

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

    span {
      position: absolute;
      top: 0;
      right: 45px;
      visibility: hidden;
      height: 45px;
      padding: 0 0.7rem;
      text-align: right;
      background-color: $orange;
    }

    i {
      font-size: 1.5rem;
    }

    &:hover {
      span {
        visibility: visible;
      }
    }


  }
}
</style>
