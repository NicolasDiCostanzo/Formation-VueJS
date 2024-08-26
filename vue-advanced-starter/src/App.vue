<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
// import AppNotifications from './components/AppNotifications.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <RouterView v-slot="{ Component }">
      <Suspense :timeout="0">
        <component :is="Component" />
        <template #fallback>
          <BaseLoading />
        </template>
      </Suspense>
    </RouterView>

    <!-- <AppNotifications /> -->
  </div>
</template>
