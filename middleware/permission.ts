import { usePermissionStore } from '@/stores/permission'

export default defineNuxtRouteMiddleware((to, from) => {
    const permissionStore = usePermissionStore()

    if(!permissionStore.isEnter) {
      return navigateTo('/')
    }
})