<template>
  <footer class="footer">
    <div class="limit-grid">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <img src="@/assets/logo.png" alt="" />
          <p>PARCEIRO DIGITAL</p>
        </div>
        <div class="footer__contact">
          <p>ATENDIMENTO ao CLIENTE</p>
          <a href="tel:+555131810760">51 3181-0760</a>
        </div>
        <div class="footer__hour">
          <p>SEGUNDA A SEXTA: <strong>08H ÀS 22H</strong></p>
          <p>SÁBADOS E DOMINGOS: <strong>09H ÀS 18H</strong></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  background: rgb(58, 204, 218);
  background: linear-gradient(
    90deg,
    rgba(58, 204, 218, 1) 0%,
    rgba(82, 215, 83, 1) 100%
  );
  color: $color-white;
  padding: 36px 0;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    display: flex;
    align-items: center;
    img {
      height: 60px;
    }
    p {
      display: flex;
      align-items: center;
      &::before {
        content: '';
        height: 98px;
        width: 1px;
        background-color: $color-white;
        margin: 0 24px;
      }
    }
  }
  &__contact {
    text-align: center;
    text-transform: uppercase;
    a {
      font-size: clamp(1em, calc(1em + 3vw), 2.8125em);
      font-weight: 700;
      color: $color-white;
      text-decoration: none;
    }
  }
  &__hour {
    text-align: right;
  }
}
</style>
