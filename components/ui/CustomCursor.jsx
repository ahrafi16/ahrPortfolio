"use client";
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 }); // Target position
    const cursorPos = useRef({ x: 0, y: 0 }); // Current animated position

    useEffect(() => {
        // 1. Track actual mouse position
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // 2. The Animation Loop
        const animate = () => {
            // Damping factor (0.1 = slow/lazy, 0.3 = snappier)
            const ease = 0.15;

            // Linear Interpolation (lerp) to create the delay
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * ease;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * ease;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
            style={{ left: 0, top: 0 }}
        >
            {/* Outer Circle */}
            <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                {/* Inner Dot */}
                <div className="w-1 h-1 bg-white rounded-full" />
            </div>
        </div>
    );
};

export default CustomCursor;