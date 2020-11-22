<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

p {
  font-size: clamp(1em, calc(1em + 3vw), 1.25em);
}

body {
  font-family: 'Barlow', sans-serif;
}

.limit-grid {
  width: 100%;
  margin: 0px auto;
  padding: 0 35px;

  @include media('>=large') {
    max-width: 1280px;
  }
}
</style>
