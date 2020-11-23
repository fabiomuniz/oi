<template>
  <a
    href="https://api.whatsapp.com/send?phone=+5541999999999&text=Informações planos"
    class="contact"
    target="_blank"
  >
    FALE COM A GENTE
    <i class="fab fa-whatsapp"></i>
  </a>
</template>

<style lang="scss">
.contact {
  background-color: transparent;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1;
  transition: 0.3s ease-in-out;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  @include media('>=large') {
    display: inline-flex;
  }
  i {
    margin-left: 12px;
    font-size: 1.5em;
  }
  &--white {
    border: 3px solid $color-white;
    color: $color-white;
    @include media('>=large') {
      &:hover {
        background-color: $color-white;
        color: $color-primary;
      }
    }
  }
  &--text-primary {
    @extend %text-gradient;
  }
  &--border-primary {
    @extend %text-gradient;
    border: 3px solid $color-secondary;
    @include media('>=large') {
      &:hover {
        border: 3px solid $color-gray;
        color: $color-gray;
        background: -webkit-linear-gradient(left, $color-gray, $color-gray);
        background: -o-linear-gradient(right, $color-gray, $color-gray);
        background: -moz-linear-gradient(right, $color-gray, $color-gray);
        background: linear-gradient(to right, $color-gray, $color-gray);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
