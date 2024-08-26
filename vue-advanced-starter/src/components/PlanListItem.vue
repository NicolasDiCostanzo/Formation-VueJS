<script lang="ts" setup>
// TODO
</script>

<template>
  <RouterLink
    class="flex items-center gap-2 p-2 rounded-lg border border-gray-100 hover:bg-gray-100"
  >
    <div class="flex items-center justify-center p-2 rounded-full bg-primary-50 text-primary-700">
      <IconLucideMap />
    </div>
    <div class="flex flex-col items-stretch flex-1 leading-snug">
      <div>
        {{ plan.name }}
      </div>
      <div class="opacity-50 truncate text-sm">
        {{ plan.description }}
      </div>
    </div>
  </RouterLink>
</template>
