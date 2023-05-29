
import { RefObject, useEffect, useState } from "react";

type UseInfiniteScrollProperties = {
  readonly ref: RefObject<Element>;
  readonly options?: UseInfiniteScrollOptions;
  readonly callback: () => void;
};

type UseInfiniteScrollOptions = {
  readonly threshold: number;
};

const CHECK_WINDOW = typeof window !== 'undefined';

// Intersection Observer를 활용한 무한스크롤 hook
export const useInfiniteScroll = ({ ref, callback, options = { threshold: 0 } }: UseInfiniteScrollProperties) => {
  const handleInfiniteScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  }
  
  const [observer] = useState(() => (CHECK_WINDOW ? new IntersectionObserver(handleInfiniteScroll, options) : undefined));
  useEffect(() => {
    if (!observer) return
    
      if (ref.current) {
        observer?.observe(ref?.current);
      }
      return () => observer?.disconnect();
  }, [observer, ref]);
}