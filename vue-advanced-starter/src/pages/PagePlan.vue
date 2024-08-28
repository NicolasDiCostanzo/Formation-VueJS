<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PlanForm from '@/components/PlanForm.vue'
import type { Plan } from '@/util/types'
import { usePlanStore } from '@/stores/plan'

const router = useRouter()
const route = useRoute()
const plan = ref<Plan>()

plan.value = await fetch(`/api/plans/${route.params.id}`).then(r => r.json())

const planStore = usePlanStore()

async function updatePlan() {
  await planStore.updatePlanOperation.run(plan.value!)

  router.push({
    name: 'plans',
    params: {
      id: plan.value?.id,
    },
  })
}

async function deletePlan() {
  await planStore.deletePlanOperation.run(plan.value!.id)

  router.push({
    name: 'plans',
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
      :loading="planStore.updatePlanOperation.loading"
      :error="planStore.updatePlanOperation.error ?? planStore.deletePlanOperation.error"
      @submit="updatePlan"
    >
      <template #submit-button>
        <BaseButton type="submit" :loading="planStore.updatePlanOperation.loading">
          <IconLucideCheck />
          Save changes
        </BaseButton>
      </template>
      <template #delete-button>
        <BaseButton
          type="button" :loading="planStore.deletePlanOperation.loading"
          @click="deletePlan"
        >
          <IconLucideTrash />
          Delete
        </BaseButton>
      </template>
    </PlanForm>
  </div>
</template>
