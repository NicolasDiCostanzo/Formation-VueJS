<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Plan } from '@/util/types'

defineProps<{
  error: string | null
}>()

const router = useRouter()

const route = useRoute()
const plan = ref<Plan>()
plan.value = await fetch(`/api/plans/${route.params.id}`).then(r => r.json())

async function updatePlan() {
  const result = await fetch(`/api/plans/${plan.value!.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plan.value),
  }).then(r => r.json())
  plan.value = result

  router.push({
    name: 'plans',
    params: {
      id: plan.value?.id,
    },
  })
}
</script>

<template>
  <div class="w-full max-w-[800px] mx-auto p-6 flex flex-col gap-6">
    <h1 class="text-4xl text-primary-500">
      Edit Plan
    </h1>

    <PlanForm
      v-if="plan"
      v-model:name="plan.name"
      v-model:description="plan.description"
      @submit="updatePlan()"
    />
    <BaseError
      v-else
      :error
    />
  </div>
</template>
