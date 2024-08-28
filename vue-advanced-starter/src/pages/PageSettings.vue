<script lang="ts" setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

function logout() {
  userStore.logoutOperation.run()
}
</script>

<template>
  <div class="w-full max-w-[800px] mx-auto p-6 flex flex-col gap-6">
    <h1 class="text-4xl text-primary-500">
      Settings
    </h1>

    <div>
      <BaseButton @click="logout()">
        <IconLucideLogOut />
        Logout
      </BaseButton>
    </div>
  </div>
</template>
