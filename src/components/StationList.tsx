import StationCard from "./StationCard";

const mockStations = [
  {
    name: "Downtown Power Hub",
    address: "123 Main St, Downtown",
    distance: "0.5 mi",
    available: 4,
    total: 8,
    chargerTypes: ["CCS", "CHAdeMO"],
    pricing: "$0.35/kWh",
    fastCharge: true,
  },
  {
    name: "City Center Charging",
    address: "456 Oak Ave, City Center",
    distance: "1.2 mi",
    available: 2,
    total: 6,
    chargerTypes: ["Type 2", "CCS"],
    pricing: "$0.30/kWh",
    fastCharge: true,
  },
  {
    name: "Mall Parking EV Station",
    address: "789 Shopping Blvd",
    distance: "2.1 mi",
    available: 6,
    total: 10,
    chargerTypes: ["Type 2"],
    pricing: "$0.25/kWh",
    fastCharge: false,
  },
  {
    name: "Highway Rest Stop",
    address: "Highway 101, Exit 45",
    distance: "3.5 mi",
    available: 0,
    total: 4,
    chargerTypes: ["CCS", "CHAdeMO"],
    pricing: "$0.40/kWh",
    fastCharge: true,
  },
  {
    name: "Business District Station",
    address: "321 Corporate Dr",
    distance: "4.2 mi",
    available: 5,
    total: 8,
    chargerTypes: ["Type 2", "CCS"],
    pricing: "$0.32/kWh",
    fastCharge: true,
  },
  {
    name: "Airport Charging Hub",
    address: "Airport Terminal 2",
    distance: "5.8 mi",
    available: 8,
    total: 12,
    chargerTypes: ["CCS", "Type 2"],
    pricing: "$0.38/kWh",
    fastCharge: true,
  },
];

const StationList = () => {
  return (
    <section id="stations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Nearby <span className="bg-gradient-primary bg-clip-text text-transparent">Charging Stations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect charging station for your needs. Real-time availability and pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockStations.map((station, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <StationCard {...station} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StationList;
