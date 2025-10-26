// components/landingPage/DailyTips.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Sprout, Users, TrendingUp } from "lucide-react";

const DailyTips = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-5xl text-center space-y-12">
        <div className="space-y-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
            <Lightbulb className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">Expert Knowledge</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Daily Farming Tips & Advice
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Receive practical advice from agricultural experts delivered
            straight to your dashboard
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-left hover:shadow-lg transition-all bg-card border-border/50">
            <CardHeader>
              <Sprout className="h-10 w-10 text-primary mb-3" />
              <CardTitle>Planting Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn the best times to plant different crops based on season
                and soil conditions
              </p>
            </CardContent>
          </Card>

          <Card className="text-left hover:shadow-lg transition-all bg-card border-border/50">
            <CardHeader>
              <Users className="h-10 w-10 text-secondary mb-3" />
              <CardTitle>Pest Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Natural and effective methods to protect your crops from common
                pests and diseases
              </p>
            </CardContent>
          </Card>

          <Card className="text-left hover:shadow-lg transition-all bg-card border-border/50">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-accent mb-3" />
              <CardTitle>Nutrient Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Optimize your soil health with proper fertilization and nutrient
                management strategies
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DailyTips;
