<script lang="ts" setup>
defineProps<{
  error?: Error | string | null
}>()
</script>

<template>
  <div
    v-if="error"
    class="error text-red-700 bg-red-50 border border-red-100 rounded p-2 flex gap-2"
  >
    <IconLucideCircleAlert class="relative top-0.5" />
    <div>
      {{ (error as Error).message ?? error }}
    </div>
  </div>
</template>
