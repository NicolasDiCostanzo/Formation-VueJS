<script lang="ts" setup>
// TODO

const randomId = `input-${Math.round(Math.random() * 10000)}`
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="randomId">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :id="randomId"
      ref="inputEl"
      class="border border-gray-300 rounded p-2 focus:border-primary-500 outline-none"
    />
  </div>
</template>
