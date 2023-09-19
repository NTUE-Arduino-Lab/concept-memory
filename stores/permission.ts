import { defineStore } from 'pinia'

interface State {
  isEnter: boolean
}

export const usePermissionStore = defineStore('permission', {
  state: () : State => ({
    isEnter: false
  }),
  actions: {
    setPermission(value: boolean) : void {
      this.isEnter = value
    }
  },
  persist: {
    storage: persistedState.localStorage,
  }
})