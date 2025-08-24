import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "../constants";



const Carousel = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prev]) => [
      (prev + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  return (
    <div className="flex justify-center items-center bg-customGray">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        className="p-2 rounded-full hover:bg-customPurple/20 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={32} color="white" className="cursor-pointer" />
      </motion.button>

      <div className="relative w-[1080px] h-[460px] overflow-hidden mx-4">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full font-poppins font-semibold md:text-2xl bg-customPurple rounded-xl flex items-center justify-center text-center px-8"
          >
            {testimonials[index].text}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        className="p-2 rounded-full hover:bg-customPurple/20 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight size={32} color="white" className="cursor-pointer" />
      </motion.button>
    </div>
  );
};

export default Carousel;
