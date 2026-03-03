import { useEffect, useRef, useState } from "react";

function easeOut(t: number): number {
  return 1 - (1 - t) ** 3;
}

export function useCountUp(
  target: number,
  duration = 1500,
  _startOnMount = false,
) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasStarted = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOut(progress);
            setCount(Math.round(easedProgress * target));

            if (progress < 1) {
              rafId.current = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          rafId.current = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [target, duration]);

  return { count, ref };
}
