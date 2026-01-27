import { motion } from "framer-motion";

export interface MemoryCardProps {
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
  isWrong: boolean;
  isGameComplete: boolean;
  onClick: () => void;
}

export const MemoryCard = ({
  icon,
  isFlipped,
  isMatched,
  isWrong,
  isGameComplete,
  onClick,
}: MemoryCardProps) => {
  const targetRotation = isGameComplete ? 540 : isFlipped ? 180 : 0;
  const spinTransition = isGameComplete
    ? { duration: 2, ease: "easeInOut" }
    : { duration: 0.6, ease: "easeInOut" };
  return (
    <div
      className={`aspect-square w-20 sm:w-28 md:w-32 lg:w-36 ${
        isMatched ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      style={{ perspective: "1000px" }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: targetRotation }}
        transition={spinTransition}
      >
        <motion.div
          className={`absolute inset-0 bg-amber-200 rounded-md p-1 flex items-center justify-center transition-colors duration-300 drop-shadow-sm/40 border-4 border-amber-200 ${
            !isMatched && !isFlipped ? "hover:bg-amber-300 hover:border-amber-300" : ""
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="/src/assets/question-icon.png"
            alt="Memory Card"
            className="p-1 w-17 h-17 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-30 lg:h-30"
          />
        </motion.div>
        <motion.div
          className={`absolute inset-0 rounded-md p-1 drop-shadow-sm/40 flex items-center justify-center ${
            isMatched
              ? "bg-amber-300 opacity-90 border-4 border-green-600"
              : isWrong
                ? "bg-amber-200 border-4 border-red-500"
                : "bg-amber-200"
          }`}
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
          animate={isWrong || isMatched ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <img
            src={icon}
            alt="Memory Card"
            className={`w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 ${
              isMatched ? "opacity-60" : ""
            }`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
