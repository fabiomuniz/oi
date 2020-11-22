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

<script>
export default {};
</script>

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
  }
  &--text-primary {
    @extend %text-gradient;
  }
  &--border-primary {
    @extend %text-gradient;
    border: 3px solid $color-secondary;
  }
}
</style>
