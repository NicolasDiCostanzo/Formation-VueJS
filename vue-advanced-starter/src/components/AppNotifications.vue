<script lang="ts" setup>
import AppNotification from './AppNotification.vue'
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 pointer-events-none p-2">
    <div class="w-full max-w-[500px] mx-auto pointer-events-auto flex flex-col gap-2">
      <AppNotification
        v-for="notification in notificationStore.notifications"
        :key="notification.id"
        :notification
        @close="notificationStore.close(notification)"
      />
    </div>
  </div>
</template>
