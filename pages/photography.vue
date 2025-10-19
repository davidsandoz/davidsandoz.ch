<template>
  <h2>{{ t("title") }}</h2>

  <DsFigure
    :slug="figures[0].slug"
    :caption="t(`figures.${figures[0].slug}.caption`)"
    :photographer="figures[0].photographer"
  />

  <ContentRenderer v-if="data" :value="data" tag="section" />

  <DsLinkIconList :linkIcons="linkIcons" />

  <DsFigure
    v-for="figure in figures.slice(1)"
    :slug="figure.slug"
    :caption="t(`figures.${figure.slug}.caption`)"
    :photographer="figure.photographer"
  />
</template>

<script lang="ts" setup>
import type { LinkIcon } from "~/components/ds-link-icon.vue";

const { t, locale } = useI18n({ useScope: "local" });

defineI18nRoute({
  paths: {
    en: "/photography",
    fr: "/photographie",
  },
});

const { data } = await useAsyncData(() => queryCollection("content").path(`/${locale.value}/photography`).first());

const linkIcons = ref<LinkIcon[]>([
  {
    targetName: "Flickr",
    targetType: "platform",
    slug: "flickr",
    href: "https://flickr.com/davidsandoz",
  },
  {
    targetName: "500px",
    targetType: "platform",
    slug: "500px",
    href: "https://500px.com/davidsandoz",
    hasColourSchemeAltIcon: true,
  },
  {
    targetName: "Pixelfed",
    targetType: "platform",
    slug: "pixelfed",
    href: "https://pixelfed.ch/sandoz",
    hasColourSchemeAltIcon: true,
    isSvg: true,
  },
  {
    targetName: "Instagram",
    targetType: "platform",
    slug: "instagram",
    href: "https://instagram.com/davidsandoz",
  },
]);

const figures = ref([
  { slug: "sunset_keywest", photographer: "David Sandoz" },
  { slug: "gecko_maranjab", photographer: "David Sandoz" },
  { slug: "londoneye", photographer: "David Sandoz" },
  { slug: "socquette", photographer: "David Sandoz" },
  { slug: "lamppost_prague", photographer: "David Sandoz" },
  { slug: "david_maranjab", photographer: "Pascal Sandoz" },
  { slug: "tchoukball_wtc2023", photographer: "David Sandoz" },
  { slug: "tchoukball_wtc2019", photographer: "David Sandoz" },
  { slug: "tchoukball_etc2018", photographer: "David Sandoz" },
  { slug: "tchoukball_wtc2011", photographer: "David Sandoz" },
]);
</script>

<i18n lang="json">
{
  "en": {
    "title": "Photography",
    "figures": {
      "sunset_keywest": {
        "caption": "The sunset from Key West, Florida, USA"
      },
      "gecko_maranjab": {
        "caption": "A small lizard of the Maranjab desert in Iran"
      },
      "londoneye": {
        "caption": "The London Eye"
      },
      "socquette": {
        "caption": "The mouth of Socquette"
      },
      "lamppost_prague": {
        "caption": "A lamppost in Prague at sunset"
      },
      "david_maranjab": {
        "caption": "Me taking a photograph in the Maranjab desert in Iran"
      },
      "tchoukball_wtc2023": {
        "caption": "2023, Switzerland becomes world tchoukball champion in Prague, Czech Republic"
      },
      "tchoukball_wtc2019": {
        "caption": "Semi-final for the fifth place of the 2019 world tchoukball championships in Nilai, Malaysia"
      },
      "tchoukball_etc2018": {
        "caption": "Semi-final of the 2018 european tchoukball championships in Castellanza, Italy"
      },
      "tchoukball_wtc2011": {
        "caption": "Final of the 2011 world tchoukball championships in Ferrara, Italy"
      }
    }
  },
  "fr": {
    "title": "Photographie",
    "figures": {
      "sunset_keywest": {
        "caption": "Coucher du soleil à Key West en Floride aux États-Unis"
      },
      "gecko_maranjab": {
        "caption": "Un petit lézard du désert de Maranjab en Iran"
      },
      "londoneye": {
        "caption": "Le London Eye"
      },
      "socquette": {
        "caption": "La gueule de Socquette"
      },
      "lamppost_prague": {
        "caption": "Un lampadaire à Prague au coucher du soleil"
      },
      "david_maranjab": {
        "caption": "Moi prenant une photo dans le desert de Maranjab en Iran"
      },
      "tchoukball_wtc2023": {
        "caption": "2023, la Suisse devient championne du monde de tchoukball, à Prague en République tchèque"
      },
      "tchoukball_wtc2019": {
        "caption": "Demi-finale pour la cinquième place des championnats du monde de tchoukball 2019 à Nilai, Malaisie"
      },
      "tchoukball_etc2018": {
        "caption": "Demi-finale des championnats d'Europe de tchoukball 2018 à Castellanza, Italie"
      },
      "tchoukball_wtc2011": {
        "caption": "Finale des champinonnats du monde de tchoukball 2011 à Ferrara, Italie"
      }
    }
  }
}
</i18n>
