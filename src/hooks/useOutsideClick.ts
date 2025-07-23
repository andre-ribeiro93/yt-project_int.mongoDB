import { useEffect, type RefObject } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void
) {

  useEffect(() => {

    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [ref, callback])
}