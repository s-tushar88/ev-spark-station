import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Clock, Navigation, DollarSign } from "lucide-react";

interface StationCardProps {
  name: string;
  address: string;
  distance: string;
  available: number;
  total: number;
  chargerTypes: string[];
  pricing: string;
  fastCharge?: boolean;
}

const StationCard = ({
  name,
  address,
  distance,
  available,
  total,
  chargerTypes,
  pricing,
  fastCharge = false,
}: StationCardProps) => {
  const availabilityColor = available > 3 ? "bg-success" : available > 0 ? "bg-yellow-500" : "bg-destructive";

  return (
    <Card className="hover:shadow-glow transition-shadow border-border bg-card">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                {address}
              </div>
            </div>
            {fastCharge && (
              <Badge className="bg-gradient-primary text-primary-foreground border-0">
                <Zap className="w-3 h-3 mr-1" />
                Fast
              </Badge>
            )}
          </div>

          {/* Availability */}
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${availabilityColor} animate-pulse-glow`} />
            <span className="text-sm font-medium text-foreground">
              {available} of {total} available
            </span>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-border">
            <div className="flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{distance}</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{pricing}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{chargerTypes.join(", ")}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Button className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity">
              <Navigation className="w-4 h-4 mr-2" />
              Navigate
            </Button>
            <Button variant="outline" className="flex-1">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StationCard;
