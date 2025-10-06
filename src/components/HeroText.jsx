import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Scalable", "Modern"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-20 mt-20 text-center md:mt-40 md:text-left rounded-3xl">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium text-secondary drop-shadow-2xl"
          style={{
            textShadow:
              "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(59,130,246,0.4)",
          }}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I&apos;m Robert
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-white drop-shadow-2xl"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.2)",
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Software Engineer <br /> & Tech Lead Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-secondary text-8xl drop-shadow-2xl"
              style={{
                textShadow:
                  "3px 3px 6px rgba(0,0,0,0.9), 0 0 30px rgba(59,130,246,0.5)",
              }}
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-white drop-shadow-2xl"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.2)",
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Fintech Solutions
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium text-white drop-shadow-2xl"
          style={{
            textShadow:
              "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)",
          }}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m Robert
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-white drop-shadow-2xl"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.2)",
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-secondary text-7xl drop-shadow-2xl"
              style={{
                textShadow:
                  "3px 3px 6px rgba(0,0,0,0.9), 0 0 25px rgba(59,130,246,0.5)",
              }}
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-white drop-shadow-2xl"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.2)",
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Fintech Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
