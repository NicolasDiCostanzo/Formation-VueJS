<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useNotificationStore } from '@/stores/notification'

const username = ref('')
const password = ref('')
const route = useRoute()
const router = useRouter()

const user = useUserStore()
const notification = useNotificationStore()

async function login() {
  await user.loginOperation.run(username.value, password.value)
  const routeName = route.query.redirect

  notification.notify({
    message: 'Welcome!',
    type: 'success',
  })

  if (typeof routeName === 'string') {
    router.replace({ name: routeName })
  }
  else {
    router.replace({ name: 'home' })
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center m-2 lg:m-6">
    <form
      class="w-full max-w-[500px] p-6 flex flex-col gap-6 border border-gray-100 rounded-xl"
    >
      <pre>{{ `${username} ${password}` }}</pre>
      <BaseInput
        v-model="username"
        label="Username"
        :textarea="false"
        :required="true"
        :max-length="50"
      />

      <BaseInput
        v-model="password"
        label="Password"
        :textarea="false"
        :required="true"
        :max-length="20"
      />

      <BaseButton type="submit" :loading="user.loginOperation.loading" @click="login">
        <IconLucideCheck />
        Login
      </BaseButton>

      <BaseError :error="user.loginOperation.error" />
    </form>
  </div>
</template>
