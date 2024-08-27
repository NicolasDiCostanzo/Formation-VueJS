import { ref } from 'vue'

export function useAsyncFn<T extends (...args: any[]) => Promise<any>>(fn: T) {
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const run = async (...args: Parameters<T>) => {
    loading.value = true
    error.value = null

    try {
      return await fn(...args)
    }
    catch (e: any) {
      error.value = e
      throw e
    }
    finally {
      loading.value = false
    }
  }
  return {
    loading,
    error,
    run,
  }
}

/**
 * wraps an async function to track if response is ok
 * @param params
 * @returns
 */
export async function fetchWithThrow(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response
}
