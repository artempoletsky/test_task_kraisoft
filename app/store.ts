import { createStore, useStoreUntyped } from "@artempoletsky/easystore";


export const Store = createStore({
  gameSpawnMode: false,
});


export function useStore<KeyT extends keyof typeof Store>(key: KeyT) {
  return useStoreUntyped<typeof Store, KeyT>(key);
}