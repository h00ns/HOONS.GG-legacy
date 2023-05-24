import { RefObject, useEffect } from 'react';

export default function useHandleOutsideClick(refArray: RefObject<HTMLElement>[], func: () => void) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideClick = refArray.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });
      if (isOutsideClick) {
        func();
      }
    };
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [refArray, func]);
}
