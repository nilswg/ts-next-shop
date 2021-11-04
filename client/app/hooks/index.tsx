import {
  TypedUseSelectorHook,
  useDispatch as hook_useDispatch,
  useSelector as hook_useSelector,
} from "react-redux";

import type { AppDispatch, AppState } from "../store";

// 不要直接用store.getState(),useSelector會在你store發生改變時重新渲染，省掉"訂閱"部分
export const useDispatch = () => hook_useDispatch<AppDispatch>();

// redux會自動幫我們創建context
export const useSelector: TypedUseSelectorHook<AppState> = hook_useSelector;


export * from "./useClickOutside"
export * from "./useDebouncedInput"
export * from "./useForm"
export * from "./useInterval"
export * from "./useScrollRestoration"