'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from './staticData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => {
    setCurrent((current + 1) % testimonials.length);
  }, [current]);

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, next]);

  return (
    <section
      className="w-full py-12 md:py-16 bg-gradient-to-b from-background to-muted"
      id="testimonials"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            <Quote className="mr-2 h-4 w-4" />
            Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Hear from Our Farmers
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Real experiences from farmers across Ghana who have transformed
            their practices with our platform
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="relative overflow-hidden rounded-xl"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="relative h-full w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute -z-10 -inset-0.5 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-sm opacity-75"></div>
                          <Avatar className="h-20 w-20 border-4 border-background">
                            <AvatarImage
                              src={
                                testimonials[current].avatar ||
                                '/placeholder.svg'
                              }
                              alt={testimonials[current].name}
                            />
                            <AvatarFallback>
                              {testimonials[current].name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 text-center px-6 md:px-12">
                      <div className="relative">
                        <Quote className="absolute -top-6 -left-6 h-12 w-12 text-primary/20" />
                        <blockquote className="text-xl italic relative z-10">
                          &quot;{testimonials[current].quote}&quot;
                        </blockquote>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center pt-6 pb-8">
                      <p className="font-semibold text-lg">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].role}
                      </p>
                    </CardFooter>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-2 md:px-4">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm cursor-pointer"
              onClick={prev}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm cursor-pointer"
              onClick={next}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === current ? 'bg-primary' : 'bg-primary/30'
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
