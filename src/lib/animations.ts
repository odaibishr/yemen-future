import { Variants, Transition } from "motion/react";

export const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const transitionStandard: Transition = {
    duration: 0.6,
    ease: LUXURY_EASE,
};


export const transitionFast: Transition = {
    duration: 0.35,
    ease: LUXURY_EASE,
};


export const fadeInUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
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
            staggerChildren: 0.1,
            delayChildren: 0.05,
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
            staggerChildren: 0.07,
            delayChildren: 0.03,
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
        y: [-3, 3, -3],
        transition: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};