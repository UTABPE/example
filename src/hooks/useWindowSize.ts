import { useEffect, useState } from 'react';

export type WindowSize = {
  height?: number;
  width?: number;
};

/**
 * Listens for window resize events and returns width & height of window.
 *
 * @returns WindowSize
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
