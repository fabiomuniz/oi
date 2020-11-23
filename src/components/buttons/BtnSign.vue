<template>
  <a href="" class="sign" @click.prevent="CHANGE_MODAL">
    <p>Assine Agora</p>
  </a>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['CHANGE_MODAL']),
  },
};
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
    transition: 0.3s ease-in-out;
  }
  &--primary {
    p {
      @extend %text-gradient;
    }
    @include media('>=large') {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &--bg-primary {
    @extend %bg-gradient;
    p {
      color: $color-white;
    }
    @include media('>=large') {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &--orange {
    background: $color-orange;
    p {
      color: $color-white;
    }
    @include media('>=large') {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
