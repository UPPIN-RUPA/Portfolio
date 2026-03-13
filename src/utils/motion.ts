import type { TMotion } from "../types";
import { Variants } from "framer-motion";

export const textVariant = () => {
  return {
    hidden: {
      y: -28,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.72,
        ease: "easeOut",
      },
    },
  };
};

export const fadeIn = (
  direction: TMotion["direction"],
  type: TMotion["type"],
  delay: TMotion["delay"],
  duration: TMotion["duration"]
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 48 : direction === "right" ? -48 : 0,
      y: direction === "up" ? 48 : direction === "down" ? -48 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (
  delay: TMotion["delay"],
  duration: TMotion["duration"]
) => {
  return {
    hidden: {
      scale: 0.92,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: TMotion["direction"],
  type: TMotion["type"],
  delay: TMotion["delay"],
  duration: TMotion["duration"]
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};
