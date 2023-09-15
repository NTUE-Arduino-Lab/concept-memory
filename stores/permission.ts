import { defineStore } from 'pinia'

interface State {
  isEnter: boolean;
}

export const usePermissionStore = defineStore('permission', {
  state: () : State => ({
    isEnter: false,
  }),
  actions: {
    setPermission() : void {
      this.isEnter = true
    }
  }
})