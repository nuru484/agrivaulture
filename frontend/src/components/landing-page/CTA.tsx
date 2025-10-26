// components/landingPage/CTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { cubicBezier } from "motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-white rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Animated Grid Pattern Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] pointer-events-none"
      />

      <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            ease: cubicBezier(0.22, 1, 0.36, 1),
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Join Thousands of Smarter Farmers Today
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: cubicBezier(0.22, 1, 0.36, 1),
          }}
          className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Start making data-driven decisions for your farm. Get weather updates,
          market prices, and expert advice—all in one place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: cubicBezier(0.22, 1, 0.36, 1),
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-2xl hover:shadow-accent/50 transition-all duration-300 group"
            >
              Get Started For Free
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block ml-2"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-6 transition-all duration-300"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: cubicBezier(0.22, 1, 0.36, 1),
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-white/80"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
            <span className="text-sm font-medium">No credit card required</span>
          </motion.div>

          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <motion.svg
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </motion.svg>
            <span className="text-sm font-medium">100% secure & private</span>
          </motion.div>

          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <motion.svg
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </motion.svg>
            <span className="text-sm font-medium">Setup in 2 minutes</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
