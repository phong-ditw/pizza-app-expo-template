import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AppSettingStateModel = types
  .model({
    appName: types.maybe(types.string),
  })
  .views((store) => ({
    get appLabel() {
      return store.appName ?? ""
    },
  }))
  .actions((store) => ({
    setAppLabel(value: string) {
      store.appName = value
    },
  }))

export interface AppSettingInstanceModel extends Instance<typeof AppSettingStateModel> {}
export interface AppSettingSnapshotModel extends SnapshotOut<typeof AppSettingStateModel> {}
