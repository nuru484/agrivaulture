// components/landingPage/Footer.tsx
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { cubicBezier } from "motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.4 + index * 0.1,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    }),
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Blog", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer ref={ref} className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand Column */}
          <motion.div variants={columnVariants} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="flex items-center gap-2"
            >
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Agrivaulture Logo"
                  width={40}
                  height={40}
                />
              </motion.div>
              <span className="text-2xl font-bold">Agrivaulture</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="text-background/70"
            >
              Empowering local farmers with smart technology and data-driven
              insights.
            </motion.p>
          </motion.div>

          {/* Product Column */}
          <motion.div variants={columnVariants}>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="font-semibold text-lg mb-4"
            >
              Product
            </motion.h3>
            <ul className="space-y-2 text-background/70">
              {footerLinks.product.map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.a
                    href={link.href}
                    className="inline-block hover:text-accent transition-colors"
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={columnVariants}>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="font-semibold text-lg mb-4"
            >
              Company
            </motion.h3>
            <ul className="space-y-2 text-background/70">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.a
                    href={link.href}
                    className="inline-block hover:text-accent transition-colors"
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={columnVariants}>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: cubicBezier(0.22, 1, 0.36, 1),
              }}
              className="font-semibold text-lg mb-4"
            >
              Legal
            </motion.h3>
            <ul className="space-y-2 text-background/70">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.a
                    href={link.href}
                    className="inline-block hover:text-accent transition-colors"
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
          }
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: cubicBezier(0.22, 1, 0.36, 1),
          }}
          className="border-t border-background/20 pt-8 text-center text-background/70"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: cubicBezier(0.22, 1, 0.36, 1),
            }}
          >
            &copy; 2025 Agrivaulture. All rights reserved. Built for local
            farmers with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="inline-block text-red-400"
            >
              ❤️
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
