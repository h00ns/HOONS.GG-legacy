import { RefObject, useEffect } from 'react';

export default function useHandleOutsideClickAction(refArray: RefObject<HTMLElement>[], callback: () => void) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideClick = refArray.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });
      if (isOutsideClick) {
        callback();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [refArray, callback]);
}
