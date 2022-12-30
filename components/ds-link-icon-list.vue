<template>
  <ul
    class="u-unstyled-list c-link-icon-list"
    :class="{ 'c-link-icon-list--small': props.small, 'c-link-icon-list--greyscale': props.greyscale }"
  >
    <li v-for="linkIcon in props.linkIcons" class="c-link-icon-list__item">
      <DsLinkIcon :link-icon="linkIcon" class="c-link-icon-list__icon" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { LinkIcon } from "~/components/ds-link-icon.vue";

const props = defineProps({
  linkIcons: {
    type: Array as PropType<LinkIcon[]>,
    required: true,
  },
  small: Boolean,
  greyscale: Boolean,
});
</script>

<style>
.c-link-icon-list {
  width: 100%;
  text-align: center;
}

.c-link-icon-list__item {
  display: inline-block;
  margin: 0.7em;
}

.c-link-icon-list--small .c-link-icon-list__item {
  width: 24px;
  margin: 0 7px;
}

.c-link-icon-list--small .c-link-icon-list__icon img {
  width: 100%;
}

.c-link-icon-list--greyscale .c-link-icon-list__icon {
  filter: grayscale(100%);
  transition: filter 0.5s;
}

.c-link-icon-list--greyscale .c-link-icon-list__icon:hover {
  filter: none;
}
</style>
