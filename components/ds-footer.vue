<template>
  <footer class="c-footer">
    <DsLinkIconList :linkIcons="linkIcons" small greyscale />
    <div class="c-footer__copyright">&copy; David Sandoz</div>
  </footer>
</template>

<script lang="ts" setup>
import type { LinkIcon } from "~/components/ds-link-icon.vue";

const linkIcons = ref<LinkIcon[]>([
  {
    targetName: "LinkedIn",
    targetType: "platform",
    slug: "linkedin",
    href: "https://linkedin.com/in/Davidsandoz",
  },
  {
    targetName: "GitHub",
    targetType: "platform",
    slug: "github",
    href: "https://github.com/DavidSandoz",
    hasColourSchemeAltIcon: true,
  },
  {
    targetName: "Mastodon",
    targetType: "platform",
    slug: "mastodon",
    href: "https://tooting.ch/@sandoz",
  },
  {
    targetName: "Instagram",
    targetType: "platform",
    slug: "instagram",
    href: "https://instagram.com/davidsandoz",
  },
]);
</script>

<style scoped>
.c-footer {
  margin: 20px 0;
  text-align: center;
  font-size: 1rem;
}

.c-footer__copyright {
  margin-top: 20px;
}
</style>
