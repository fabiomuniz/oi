<template>
  <a href="" class="sign">
    <p>Assine Agora</p>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sign {
  background-color: $color-white;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: 0.3s ease-in-out;
  @include media('>=large') {
    display: inline-flex;
  }
  p {
    margin-bottom: initial;
    font-weight: 500;
  }
  &--primary {
    p {
      @extend %text-gradient;
    }
  }
  &--bg-primary {
    @extend %bg-gradient;
    p {
      color: $color-white;
    }
  }
  &--orange {
    background: $color-orange;
    p {
      color: $color-white;
    }
  }
}
</style>
