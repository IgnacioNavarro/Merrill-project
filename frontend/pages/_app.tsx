import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useEffect, useRef } from "react";

const variants: Variants = {
  hidden: { opacity: 0.2, x: 0, scale: 0.9 },
  enter: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 1, x: -400, transition: { duration: 0.2 } },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear", }} // Set the transition to linear
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
