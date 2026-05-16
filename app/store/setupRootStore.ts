import { applySnapshot, IDisposer, onSnapshot } from "mobx-state-tree"

import { RootStoreInstanceModel, RootStoreSnapshotModel } from "@/store/RootStore"
import { pe } from "@/utils/log"
import * as storage from "@/utils/storage"

const ROOT_STATE_STORAGE_KEY = "root-state"

let _disposer: IDisposer | undefined

export async function setupRootStore(rootStore: RootStoreInstanceModel) {
  let restoredState: RootStoreSnapshotModel | undefined | null

  try {
    restoredState = ((await storage.load(ROOT_STATE_STORAGE_KEY)) ?? {}) as RootStoreSnapshotModel
    applySnapshot(rootStore, restoredState)
  } catch (e) {
    pe(e)
  }

  const isAlreadySetUp = _disposer !== undefined
  if (isAlreadySetUp) _disposer!()

  _disposer = onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

  const unsubscribe = () => {
    _disposer?.()
    _disposer = undefined
  }

  return { rootStore, restoredState, unsubscribe }
}
