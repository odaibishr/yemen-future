import { Variants, Transition } from "motion/react";

export const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Slower, smooth and majestic transitions so animations are clearly visible as users reach them
export const transitionStandard: Transition = {
    duration: 0.95,
    ease: LUXURY_EASE,
};

export const transitionSlow: Transition = {
    duration: 1.2,
    ease: LUXURY_EASE,
};

export const transitionFast: Transition = {
    duration: 0.55,
    ease: LUXURY_EASE,
};

export const fadeInUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitionStandard,
    },
};

export const fadeInVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: transitionStandard,
    },
};

export const staggerContainerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.08,
        },
    },
};

export const fastStaggerContainerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.06,
        },
    },
};

export const buttonTapVariants: Variants = {
    tap: {
        scale: 0.98,
        transition: {
            duration: 0.1,
        },
    },
};

export const ambientFloatingVariants: Variants = {
    animate: {
        y: [-4, 4, -4],
        transition: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Standard viewport threshold ensuring elements don't animate until user actually reaches them
export const inViewThreshold = {
    once: true,
    amount: 0.2,
    margin: "0px 0px -80px 0px",
};