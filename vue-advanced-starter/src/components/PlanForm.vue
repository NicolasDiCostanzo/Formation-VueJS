<script lang="ts" setup>
import { reactive } from 'vue'

defineProps<{
  error?: Error | string | null
}>()

const temp = reactive({
  name: '',
  description: '',
})
</script>

<template>
  <form class="flex flex-col gap-6">
    <pre> {{ temp }}</pre>
    <BaseInput
      v-model="temp.name"
      required
      label="Name"
      maxlength="50"
      placeholder="My plan's name"
    />

    <BaseInput
      v-model="temp.description"
      required
      label="Description"
      textarea
      maxlength="200"
    />

    <div class="flex items-center gap-6 [&>*]:flex-1">
      <BaseButton type="submit">
        Submit
      </BaseButton>
    </div>

    <BaseError :error />
  </form>
</template>
