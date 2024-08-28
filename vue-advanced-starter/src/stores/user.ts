import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useSessionStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { fetchWithThrow, useAsyncFn } from '@/util/async'
import type { User } from '@/util/types'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  //   const currentUser = ref<User | null>(null)

  // keep the user logged in even after refresh
  const currentUser = useSessionStorage<User | null>('currentUser', null, {
    serializer: {
      read: v => v ? JSON.parse(v) : null,
      write: JSON.stringify,
    },
  })

  async function login(username: string, password: string) {
    const [users]: Array<User> = await fetchWithThrow(`/api/users?username=${username}&password=${password}`).then(res => res.json())

    if (!users) {
      throw new Error('Wrong username or password')
    }

    currentUser.value = users
    router.replace({ name: 'home' })
    // try {
    //   await fetchWithThrow(`/api/users?username=${username}&password=${password}`).then(res => res.json())
    // }
    // catch (e) {
    // }
  }

  const loginOperation = useAsyncFn(login)

  async function logout() {
    currentUser.value = null
    router.replace({ name: 'home' })
  }

  const logoutOperation = useAsyncFn(logout)

  function isLoggedIn() {
    return !!currentUser.value
  }

  return {
    currentUser,
    loginOperation,
    logoutOperation,
    isLoggedIn,
  }
})
