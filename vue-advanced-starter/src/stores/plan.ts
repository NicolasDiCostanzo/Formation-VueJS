import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchWithThrow, useAsyncFn } from '@/util/async'
import type { Plan } from '@/util/types'
import { wait } from '@/util/time'

const apiRoute = '/api/plans'

export const usePlanStore = defineStore('plan', () => {
  const plans = ref<Plan[]>([])

  async function fetchPlans() {
    // await wait(1000)
    if (plans.value.length) {
      return
    }
    plans.value = await fetchWithThrow(apiRoute).then(res => res.json())
  }

  async function createPlan(newPlan: Pick<Plan, 'name' | 'description'>) {
    // await wait(1000)
    const result = await fetchWithThrow(apiRoute, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newPlan,
        userId: 'cat',
      }),
    }).then(res => res.json())

    const plan = result as Plan

    if (plans.value.length) {
      plans.value.push(plan)
    }

    return plan
  }

  const createPlanOperation = useAsyncFn(createPlan)

  async function updatePlan(plan: Plan) {
    // await wait(250)
    const result = await fetchWithThrow(`/api/plans/${plan.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plan),
    }).then(r => r.json())

    const index = plans.value.findIndex(p => p.id === plan.id)

    if (index !== -1) {
      plans.value.splice(index, 1, plan)
    }

    return result
  }

  const updatePlanOperation = useAsyncFn(updatePlan)

  async function deletePlan(id: string) {
    // await wait(1000)
    await fetchWithThrow(`/api/plans/${id}`, {
      method: 'DELETE',
    })

    const index = plans.value.findIndex(p => p.id === id)

    if (index !== -1) {
      plans.value.splice(index, 1)
    }
  }

  const deletePlanOperation = useAsyncFn(deletePlan)

  return {
    plans,
    createPlanOperation,
    updatePlanOperation,
    deletePlanOperation,
    fetchPlans,
  }
})
