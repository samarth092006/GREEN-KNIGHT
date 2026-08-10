"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "500+", "98%", "3.4x", "$4.2M"
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract prefix, numeric value, and suffix
    const match = value.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
    if (!match) {
      requestAnimationFrame(() => setDisplayValue(value));
      return;
    }

    const prefix = match[1] || "";
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isFloat = match[2].includes(".");
    const duration = 1500; // ms
    const steps = 40;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentNumber = targetNumber * easedProgress;

      if (currentStep >= steps) {
        setDisplayValue(`${prefix}${isFloat ? targetNumber.toFixed(1) : Math.round(targetNumber)}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayValue(
          `${prefix}${isFloat ? currentNumber.toFixed(1) : Math.round(currentNumber)}${suffix}`
        );
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
