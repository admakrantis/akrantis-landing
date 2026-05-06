"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedUnderlineTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedUnderlineText({
  children,
  className,
}: AnimatedUnderlineTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <span ref={ref} className={cn("relative inline-block pb-1.5", className)}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-[3px] rounded-full bg-slate-950"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : { width: "0%" }}
        transition={{
          duration: 0.75,
          delay: 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </span>
  );
}
