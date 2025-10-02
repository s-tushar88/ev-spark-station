import { Button } from "@/components/ui/button";
import { MapPin, Zap, Clock } from "lucide-react";
import heroImage from "@/assets/hero-charging.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="EV Charging Station"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 shadow-card">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">10,000+ Charging Stations</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Power Your Journey
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Charge Anywhere
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Find, navigate to, and start charging at thousands of EV stations across the country.
            Fast, reliable, and always available.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow text-lg px-8 py-6"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Find Stations Near You
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-secondary"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mx-auto mb-3">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Charging Stations</div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-accent mx-auto mb-3">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
