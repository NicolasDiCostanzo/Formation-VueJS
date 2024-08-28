<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PlanForm from '@/components/PlanForm.vue'
import type { Plan } from '@/util/types'
import { usePlanStore } from '@/stores/plan'

const newPlan = ref<Pick<Plan, 'name' | 'description'>>({
  name: '',
  description: '',
})

const router = useRouter()
const planStore = usePlanStore()

async function createPlan(): Promise<void> {
  await planStore.createPlanOperation.run(newPlan.value)
  router.push({
    name: 'plans',
  })
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
      @submit="createPlan"
    >
      <template #submit-button>
        <BaseButton type="submit">
          <IconLucidePlus />
          Create new plan
        </BaseButton>
      </template>
    </PlanForm>
  </div>
</template>
