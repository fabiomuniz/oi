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
  display: inline-flex;
  align-items: center;
  line-height: 1;
  transition: 0.3s ease-in-out;
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
