import { createContext, useContext, useEffect, useState } from "react"

import { RootStoreInstanceModel, RootStoreStateModel } from "@/store/RootStore"
import { setupRootStore } from "@/store/setupRootStore"

const _rootStore = RootStoreStateModel.create({})

const RootStoreContext = createContext<RootStoreInstanceModel>(_rootStore)

// open root store to all screen by hook
export const useStores = () => useContext(RootStoreContext)

// setup root store by hook
export const useInitialRootStore = (callback?: () => void | Promise<void>) => {
  const rootStore = useStores()
  const [rootStoreReady, setRootStoreReady] = useState(false)

  useEffect(() => {
    let _unsubscribe: () => void | undefined
    ;(async () => {
      const { unsubscribe } = await setupRootStore(rootStore)
      _unsubscribe = unsubscribe

      // setup reactotron
      if (__DEV__) {
        // @ts-ignore
        console.tron.trackMstNode(rootStore)
      }

      setRootStoreReady(true)
      callback?.()
    })()

    return () => _unsubscribe?.()
  }, [])

  return { rootStore, rootStoreReady }
}
