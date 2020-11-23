<template>
  <section class="modal" :class="{ 'modal--active': modal }">
    <div class="modal__wrapper" v-if="!message">
      <i class="fas fa-times modal__close" @click.prevent="close"></i>
      <h2>INFORME SEU NOME E TELEFONE QUE ENTRAREMOS EM CONTATO!</h2>
      <form action="">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="DDD + Telefone" />
        <button type="submit" @click.prevent="message = !message">
          Enviar
        </button>
      </form>
    </div>
    <div class="modal__wrapper modal__wrapper--center" v-if="message">
      <i class="fas fa-times modal__close" @click.prevent="close"></i>
      <h2><span>OBRIGADO! EM BREVE</span> ENTRAREMOS EM CONTATO</h2>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      message: false,
    };
  },
  computed: {
    ...mapGetters(['modal']),
  },
  methods: {
    ...mapMutations(['CHANGE_MODAL']),
    close() {
      this.CHANGE_MODAL();
      if (this.message) {
        setTimeout(() => {
          this.message = false;
        }, 300);
      }
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: RGBA(0, 0, 0, 0.75);
  transition: 0.3s ease-in-out;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &--active {
    opacity: 1;
    z-index: 100;
  }
  &__wrapper {
    width: 100%;
    max-width: 800px;
    min-height: 390px;
    background: $color-white;
    border-radius: 15px;
    position: relative;
    padding: 55px 20px;
    margin: 0 20px;
    &--center {
      display: flex;
      align-items: center;
    }
    @include media('>=large') {
      margin: 0;
    }
  }
  &__close {
    @extend %text-gradient;
    font-size: 1.5em;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  h2,
  form {
    max-width: 540px;
    display: block;
    margin: 0px auto;
  }
  h2 {
    font-size: clamp(1em, calc(1em + 3vw), 1.875em);
    color: $color-gray;
    text-align: center;
    span {
      display: block;
    }
  }
  form {
    margin-top: 33px;
    input,
    button {
      appearance: none;
      outline: none;
    }
    input {
      display: flex;
      width: 100%;
      height: 58px;
      margin-bottom: 11px;
      padding: 0 20px;
      border: 2px solid $color-primary;
      border-radius: 29px;
    }
    button {
      @extend %bg-gradient;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 170px;
      height: 58px;
      padding: 0 20px;
      border-radius: 29px;
      border: 0px none;
      color: $color-white;
      text-transform: uppercase;
      font-size: clamp(1em, calc(1em + 3vw), 1.5625em);
      margin: 0px auto;
      cursor: pointer;
      @include media('>=large') {
        transition: 0.3s ease-in-out;
        &:hover {
          color: $color-primary;
          background: rgb(255, 255, 255);
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 100%
          );
        }
      }
    }
  }
}
</style>
