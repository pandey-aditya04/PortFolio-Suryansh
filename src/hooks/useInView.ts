"use client";

import { useInView as useInViewObserver } from "react-intersection-observer";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.2, triggerOnce = true, rootMargin = "0px" } = options;

  const { ref, inView, entry } = useInViewObserver({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return { ref, inView, entry };
}
