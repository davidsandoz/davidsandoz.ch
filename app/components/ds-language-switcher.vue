<template>
  <nav class="c-language-switcher">
    <NuxtLink
      v-for="localeOption in locales"
      :key="localeOption.code"
      class="c-language-switcher__language"
      :class="{ 'c-language-switcher__language--current': localeOption.code === locale }"
      :to="switchLocalePath(localeOption.code)"
    >
      {{ localeOption.name }}
    </NuxtLink>
  </nav>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>
.c-language-switcher {
  position: relative;
  z-index: 2;
}

.c-language-switcher__language {
  transition: color 0.5s;
}

.c-language-switcher__language:not(:last-of-type)::after {
  content: "|";
  margin: 0 0.5rem;
  color: var(--color-language-switcher-current);
}

.c-language-switcher__language--current {
  color: var(--color-language-switcher-current);
}
</style>
