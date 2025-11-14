<template>
  <nav class="c-navigation">
    <NuxtLink :to="localePath('/')" class="u-visually-hidden">{{ $t("navigation.home") }}</NuxtLink>
    <!-- <NuxtLink :to="localePath('photography')">Temp</NuxtLink> -->
    <NuxtLink v-for="item in navigationItems" :to="localePath(item)" class="c-navigation__item">
      {{ $t(`navigation.${item}`) }}
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
const navigationItems = ref(["tchoukball", "photography", "technology"]);
</script>

<style scoped>
.c-navigation {
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.c-navigation__item {
  line-height: 30px;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color-nav-item-foreground);
  background-color: var(--color-nav-item-background);
  min-width: 50vw;
  margin: 2px;
  padding: 0px 5px;
  border: 1px solid transparent;
  border-radius: 0 16px 0 16px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s, border-color 0.25s;
}

.c-navigation__item:nth-child(2) {
  align-self: flex-start;
}

.c-navigation__item:last-child {
  align-self: flex-end;
}

.c-navigation__item:hover {
  color: var(--color-nav-item-foreground-hover);
  background-color: transparent;
  border-color: var(--orange);
}

@media (min-width: 440px) {
  .c-navigation {
    flex-direction: row;
    justify-content: center;

    /* In case one increase the font-size in the browser */
    flex-wrap: wrap;
  }
  .c-navigation__item {
    min-width: auto;
    border-radius: 0;
  }

  .c-navigation__item:nth-child(2) {
    border-bottom-left-radius: 16px;
  }

  .c-navigation__item:last-child {
    border-top-right-radius: 16px;
  }
}

@media (min-width: 600px) {
  .c-navigation__item {
    font-size: 1rem;
    padding: 5px 15px;
  }

  .c-navigation__item:nth-child(2) {
    border-bottom-left-radius: 21px;
    padding-left: 20px;
  }

  .c-navigation__item:last-child {
    border-top-right-radius: 21px;
    padding-right: 20px;
  }
}
</style>
