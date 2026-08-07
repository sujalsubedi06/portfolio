import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

/**
 * Tracks the pointer position in viewport coordinates.
 * Used by CursorGlow and any subtle parallax elements.
 */
export function useMousePosition(): Position {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return position;
}
