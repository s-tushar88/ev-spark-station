import { MapPin, Zap, Smartphone, CreditCard, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Station Finder",
    description: "Locate nearby charging stations instantly with live availability updates.",
  },
  {
    icon: Zap,
    title: "Fast Charging Support",
    description: "Find DC fast chargers to get back on the road quickly.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Start and stop charging sessions directly from your phone.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Seamless in-app payments with transparent pricing.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access charging stations anytime, anywhere you need them.",
  },
  {
    icon: TrendingUp,
    title: "Usage Analytics",
    description: "Track your charging history and optimize your EV experience.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Charge Smart</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete solution for electric vehicle charging. Simple, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
