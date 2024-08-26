<script lang="ts" setup>
import type { AppNotification } from '@/util/types'
// TODO
</script>

<template>
  <div
    class="flex items-center gap-2 px-4 py-2 rounded-lg border relative cursor-pointer"
    :class="{
      'bg-green-50 text-green-700 border-green-200': notification.type === 'success',
      'bg-red-50 text-red-700 border-red-200': notification.type === 'error',
    }"
  >
    <div
      class="absolute top-0 left-0 w-full h-1 rounded-t-lg overflow-hidden"
    >
      <div
        class="h-full notif-progress"
        :class="{
          'bg-green-300': notification.type === 'success',
          'bg-red-300': notification.type === 'error',
        }"
      />
    </div>

    <!-- TODO Icon here -->
    <div>
      {{ notification.message }}
    </div>
  </div>
</template>

<style scoped>
.notif-progress {
  animation: notif-progress 5s linear;
}

@keyframes notif-progress {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>
