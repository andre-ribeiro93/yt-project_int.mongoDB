import { useEffect, useState, type RefObject } from "react";

export function useScrollButtons<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>
) {

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {

    const el = ref.current;
    if (!el) return;

    const update = () => {
      const atStart = el.scrollLeft === 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      setShowLeft(!atStart);
      setShowRight(!atEnd);
    }

    update();

    const onScroll = () => requestAnimationFrame(update);

    el.addEventListener('scroll', onScroll);

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
    }
  }, [ref]);

  return { showLeft, showRight };
}
