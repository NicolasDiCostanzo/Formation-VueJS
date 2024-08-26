<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  window.history.pushState({}, '', '/')
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800">
        404
      </h1>
      <p class="text-gray-600">
        Page not found
      </p>
      <RouterLink :to="{ name: 'home' }">
        Go back home 1
      </RouterLink>

      <a href="/" @click.prevent="goHome">
        Go back home 2
      </a>
    </div>
  </div>
</template>
