
import { RefObject, useEffect, useState } from "react";

type UseInfiniteScrollProperties = {
  readonly ref: RefObject<Element>;
  readonly options?: UseInfiniteScrollOptions;
  readonly callback: () => void;
};

type UseInfiniteScrollOptions = {
  readonly threshold: number;
};

// Intersection Observer를 활용한 무한스크롤 hook
export const useInfiniteScroll = ({ ref, callback, options = { threshold: 0 } }: UseInfiniteScrollProperties) => {
  const handleInfiniteScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  }

  const [observer] = useState(new IntersectionObserver(handleInfiniteScroll, options));
  useEffect(() => {
    if (!observer) return
    
      if (ref.current) {
        observer?.observe(ref?.current);
      }
      return () => observer?.disconnect();
  }, [observer, ref]);
}