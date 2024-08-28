import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AppNotification } from '@/util/types.js'

export const useNotificationStore = defineStore('notification', () => {
  let id = 0

  const notifications = ref<Array<AppNotification>>([])

  function notify(notification: Omit<AppNotification, 'id'>) {
    const finalNotification = {
      id: id++,
      ...notification,
    }
    notifications.value.push(finalNotification)

    setTimeout(() => {
      close(finalNotification)
    }, 5000)
  }

  function close(notification: AppNotification) {
    const index = notifications.value.indexOf(notification)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }

  return {
    notifications,
    notify,
    close,
  }
})
