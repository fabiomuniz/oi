<template>
  <a
    href="https://api.whatsapp.com/send?phone=+5551985446830"
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
    color: $color-secondary;
    border: 3px solid $color-secondary;
    @include media('>=large') {
      &:hover {
        border: 3px solid $color-primary;
        color: $color-white;
        background-color: $color-primary;
      }
    }
  }
}
</style>
