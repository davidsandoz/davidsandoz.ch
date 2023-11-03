<template>
  <h2>{{ t("title") }}</h2>
  <DsFigure
    slug="nothing_forum_epfl"
    :altText="t('figure.altText')"
    :caption="t('figure.caption')"
    photographer="Max Fray"
  />
  <ContentDoc :path="`${$i18n.locale}/technology`" tag="section" />
  <DsLinkIconList :linkIcons="linkIcons" />
</template>

<script lang="ts" setup>
import type { LinkIcon } from "~/components/ds-link-icon.vue";

defineI18nRoute({
  paths: {
    en: "/technology",
    fr: "/technologie",
  },
});

const { t } = useI18n({ useScope: "local" });
const linkIcons = ref<LinkIcon[]>([
  {
    targetName: "GitHub",
    targetType: "platform",
    slug: "github",
    href: "https://github.com/DavidSandoz",
    hasColourSchemeAltIcon: true,
  },
  {
    targetName: "GitLab",
    targetType: "platform",
    slug: "gitlab",
    href: "https://gitlab.com/sandoz",
  },
  {
    targetName: "EPFL",
    targetType: "website",
    slug: "epfl",
    href: "https://epfl.ch",
  },
  {
    targetName: "Liip",
    targetType: "website",
    slug: "liip",
    href: "https://liip.ch",
    hasColourSchemeAltIcon: true,
  },
  {
    targetName: "Nothing",
    targetType: "website",
    slug: "nothing",
    href: "https://nothing.ch",
  },
  {
    targetName: "Peerdom",
    targetType: "website",
    slug: "peerdom",
    href: "https://peerdom.ch",
  },
]);
</script>

<i18n lang="json">
{
  "en": {
    "title": "Technology",
    "figure": {
      "altText": "David representing Nothing at the Forum EPFL in 2016.",
      "caption": "Presenting Nothing during the Forum EPFL in 2016."
    }
  },
  "fr": {
    "title": "Technologie",
    "figure": {
      "altText": "David représentant Nothing au Forum EPFL en 2016.",
      "caption": "En train de présenter Nothing durant le Forum EPFL en 2016."
    }
  }
}
</i18n>
