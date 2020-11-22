<template>
  <section class="banner">
    <div class="limit-grid">
      <div class="banner__grid">
        <div class="banner__grid__content">
          <h1>INTERNET <strong>OI FIBRA 500MB</strong> POR APENAS:</h1>
          <h2>R$149,90</h2>
          <p>Instalação Grátis | Fixo Ilimitado</p>
          <p>Oi Play | Modem Wifi Up</p>
          <p>
            <small
              >*NO DÉBITO AUTOMÁTICO E CONTA DIGITAL. *CONSULTE CONDIÇÕES PARA
              SUA REGIÃO.</small
            >
          </p>
        </div>
        <div class="banner__grid__button">
          <BtnSign class="sign--primary" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    BtnSign: () => import('@/components/buttons/BtnSign.vue'),
  },
};
</script>

<style lang="scss">
.banner {
  position: relative;
  background: url('../assets/banner.jpg') no-repeat center center;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 35%;
    grid-gap: 40px;
    @include media('>=large') {
      padding: 0 10%;
      margin-top: 5%;
      grid-template-columns: 60% auto;
      grid-gap: initial;
    }
    &__content {
      color: $color-white;
      h1 {
        font-size: clamp(1em, calc(1em + 3vw), 4.375em);
        font-weight: 400;
        line-height: 1;
        strong {
          display: block;
        }
      }
      h2 {
        font-size: clamp(1em, calc(1em + 3vw), 5em);
        line-height: 1;
        background-color: $color-orange;
        display: inline-block;
        padding: 21px 61px;
        border-radius: 59px;
        margin: 33px 0;
      }
      p {
        font-size: 20px;
        line-height: 30px;
        small {
          font-size: 10px;
          font-weight: 700;
          margin-top: 10%;
          display: block;
        }
      }
    }
    &__button {
      align-self: flex-end;
      justify-self: center;
      @include media('>=large') {
        justify-self: end;
      }
      a {
        padding: 15px 45px;
        margin-bottom: 40%;
        font-size: clamp(1em, calc(1em + 3vw), 1.562em);
        border-radius: 28px;
      }
    }
  }
}
</style>
