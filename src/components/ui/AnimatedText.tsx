"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  animation?: "word" | "character";
}

export function AnimatedText({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.05,
  animation = "word",
}: AnimatedTextProps) {
  const items = animation === "word" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const child = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("flex flex-wrap", className)}
      aria-label={text}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {Tag === "h1" || Tag === "h2" || Tag === "h3" ? (
            <Tag className={className}>
              {animation === "word" ? (
                <>{item}&nbsp;</>
              ) : item === " " ? (
                <>&nbsp;</>
              ) : (
                item
              )}
            </Tag>
          ) : (
            <>
              {animation === "word" ? (
                <>{item}&nbsp;</>
              ) : item === " " ? (
                <>&nbsp;</>
              ) : (
                item
              )}
            </>
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* Simpler variant for scroll-triggered text reveals */
export function RevealText({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.65, 0, 0.35, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
