<script lang="ts" setup>
import { onMounted, ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<{
  label: string
  textarea?: boolean
  required: boolean
  maxLength?: number
  autofocus?: boolean
}>()

const modelValue = defineModel<string>({ required: true })

const randomId = `input-${Math.round(Math.random() * 10000)}`
const inputEl = ref<HTMLInputElement | HTMLTextAreaElement | null>(null)

if (props.autofocus) {
  onMounted(() => {
    inputEl.value?.focus()
    inputEl.value?.select()
  })
}
</script>

<template>
  <div
    class="flex flex-col gap-1" v-bind="{
      style: $attrs.style,
      class: $attrs.class,
    }"
  >
    <label :for="randomId">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <component
      :is="textarea ? 'textarea' : 'input'"
      v-bind="{
        ...$attrs,
        style: undefined,
        class: undefined,
      }"
      :id="randomId"
      ref="inputEl"
      :required
      :value="modelValue"
      class="border border-gray-300 rounded p-2 focus:border-primary-500 outline-none"
      :max-length
      @input="modelValue = $event.target.value"
    />
  </div>
</template>
