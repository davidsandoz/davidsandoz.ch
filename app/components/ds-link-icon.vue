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
export interface LinkIcon {
  targetName: string;
  targetType: "platform" | "website";
  slug: string;
  href: string;
  hasColourSchemeAltIcon?: boolean;
  isSvg?: boolean;
}

const { t } = useI18n();

const props = defineProps({
  linkIcon: {
    type: Object as PropType<LinkIcon>,
    required: true,
  },
});

const src = computed(() => {
  if (props.linkIcon.isSvg) {
    return `/icons/${props.linkIcon.slug}.svg`;
  }
  return `/icons/${props.linkIcon.slug}.png`;
});
const srcLight = computed(() => {
  if (props.linkIcon.isSvg) {
    return `/icons/${props.linkIcon.slug}-light.svg`;
  }
  return `/icons/${props.linkIcon.slug}-light.png`;
});
const srcSet = computed(() => {
  if (props.linkIcon.isSvg) {
    return undefined;
  }
  return `/icons/${props.linkIcon.slug}@2x.png 2x`;
});
const srcSetLight = computed(() => {
  if (props.linkIcon.isSvg) {
    return undefined;
  }
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
