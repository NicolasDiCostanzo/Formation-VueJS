<script setup lang="ts">
import PagePlans from './PagePlans.vue'
</script>

<template>
  <Suspense>
    <PagePlans />
    <template #fallback>
      <BaseLoading />
    </template>
  </Suspense>
</template>
