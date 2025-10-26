// components/landingPage/HistoricalInsights.tsx
"use client";

import Image from "next/image";
import { BarChart3, TrendingUp, Lightbulb } from "lucide-react";

const HistoricalInsights = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">
                Data-Driven Insights
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Learn From Your
              <br />
              <span className="text-primary">Farming History</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              AgroGuide analyzes your past farming records to provide
              personalized guidance. See patterns in your yields, understand
              what works best for your land, and make data-backed decisions for
              future seasons.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Yield Predictions
                  </h3>
                  <p className="text-muted-foreground">
                    Forecast your harvest based on historical data and current
                    conditions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Performance Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Track your farm&apos;s productivity over time and identify
                    improvements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Smart Recommendations
                  </h3>
                  <p className="text-muted-foreground">
                    Get personalized tips based on your unique farming patterns
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-50" />

            <div className="relative rounded-2xl shadow-2xl overflow-hidden w-full">
              <Image
                src="/data-insights.jpg"
                alt="Farm Analytics Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalInsights;
