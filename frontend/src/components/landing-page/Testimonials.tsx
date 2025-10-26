// components/landingPage/Testimonials.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { cubicBezier } from "motion";
import { useRef } from "react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  const testimonials = [
    {
      quote:
        "AgroGuide helped me increase my yield by 30% last season. The weather forecasts are always accurate and the market prices help me sell at the right time.",
      name: "Kwame Osei",
      role: "Rice Farmer, Ashanti Region",
    },
    {
      quote:
        "As a young farmer, I needed guidance. AgroGuide's daily tips and crop tracking features have been invaluable in helping me learn and improve.",
      name: "Ama Mensah",
      role: "Vegetable Farmer, Savelugu Northern Region",
    },
    {
      quote:
        "The historical insights showed me patterns I never noticed before. Now I plan my planting seasons better and waste less resources.",
      name: "Kofi Asante",
      role: "Maize Farmer, Eastern Region",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              ease: cubicBezier(0.22, 1, 0.36, 1),
            }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Trusted By Local Farmers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: cubicBezier(0.22, 1, 0.36, 1),
            }}
            className="text-xl text-muted-foreground"
          >
            See how AgroGuide is helping farmers grow smarter
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Card className="group relative h-full bg-background border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Decorative gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={
                        isInView
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -180 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + index * 0.2,
                        ease: cubicBezier(0.22, 1, 0.36, 1),
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 },
                      }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    >
                      <Quote className="h-6 w-6 text-primary" />
                    </motion.div>

                    <CardDescription className="text-base text-foreground leading-relaxed">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.6 + index * 0.2,
                        }}
                      >
                        &quot;{testimonial.quote}&quot;
                      </motion.span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.7 + index * 0.2,
                        ease: cubicBezier(0.22, 1, 0.36, 1),
                      }}
                    >
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {testimonial.role}
                      </p>
                    </motion.div>

                    {/* Decorative accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.2,
                        ease: cubicBezier(0.22, 1, 0.36, 1),
                      }}
                      className="h-1 w-12 bg-primary/20 rounded-full mt-4 origin-left"
                    />
                  </CardContent>

                  {/* Subtle corner decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
