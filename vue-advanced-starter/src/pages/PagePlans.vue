<script lang="ts" setup>
import { usePlanStore } from '@/stores/plan'

const planStore = usePlanStore()
await planStore.fetchPlans()
</script>

<template>
  <div class="w-full max-w-[800px] mx-auto p-6 flex flex-col gap-6">
    <h1 class="text-4xl text-primary-500">
      My Plans
    </h1>

    <BaseEmpty>
      <IconLucideMap class="w-8 h-8 text-gray-300" />
      <div v-if="planStore.plans?.length <= 0">
        No plans found
      </div>
      <BaseButton to="/plans/new">
        <IconLucidePlus />
        Create a Plan
      </BaseButton>
    </BaseEmpty>

    <div class="grid md:grid-cols-2 gap-2">
      <PlanListItem v-for="plan in planStore.plans" :key="plan.id" :plan />
    </div>
  </div>
</template>
