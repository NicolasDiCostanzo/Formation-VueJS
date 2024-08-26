<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
defineProps<{
  label: string
  textarea?: boolean
  required: boolean
  maxLength?: number
}>()

const modelValue = defineModel<string>({ required: true })

const randomId = `input-${Math.round(Math.random() * 10000)}`
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
      :required
      :value="modelValue"
      class="border border-gray-300 rounded p-2 focus:border-primary-500 outline-none"
      :max-length
      @input="modelValue = $event.target.value"
    />
  </div>
</template>
