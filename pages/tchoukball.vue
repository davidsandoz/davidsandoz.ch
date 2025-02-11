<template>
  <h2>{{ t("title") }}</h2>

  <DsFigure
    :slug="figures[0].slug"
    :altText="t(`figures.${figures[0].slug}.altText`)"
    :caption="t(`figures.${figures[0].slug}.caption`)"
    :photographer="figures[0].photographer"
  />

  <ContentRenderer v-if="data" :value="data" tag="section" />

  <DsLinkIconList :linkIcons="linkIcons" />

  <DsFigure
    v-for="figure in figures.slice(1)"
    :slug="figure.slug"
    :altText="t(`figures.${figure.slug}.altText`)"
    :caption="t(`figures.${figure.slug}.caption`)"
    :photographer="figure.photographer"
  />
</template>

<script lang="ts" setup>
import type { LinkIcon } from "~/components/ds-link-icon.vue";

const { t, locale } = useI18n({ useScope: "local" });

const { data } = await useAsyncData(() => queryCollection("content").path(`/${locale.value}/tchoukball`).first());

const linkIcons = ref<LinkIcon[]>([
  {
    targetName: "Swiss Tchoukball",
    targetType: "website",
    slug: "swisstchoukball",
    href: "https://tchoukball.ch",
  },
  {
    targetName: "Lausanne Tchoukball Club",
    targetType: "website",
    slug: "ltbc",
    href: "https://ltbc.ch",
    hasColourSchemeAltIcon: true,
  },
]);

const figures = ref([
  { slug: "tchoukball_lausanne", photographer: "Lucie Courtois" },
  { slug: "tchoukball_bern", photographer: "Samantha Urbina" },
  { slug: "tchoukball_nyon", photographer: "Raquel Pedro" },
  { slug: "tchoukball_cdf", photographer: "David Rossetti" },
  { slug: "tchoukball_swissteam", photographer: "Mathieu Carnal" },
]);
</script>

<i18n lang="json">
{
  "en": {
    "title": "Tchoukball",
    "figures": {
      "tchoukball_lausanne": {
        "altText": "David playing tchoukball in defence in the Lausanne Olympic team",
        "caption": "Playing with Lausanne during the 2019 Swiss Cup."
      },
      "tchoukball_bern": {
        "altText": "David about to shoot on a tchoukball frame, playing with Bern",
        "caption": "I played with Bern from 2015 to 2018. Here during their tournament in 2016."
      },
      "tchoukball_nyon": {
        "altText": "David doing a pass, playing with Nyon",
        "caption": "During my studies, from 2009 to 2015, I played with Nyon. Here during the 2015 Swiss Cup."
      },
      "tchoukball_cdf": {
        "altText": "David shooting on a tchoukball frame, playing with La Chaux-de-Fonds",
        "caption": "I started playing in 2004 at La Chaux-de-Fonds. Here during the European Winners' Cup in 2009."
      },
      "tchoukball_swissteam": {
        "altText": "David about to shoot, playing on sand with the Swiss national team in front of a crowded audience",
        "caption": "I played in the Swiss national squad from 2007 to 2010. Here in 2008 during the Rimini beach tournament."
      }
    }
  },
  "fr": {
    "title": "Tchoukball",
    "figures": {
      "tchoukball_lausanne": {
        "altText": "David jouant au tchoukball en défense dans l'équipe Lausanne Olympic",
        "caption": "Jouant avec Lausanne durant la Coupe suisse 2019"
      },
      "tchoukball_bern": {
        "altText": "David sur le point de tirer sur un cadre de tchoukball, jouant avec Berne",
        "caption": "J'ai joué à Berne de 2015 à 2018. Ici durant leur tournoi en 2016."
      },
      "tchoukball_nyon": {
        "altText": "David faisant un passe, jouant avec Nyon",
        "caption": "Durant mes études, de 2009 à 2015, J'ai joué à Nyon. Ici durant la Coupe suisse 2015."
      },
      "tchoukball_cdf": {
        "altText": "David tirant sur un cadre de tchoukball, jouant avec La Chaux-de-Fonds",
        "caption": "J'ai commencé à jouer en 2004 à La Chaux-de-Fonds. Ici durant la European Winners' Cup de 2009."
      },
      "tchoukball_swissteam": {
        "altText": "David en train de tirer, jouant sur sable avec l'équipe suisse devant un public nombreux",
        "caption": "J'ai joué au sein du cadre national de 2007 à 2009. Ici en 2008 durant le tournoi de beach de Rimini."
      }
    }
  }
}
</i18n>
