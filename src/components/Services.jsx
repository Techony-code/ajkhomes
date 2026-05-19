import {
  HomeIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "Land Sales & Acquisition",
    icon: HomeIcon,
  },
  {
    id: 2,
    title: "Building Construction & Renovation",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 3,
    title: "Estate Development & Management",
    icon: BuildingOffice2Icon,
  },
  {
    id: 4,
    title: "Consultancy & Architectural Design",
    icon: PencilSquareIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream dark:bg-darkCard transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-accent">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-darkText/70">
            Comprehensive real estate solutions tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group bg-white dark:bg-darkBg p-8 rounded-2xl shadow-md
                hover:-translate-y-3 hover:shadow-xl
                transition-all duration-500"
              >
                <Icon className="w-12 h-12 text-primary dark:text-accent mb-6 group-hover:scale-110 transition duration-300" />

                <h3 className="text-lg font-semibold text-gray-800 dark:text-darkText">
                  {service.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;