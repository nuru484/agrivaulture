// components/landingPage/FeaturesSection.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cloud,
  TrendingUp,
  Calendar,
  Sun,
  CloudRain,
  DollarSign,
  BarChart3,
  Sprout,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { cubicBezier } from "motion";
import { useRef } from "react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const features = [
    {
      icon: CloudRain,
      title: "Real-Time Weather",
      description:
        "Stay ahead with accurate forecasts and weather alerts tailored to your location",
      iconBg: "bg-primary/10 group-hover:bg-primary/20",
      iconColor: "text-primary",
      items: [
        { icon: Sun, text: "7-day weather forecast" },
        { icon: Cloud, text: "Rainfall predictions" },
        { icon: CloudRain, text: "Storm warnings" },
      ],
    },
    {
      icon: DollarSign,
      title: "Market Prices",
      description:
        "Know the latest commodity prices to sell at the right time for maximum profit",
      iconBg: "bg-secondary/10 group-hover:bg-secondary/20",
      iconColor: "text-secondary",
      items: [
        { icon: TrendingUp, text: "Live market updates" },
        { icon: BarChart3, text: "Price trends & analysis" },
        { icon: DollarSign, text: "Best selling times" },
      ],
    },
    {
      icon: Calendar,
      title: "Crop Cycle Tracking",
      description:
        "Track planting, growth, and harvest cycles with smart predictions",
      iconBg: "bg-accent/10 group-hover:bg-accent/20",
      iconColor: "text-accent",
      items: [
        { icon: Sprout, text: "Planting schedules" },
        { icon: Calendar, text: "Growth stage tracking" },
        { icon: TrendingUp, text: "Harvest predictions" },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Everything You Need to Farm Smarter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access critical information that helps you plan better and grow more
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="group h-full transition-all duration-300 border-border/50 bg-card hover:shadow-card hover:border-primary/30">
                  <CardHeader>
                    <motion.div
                      className={`w-14 h-14 rounded-full ${feature.iconBg} flex items-center justify-center mb-4 transition-colors`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Icon className={`h-7 w-7 ${feature.iconColor}`} />
                    </motion.div>
                    <CardTitle className="text-2xl text-card-foreground">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -10 }
                            }
                            transition={{
                              duration: 0.4,
                              delay: 0.6 + index * 0.15 + itemIndex * 0.1,
                              ease: "easeOut",
                            }}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <ItemIcon className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{item.text}</span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
