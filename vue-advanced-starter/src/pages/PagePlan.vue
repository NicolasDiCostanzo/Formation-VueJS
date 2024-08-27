<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Plan } from '@/util/types'
import { fetchWithThrow, useAsyncFn } from '@/util/async'
import { wait } from '@/util/time'

const router = useRouter()

const route = useRoute()
const plan = ref<Plan>()
plan.value = await fetch(`/api/plans/${route.params.id}`).then(r => r.json())

async function updatePlan() {
  await wait(1000)
  const result = await fetchWithThrow(`/api/plans/${plan.value!.id}`, {
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

const { loading, error, run } = useAsyncFn(updatePlan)
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
      :error
      :loading
      @submit="run()"
    />
  </div>
</template>
