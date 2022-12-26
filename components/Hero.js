import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
      <motion.div
        initial={{ y: 0, x: -100, opacity: 0, scale: 1 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        Front&mdash;end
      </motion.div>
      <div className="heroDescription">
        <motion.div
          initial={{ y: 0, x: 100, opacity: 0, scale: 1 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="title subTitle"
        >
          Developer
        </motion.div>
        <motion.div
          initial={{ x: 100, y: 0, opacity: 0, scale: 1 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="heroAbout"
        >
          <span>ABOUT</span>
          <p>
            I am a developer based in Mumbai, India focused on creating
            interactive digital experiences on the web, working with brands and
            industry leaders such as Bayer, Bristol Myers Squibb, Intercept, and
            ROKiT Games amongst others to achieve this.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className="scrolldown"
      >
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
