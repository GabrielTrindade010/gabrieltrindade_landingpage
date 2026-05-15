"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps
  extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand-primary text-black hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]",

    outline:
      "border border-white/20 text-white hover:bg-white/5",

    ghost:
      "text-white/70 hover:text-white",
  };

  const content = (
    <>
      <span className="relative z-10">
        {children}
      </span>

      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    >
      {content}
    </motion.button>
  );
};