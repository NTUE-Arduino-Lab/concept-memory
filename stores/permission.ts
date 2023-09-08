import { defineStore } from 'pinia'

interface State {
  enterCode: string;
  isEnter: boolean;
}

export const usePermissionStore = defineStore('permission', {
  state: () : State => ({
    enterCode: "a",
    isEnter: false,
  }),
  actions: {
    setPermission() : void {
      this.isEnter = true
    }
  },
  getters: {
    // enterCode: (state) : string => state.enterCode
  }
})