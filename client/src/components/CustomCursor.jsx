import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with a fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.onclick ||
          target.closest('a') ||
          target.closest('button'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp trailing ring
  useEffect(() => {
    let animFrame;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animFrame = requestAnimationFrame(lerp);
    };
    animFrame = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Trailing Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 border border-cyan-400/60 bg-cyan-500/10 backdrop-blur-[1px] ${
          isPointer ? 'w-12 h-12 border-indigo-400 bg-indigo-500/20 scale-125' : 'w-9 h-9'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          boxShadow: isPointer
            ? '0 0 20px rgba(99, 102, 241, 0.4)'
            : '0 0 15px rgba(6, 182, 212, 0.3)',
        }}
      />

      {/* Center Precision Pointer Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/80"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
