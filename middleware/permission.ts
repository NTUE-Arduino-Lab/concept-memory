import { usePermissionStore } from '@/stores/permission'
import { usePostersStore } from '@/stores/posters'


export default defineNuxtRouteMiddleware((to, from) => {
  const postersStore = usePostersStore()
  let permission = null

  if (process.client)
    permission = JSON.parse(localStorage.getItem('permission'))

  if (process.client && permission && !permission.isEnter) {
    return navigateTo('/')
  }
})