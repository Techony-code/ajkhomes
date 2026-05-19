const locations = [
  {
    id: 1,
    name: "Agbidingbi Akinyele Moniya Ibadan (White Home City)",
    properties: "24 Properties",
    coords: "6.4698,3.5852",
  },
  {
    id: 2,
    name: "Ipeyin Ade Sagamu ( Green Home Garden)",
    properties: "18 Properties",
    coords: "9.0765,7.3986",
  },
  {
    id: 3,
    name: "VIbefun, Ijebu Ode Back of Baptist Primary School ( Royal Garden)",
    properties: "12 Properties",
    coords: "6.4281,3.4219",
  },
  {
    id: 4,
    name: "Ikoyi",
    properties: "15 Properties",
    coords: "6.4523,3.4358",
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-24 bg-white dark:bg-darkBg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-accent">
            Our Property Locations
          </h2>
          <p className="mt-4 text-gray-600 dark:text-darkText/70">
            Strategic locations across prime real estate zones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {locations.map((location) => {
            const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${location.coords}&zoom=14&size=600x400&markers=${location.coords},green`;

            return (
              <div
                key={location.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg
                transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Map Background */}
                <img
                  src={mapUrl}
                  alt={location.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/70 dark:bg-darkBg/80 group-hover:bg-primary/60 transition duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-8 text-white h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">
                    {location.name}
                  </h3>

                  <p className="mb-4 text-white/80">
                    {location.properties}
                  </p>

                  <button className="bg-white text-primary dark:bg-accent dark:text-darkBg
                    px-4 py-2 rounded-lg font-medium
                    hover:scale-105 active:scale-95
                    transition-all duration-300 w-fit">
                    View Area
                  </button>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Properties;