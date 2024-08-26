<script lang="ts" setup>
import { computed } from 'vue'

// TODO
const props = defineProps<{
  to?: string
  href?: string
}>()

const loading = false // TODO Turn into a prop

const Kind = computed(() => {
  if (props.to && props.href) {
    throw new Error('You can only use one of `to` or `href`')
  }
  if (props.to)
    return 'router-link'
  if (props.href)
    return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="Kind"
    v-bind="{
      to,
      href,
    }"
    class="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white rounded relative cursor-pointer"
    :disabled="loading"
  >
    <BaseLoading v-if="loading" class="absolute inset-0" />
    <span
      class="flex items-center justify-center gap-2"
      :class="{
        'opacity-0': loading,
      }"
    >
      <slot />
    </span>
  </component>
</template>
