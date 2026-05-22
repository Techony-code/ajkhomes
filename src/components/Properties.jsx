const locations = [
  {
    id: 1,
    name: "Agbidingbi Akinyele Moniya, Ibadan",
    estate: "White Home City",
    properties: "24 Available Plots",
  },
  {
    id: 2,
    name: "Ipeyin Ade, Sagamu",
    estate: "Green Home Garden",
    properties: "18 Available Plots",
  },
  {
    id: 3,
    name: "Ibefun, Ijebu Ode (Back of Baptist Primary School)",
    estate: "Royal Garden",
    properties: "12 Available Plots",
  },
];

const Properties = () => {
  return (
    <section
      id="properties"
      className="scroll-mt-24 py-24 bg-white dark:bg-darkBg transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-accent">
            Our Property Locations
          </h2>
          <p className="mt-4 text-gray-600 dark:text-darkText/70">
            Strategic estate developments across prime areas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-cream dark:bg-darkCard p-8 rounded-2xl shadow-md
              hover:-translate-y-3 hover:shadow-xl
              transition-all duration-500"
            >

              {/* Estate Name */}
              <h3 className="text-2xl font-bold text-primary dark:text-accent mb-4">
                {location.estate}
              </h3>

              {/* Address */}
              <p className="text-gray-700 dark:text-darkText mb-4 leading-relaxed">
                {location.name}
              </p>

              {/* Available */}
              <p className="text-gray-500 dark:text-darkText/70 mb-6">
                {location.properties}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-block bg-primary text-white 
                dark:bg-accent dark:text-darkBg
                px-6 py-2 rounded-lg
                hover:scale-105 transition duration-300"
              >
                Make Inquiry
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Properties;