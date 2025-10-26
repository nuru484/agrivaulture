// components/landingPage/Testimonials.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trusted By Local Farmers
          </h2>
          <p className="text-xl text-muted-foreground">
            See how AgroGuide is helping farmers grow smarter
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-background border-border/50 hover:shadow-lg transition-all">
            <CardHeader>
              <Quote className="h-8 w-8 text-primary mb-4" />
              <CardDescription className="text-base text-foreground leading-relaxed">
                &quot;AgroGuide helped me increase my yield by 30% last season.
                The weather forecasts are always accurate and the market prices
                help me sell at the right time.&quot;
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-foreground">Kwame Osei</p>
              <p className="text-sm text-muted-foreground">
                Rice Farmer, Ashanti Region
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border/50 hover:shadow-lg transition-all">
            <CardHeader>
              <Quote className="h-8 w-8 text-primary mb-4" />
              <CardDescription className="text-base text-foreground leading-relaxed">
                &quot;As a young farmer, I needed guidance. Agrivaulture&apos;s
                daily tips and crop tracking features have been invaluable in
                helping me learn and improve.&quot;
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-foreground">Ama Mensah</p>
              <p className="text-sm text-muted-foreground">
                Vegetable Farmer, Savelugu Northern Region
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border/50 hover:shadow-lg transition-all">
            <CardHeader>
              <Quote className="h-8 w-8 text-primary mb-4" />
              <CardDescription className="text-base text-foreground leading-relaxed">
                &quot;The historical insights showed me patterns I never noticed
                before. Now I plan my planting seasons better and waste less
                resources.&quot;
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-foreground">Kofi Asante</p>
              <p className="text-sm text-muted-foreground">
                Maize Farmer, Eastern Region
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
