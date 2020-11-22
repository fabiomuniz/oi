<template>
  <header class="header">
    <div class="limit-grid">
      <div class="header__wrapper">
        <img src="@/assets/logo.png" alt="" />
        <BtnContact class="contact--white" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    BtnContact: () => import('@/components/buttons/BtnContact.vue'),
  },
};
</script>

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
      text-decoration: none;
      font-weight: 700;
      border-radius: 29px;
      height: 58px;
      padding: 0 31px;
      display: none;
      @include media('>=large') {
        display: inline-flex;
      }
    }
  }
}
</style>
