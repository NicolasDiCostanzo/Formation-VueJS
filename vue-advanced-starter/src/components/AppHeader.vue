<script lang="ts" setup>
// TODO
</script>

<template>
  <header class="flex border-b border-gray-100">
    <RouterLink to="/" class="p-2 inline-flex items-center gap-1" exact-active-class="text-primary-500">
      <IconLucidePencilRuler />
      Home
    </RouterLink>

    <RouterLink to="/plans" class="p-2 inline-flex items-center gap-1" active-class="text-primary-500">
      My Plans
    </RouterLink>
    <BaseButton to="/plans/new" class="!px-2 !py-1 inline-flex items-center gap-1 mx-2 my-auto">
      <IconLucidePlus />
      New Plan
    </BaseButton>

    <div class="flex-1" />

    <!-- <RouterLink to="/settings" class="p-2 inline-flex items-center gap-1" active-class="text-primary-500">
      <IconLucideUserCog />
      my name here
    </RouterLink> -->
    <RouterLink to="/login" class="p-2 inline-flex items-center gap-1">
      <IconLucideLogIn />
      Login
    </RouterLink>
  </header>
</template>
