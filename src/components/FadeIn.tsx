"use client";

import { motion } from "framer-motion";
import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export function FadeIn({ children, className, style, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
