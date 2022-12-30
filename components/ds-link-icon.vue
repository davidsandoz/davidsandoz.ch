<template>
  <NuxtLink :to="props.linkIcon.href" :title="title" rel="me">
    <img
      :src="src"
      :alt="altText"
      :srcset="srcSet"
      :class="{ 'l-light-only': props.linkIcon.hasColourSchemeAltIcon }"
    />
    <img
      v-if="props.linkIcon.hasColourSchemeAltIcon"
      :src="srcLight"
      :alt="altText"
      :srcset="srcSetLight"
      class="l-dark-only"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

export interface LinkIcon {
  targetName: string;
  targetType: "platform" | "website";
  slug: string;
  href: string;
  hasColourSchemeAltIcon?: boolean;
}

const { t } = useI18n();

const props = defineProps({
  linkIcon: {
    type: Object as PropType<LinkIcon>,
    required: true,
  },
});

const src = computed(() => {
  return `/icons/${props.linkIcon.slug}.png`;
});
const srcLight = computed(() => {
  return `/icons/${props.linkIcon.slug}-light.png`;
});
const srcSet = computed(() => {
  return `/icons/${props.linkIcon.slug}@2x.png 2x`;
});
const srcSetLight = computed(() => {
  return `/icons/${props.linkIcon.slug}-light@2x.png 2x`;
});
const title = computed(() => {
  switch (props.linkIcon.targetType) {
    case "platform":
      return t("linkIcon.davidAccountOf", { name: props.linkIcon.targetName });
    case "website":
      return t("linkIcon.websiteOf", { name: props.linkIcon.targetName });
  }
});
const altText = computed(() => {
  return t("linkIcon.logoOf", { name: props.linkIcon.targetName });
});
</script>
