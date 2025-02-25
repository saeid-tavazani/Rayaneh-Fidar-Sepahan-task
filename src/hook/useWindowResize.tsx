import { useEffect, useState } from 'react';

interface WindowSizeState {
  width: number;
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const getBreakpoint = (width: number): WindowSizeState['breakpoint'] => {
  if (width < 768) return 'sm';
  if (width < 1024) return 'md';
  if (width < 1280) return 'lg';
  if (width < 1536) return 'xl';
  return '2xl';
};

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeState>(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 0;
    return { width, breakpoint: getBreakpoint(width) };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = getBreakpoint(width);
      setWindowSize(prev => (prev.width === width ? prev : { width, breakpoint }));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowSize,
    isSm: windowSize.breakpoint === 'sm',
    isMd: windowSize.breakpoint === 'md',
    isLg: windowSize.breakpoint === 'lg',
    isXl: windowSize.breakpoint === 'xl',
    is2xl: windowSize.breakpoint === '2xl',
  };
};

export default useWindowResize;
