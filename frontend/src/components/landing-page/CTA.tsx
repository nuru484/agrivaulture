// components/landingPage/CTA.tsx
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Join Thousands of Smarter Farmers Today
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Start making data-driven decisions for your farm. Get weather updates,
          market prices, and expert advice—all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Get Started For Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8 py-6"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
