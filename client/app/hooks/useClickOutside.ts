import { useEffect } from "react";

// 判斷點擊事件是否在該元素外面
export const useClickOutside = (ref_element: any, callback: Function) => {
    useEffect(() => {
      const handleClickOutside = (event: Event) => {
        if (
          ref_element.current &&
          !ref_element.current.contains(event.target as any)
        ) {
          callback();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };