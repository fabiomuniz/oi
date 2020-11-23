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
        background: rgb(58, 204, 218);
        background: linear-gradient(
          45deg,
          rgba(58, 204, 218, 1) 0%,
          rgba(82, 215, 83, 1) 100%
        );
        p {
          color: $color-white;
          background: -webkit-linear-gradient(left, $color-white, $color-white);
          background: -o-linear-gradient(right, $color-white, $color-white);
          background: -moz-linear-gradient(right, $color-white, $color-white);
          background: linear-gradient(to right, $color-white, $color-white);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
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
        background: rgb(255, 255, 255);
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        );
        p {
          color: $color-primary;
          background: -webkit-linear-gradient(
            left,
            $color-primary,
            $color-secondary
          );
          background: -o-linear-gradient(
            right,
            $color-primary,
            $color-secondary
          );
          background: -moz-linear-gradient(
            right,
            $color-primary,
            $color-secondary
          );
          background: linear-gradient(
            to right,
            $color-primary,
            $color-secondary
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
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
