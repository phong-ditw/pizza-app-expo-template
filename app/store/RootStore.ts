import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { AppSettingStateModel } from "@/store/AppSetting"

export const RootStoreStateModel = types.model({
  appSetting: types.optional(AppSettingStateModel, {}),
})

export interface RootStoreInstanceModel extends Instance<typeof RootStoreStateModel> {}
export interface RootStoreSnapshotModel extends SnapshotOut<typeof RootStoreStateModel> {}
