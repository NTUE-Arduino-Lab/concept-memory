import { usePermissionStore } from '@/stores/permission'
import { usePostersStore } from '@/stores/posters'


export default defineNuxtRouteMiddleware((to, from) => {
    const permissionStore = usePermissionStore()
    const postersStore = usePostersStore()

    if(!permissionStore.isEnter) {
      return navigateTo('/')
    }
    else if(!postersStore.selfieBase64) {
      return navigateTo('/generator/step/select')
    }
})