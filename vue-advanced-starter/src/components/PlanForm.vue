<script lang="ts" setup>
defineProps<{
  error?: Error | string | null
  loading?: boolean
}>()

defineEmits<{
  submit: []
}>()

const name = defineModel<string>('name', { required: true })
const description = defineModel<string>('description', { required: true })
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent="$emit('submit')">
    <BaseInput
      v-model="name"
      required
      label="Name"
      maxlength="50"
      placeholder="My plan's name"
    />

    <BaseInput
      v-model="description"
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
