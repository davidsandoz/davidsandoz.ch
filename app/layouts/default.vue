<template>
  <ds-header />
  <main class="l-default">
    <slot />
  </main>
  <ds-footer />
</template>

<style scoped>
.l-default {
  max-width: var(--default-layout-max-width);
  width: 100%;
  margin: auto;
  margin-top: 0;
  padding: 30px var(--main-side-padding);
  z-index: 1;
}

@media (min-width: 600px) {
  .l-default {
    margin-top: 50px;
    padding: 30px;
    width: 90vw;
  }
}
</style>
