"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const wordVariants = {
  hidden: { opacity: 0.25, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export default function LanguageText({ text, className }: { text: string; className?: string }) {
  const { lang } = useLanguage();
  const reduceMotion = useReducedMotion();
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const parts = text.split(/(\s+)/);

  return (
    <motion.span
      key={lang}
      className={className}
      initial={hasMounted.current && !reduceMotion ? "hidden" : false}
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.026 } },
      }}
    >
      {parts.map((part, index) => part.trim() ? (
        <motion.span
          key={`${index}-${part}`}
          className="inline-block"
          variants={wordVariants}
          transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.16, 1, 0.3, 1] }}
        >
          {part}
        </motion.span>
      ) : part)}
    </motion.span>
  );
}
