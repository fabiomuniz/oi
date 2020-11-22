<template>
  <header class="header">
    <div class="limit-grid">
      <div class="header__wrapper">
        <img src="@/assets/logo.png" alt="" />
        <a href="">
          FALE COM A GENTE
          <img src="@/assets/whats.png" alt="fale com a gente." />
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: absolute;
  top: 35px;
  left: 0;
  width: 100vw;
  z-index: 99;
  &__wrapper {
    display: flex;
    align-items: center;
    a {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      color: $color-white;
      text-decoration: none;
      font-weight: 700;
      border: 2px solid $color-white;
      border-radius: 29px;
      height: 58px;
      padding: 0 31px;
      img {
        margin-left: 14px;
      }
    }
  }
}
</style>
