import { useState } from "react";
import { motion } from "framer-motion";

export interface MemoryCardProps {
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
  isWrong: boolean;
  onClick: () => void;
}

export const MemoryCard = ({
  icon,
  isFlipped,
  isMatched,
  isWrong,
  onClick,
}: MemoryCardProps) => {
  return (
    <div
      className={`w-25 h-25 ${isMatched ? "cursor-not-allowed" : "cursor-pointer"}`}
      style={{ perspective: "1000px" }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className={`absolute inset-0 bg-amber-200 rounded-md p-1 flex items-center justify-center transition-colors duration-300 ${
            !isMatched && !isFlipped ? "hover:bg-amber-300" : ""
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="/src/assets/question-icon.png"
            alt="Memory Card"
            width={80}
            height={80}
            className="p-2"
          />
        </motion.div>
        <motion.div
          className={`absolute inset-0 rounded-md p-1 flex items-center justify-center ${
            isMatched
              ? "bg-amber-300 opacity-90 border-4 border-green-600"
              : isWrong
                ? "bg-amber-200 border-4 border-red-500"
                : "bg-amber-200"
          }`}
          style={{
            backfaceVisibility: "hidden",
            rotateY: 180,
          }}
          animate={isWrong ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <img
            src={icon}
            alt="Memory Card"
            width={80}
            height={80}
            className={isMatched ? "opacity-60" : ""}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
