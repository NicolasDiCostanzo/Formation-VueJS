export interface User {
  id: string
  username: string
  password: string
}

export interface Plan {
  id: string
  name: string
  description: string
  userId: string
}

export interface AppNotification {
  id: number
  message: string
  type: 'success' | 'error'
  icon?: any
}
