// components/landingPage/DailyTips.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Sprout, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { cubicBezier } from "motion";
import { useRef } from "react";

const DailyTips = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  const tips = [
    {
      icon: Sprout,
      title: "Planting Tips",
      description:
        "Learn the best times to plant different crops based on season and soil conditions",
      iconColor: "text-primary",
      iconBg: "bg-primary/10 group-hover:bg-primary/20",
    },
    {
      icon: Users,
      title: "Pest Control",
      description:
        "Natural and effective methods to protect your crops from common pests and diseases",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10 group-hover:bg-secondary/20",
    },
    {
      icon: TrendingUp,
      title: "Nutrient Planning",
      description:
        "Optimize your soil health with proper fertilization and nutrient management strategies",
      iconColor: "text-accent",
      iconBg: "bg-accent/10 group-hover:bg-accent/20",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto max-w-5xl text-center space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{
              duration: 0.6,
              ease: cubicBezier(0.22, 1, 0.36, 1),
            }}
            className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full"
          >
            <Lightbulb className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">Expert Knowledge</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: cubicBezier(0.22, 1, 0.36, 1),
            }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Daily Farming Tips & Advice
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: cubicBezier(0.22, 1, 0.36, 1),
            }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Receive practical advice from agricultural experts delivered
            straight to your dashboard
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <Card className="group text-left h-full transition-all duration-300 border-border/50 bg-card hover:shadow-lg hover:border-primary/30">
                    <CardHeader>
                      <motion.div
                        className={`w-12 h-12 rounded-full ${tip.iconBg} flex items-center justify-center mb-3 transition-colors`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Icon className={`h-6 w-6 ${tip.iconColor}`} />
                      </motion.div>
                      <CardTitle className="text-xl text-card-foreground">
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DailyTips;
