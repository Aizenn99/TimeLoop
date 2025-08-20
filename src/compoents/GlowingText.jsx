import { motion } from "framer-motion";

const GlowingTitle = ({ children }) => {
  return (
    <motion.span
      initial={{ textShadow: "0 0 5px #ffffff" }}
      animate={{
        textShadow: [
          "0 0 5px #ffffff",
          "0 0 10px #ffffff, 0 0 20px #ffffff",
          "0 0 15px #ffffff, 0 0 30px #ffffff",
          "0 0 10px #ffffff, 0 0 20px #ffffff",
          "0 0 5px #ffffff",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="text-white font-bold text-2xl md:text-3xl cursor-pointer"
    >
      {children}
    </motion.span>
  );
};

export default GlowingTitle;
