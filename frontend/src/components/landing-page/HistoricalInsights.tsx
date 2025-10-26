// components/landingPage/HistoricalInsights.tsx
"use client";

import Image from "next/image";
import { BarChart3, TrendingUp, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { cubicBezier } from "motion";
import { useRef } from "react";

const HistoricalInsights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const insights = [
    {
      icon: TrendingUp,
      title: "Yield Predictions",
      description:
        "Forecast your harvest based on historical data and current conditions",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track your farm's productivity over time and identify improvements",
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description:
        "Get personalized tips based on your unique farming patterns",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 0.6,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
            >
              <BarChart3 className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">
                Data-Driven Insights
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            >
              Learn From Your
              <br />
              <span className="text-primary">Farming History</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              AgroGuide analyzes your past farming records to provide
              personalized guidance. See patterns in your yields, understand
              what works best for your land, and make data-backed decisions for
              future seasons.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4 pt-4"
            >
              {insights.map((insight, index) => {
                const Icon = insight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {insight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 0.5, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 1.2,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotateY: 0 }
                  : { opacity: 0, scale: 0.95, rotateY: -10 }
              }
              transition={{
                duration: 1,
                delay: 0.2,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative rounded-2xl shadow-2xl overflow-hidden w-full border border-border/50"
            >
              <Image
                src="/data-insights.jpg"
                alt="Farm Analytics Dashboard showing historical insights and data trends"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating accent elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalInsights;
