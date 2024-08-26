<script lang="ts" setup>
// TODO

const loading = false // TODO Turn into a prop
</script>

<template>
  <button
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
  </button>
</template>
