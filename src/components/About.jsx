import aboutImage from "../assets/about.jpg"; // replace with another image if you want

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream scroll-mt-24 dark:bg-darkCard transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image Side */}
        <div className="relative group">
          <img
            src={aboutImage}
            alt="About"
            className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
          />

          {/* Decorative Accent Box */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent dark:bg-primary rounded-xl -z-10"></div>
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-4xl font-bold text-primary dark:text-accent mb-6">
            About Our Company
          </h2>

          <p className="text-gray-700 dark:text-darkText/80 mb-6 leading-relaxed">
            AJK GREEN SPORTS is committed to delivering professional estate
            management services with integrity, sustainability, and excellence.
            We specialize in residential and commercial property management.
          </p>

          {/* Mission */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-primary dark:text-accent mb-2">
              Mission
            </h3>

            <p className="text-gray-700 dark:text-darkText/80 leading-relaxed">
              To provide affordable, sustainable, and eco-friendly residential
              developments that promote a healthy, active lifestyle through
              integration with sports facilities and green spaces.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary dark:text-accent mb-2">
              Vision
            </h3>

            <p className="text-gray-700 dark:text-darkText/80 leading-relaxed">
              To be a leading provider of innovative, nature-integrated, and
              health-focused real estate solutions in Nigeria and beyond.
            </p>
          </div>
          <a
            href="https://www.facebook.com/share/1DDrEoijRE/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white dark:bg-accent dark:text-darkBg
            px-6 py-3 rounded-lg font-semibold
            hover:scale-105 active:scale-95
            transition-all duration-300"
          >
            Learn more
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;