<script lang="ts" setup>
import { useMagicKeys } from '@vueuse/core'
import { ref, watch } from 'vue'

defineProps<{
  error?: Error | string | null
  loading?: boolean
}>()

const emit = defineEmits<{
  submit: []
}>()

const name = defineModel<string>('name', { required: true })
const description = defineModel<string>('description', { required: true })

const { meta, ctrl, enter } = useMagicKeys()
const formEl = ref<HTMLFormElement>()

watch(enter, () => {
  if ((meta.value || ctrl.value) && enter.value && formEl) {
    emit('submit')
  }
})
</script>

<template>
  <form ref="formEl" class="flex flex-col gap-6" @submit.prevent="$emit('submit')">
    <BaseInput
      v-model="name"
      required
      label="Name"
      maxlength="50"
      placeholder="My plan's name"
      autofocus
    />

    <BaseInput
      v-model="description"
      required
      label="Description"
      textarea
      maxlength="200"
    />

    <div class="flex items-center gap-6 [&>*]:flex-1">
      <slot name="submit-button">
        <BaseButton type="submit" :loading="loading">
          <slot name="submit-label">
            Submit
          </slot>
        </BaseButton>
      </slot>
      <slot name="delete-button">
        <BaseButton type="submit" :loading="loading">
          <slot name="delete-label">
            Delete
          </slot>
        </BaseButton>
      </slot>
    </div>

    <BaseError :error="error" />
  </form>
</template>
