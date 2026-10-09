'use client';

import React from "react";
import { ReactLenis } from "lenis/react";

interface SmothScrollProps {
    children: React.ReactNode;
}

export function SmothScroll({ children }: SmothScrollProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.09,
                duration: 1.2,
                smoothWheel: true,
                wheelMultiplier: 1.0,
                touchMultiplier: 1.5,
                autoResize: true,
            }}
        >
            {children}
        </ReactLenis>
    )
}