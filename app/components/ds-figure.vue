<template>
  <figure class="c-figure">
    <img
      class="c-figure__image"
      :src="`/images/${props.slug}.jpg`"
      :alt="props.altText || props.caption"
      :srcset="`/images/${props.slug}@2x.jpg 2x`"
    />
    <figcaption>
      <span>{{ props.caption }}</span>
      <span class="c-figure__photographer-credit">📸 {{ props.photographer }}</span>
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: undefined,
  },
  caption: {
    type: String,
    required: true,
  },
  photographer: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.c-figure__image {
  width: calc(100% + var(--main-side-padding) + var(--main-side-padding));
  margin-left: calc(-1 * var(--main-side-padding));
  transition: width 0.25s, margin-left 0.25s, border-radius 0.25s;
}

.c-figure {
  margin: 60px 0;
}

.c-figure figcaption {
  margin-top: 5px;
  font-size: 1rem;
  line-height: 1.2rem;
}
.c-figure figcaption > *:first-child {
  margin-right: 10px;
}

.c-figure__photographer-credit {
  color: var(--color-photographer-credit-foreground);
  white-space: nowrap;
}

@media (min-width: 600px) {
  .c-figure__image {
    width: 100%;
    margin-left: 0;
    border-radius: 0 min(5vw, 30px) 0 min(5vw, 30px);
  }

  .c-figure figcaption {
    font-size: 1.1rem;
    line-height: 1.4rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>
