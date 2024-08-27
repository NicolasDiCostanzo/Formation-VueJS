<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PlanForm from '@/components/PlanForm.vue'
import type { Plan } from '@/util/types'

const newPlan = ref<Pick<Plan, 'name' | 'description'>>({
  name: '',
  description: '',
})

const router = useRouter()

async function createPlan() {
  const result = await fetch('/api/plans', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...newPlan.value,
      userId: 'cat',
    }),
  })
  const data = await result.json()
  router.push({
    name: 'plans',
    params: {
      id: data.id,
    },
  })

  return result
}
</script>

<template>
  <div class="w-full max-w-[800px] mx-auto p-6 flex flex-col gap-6">
    <h1 class="text-4xl text-primary-500">
      New Plan
    </h1>

    <PlanForm
      v-model:name="newPlan.name"
      v-model:description="newPlan.description"
      @submit="createPlan()"
    />
  </div>
</template>
