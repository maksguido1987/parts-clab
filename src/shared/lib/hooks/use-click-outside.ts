import { useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void) => {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlerOutsideClick = (event: MouseEvent) => {
      if (
        domNode.current &&
        !domNode.current.contains(event.target as HTMLDivElement)
      ) {
        handler();
      }
    };

    document.addEventListener('mousedown', handlerOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handlerOutsideClick);
    };
  }, [domNode, handler]);
  return domNode;
};
