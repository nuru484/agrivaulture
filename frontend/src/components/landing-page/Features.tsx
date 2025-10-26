// components/landingPage/FeaturesSection.tsx
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

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Everything You Need to Farm Smarter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access critical information that helps you plan better and grow more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card hover:-translate-y-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <CloudRain className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl">Real-Time Weather</CardTitle>
              <CardDescription className="text-base">
                Stay ahead with accurate forecasts and weather alerts tailored
                to your location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-accent" />
                  <span>7-day weather forecast</span>
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-accent" />
                  <span>Rainfall predictions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CloudRain className="h-4 w-4 text-accent" />
                  <span>Storm warnings</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card hover:-translate-y-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <DollarSign className="h-7 w-7 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Market Prices</CardTitle>
              <CardDescription className="text-base">
                Know the latest commodity prices to sell at the right time for
                maximum profit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span>Live market updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-accent" />
                  <span>Price trends & analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-accent" />
                  <span>Best selling times</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Calendar className="h-7 w-7 text-accent" />
              </div>
              <CardTitle className="text-2xl">Crop Cycle Tracking</CardTitle>
              <CardDescription className="text-base">
                Track planting, growth, and harvest cycles with smart
                predictions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Sprout className="h-4 w-4 text-accent" />
                  <span>Planting schedules</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>Growth stage tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span>Harvest predictions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
