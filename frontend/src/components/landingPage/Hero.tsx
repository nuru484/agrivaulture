'use client';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import SignupDialog from '@/components/authentication/SignupDialog';
import LoginDialog from '@/components/authentication/LoginDialog';

export default function Hero() {
  return (
    <section className="w-full py-8 md:py-10 overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="flex flex-col justify-center space-y-4 "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Empowering Ghanaian Farmers with Real-Time Agricultural Data
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Access weather updates, market prices, tips, and connect with
              experts — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <LoginDialog
                triggerProps={{
                  size: 'lg',
                }}
              />
              <SignupDialog
                triggerProps={{
                  size: 'lg',
                  variant: 'outline',
                  className: '',
                }}
              />
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full border-2 border-background overflow-hidden"
                  >
                    <Image
                      src={`/profile.jpg`}
                      alt={`profiles of farmers`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Joined by <span className="font-medium">2,000+</span> farmers
                across Ghana
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full overflow-hidden rounded-xl bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/0 z-10"></div>

              <Image
                src="/farmer-image.png"
                alt="Ghanaian farmers using mobile technology"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-2 -right-0 mr-2 bg-background rounded-lg shadow-lg p-2 md:p-4 w-48 z-20">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Real-time updates</p>
                    <p className="text-xs text-muted-foreground">
                      Always stay informed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
