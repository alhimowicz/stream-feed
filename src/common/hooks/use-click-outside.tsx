import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement> | RefObject<unknown>, handler: (event: unknown) => void): void => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent): void => {
            if (!ref.current || (ref.current as HTMLElement)?.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};
