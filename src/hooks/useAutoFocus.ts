import { useEffect, useRef } from "react";

export function useAutoFocus<T extends HTMLElement>(trigger?: unknown) {

  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [trigger]);

  return ref;
}