const Certifications = () => {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 py-24 bg-cream dark:bg-darkCard transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-accent">
            Our Certifications
          </h2>
          <p className="mt-4 text-gray-600 dark:text-darkText/70">
            We are fully registered and compliant with regulatory bodies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* CAC */}
          <div className="bg-white dark:bg-darkBg p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-darkText">
              Corporate Affairs Commission (CAC)
            </h3>

            <a
              href="/certificates/cac.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white 
              dark:bg-accent dark:text-darkBg
              px-6 py-3 rounded-lg
              hover:scale-105 transition duration-300"
            >
              View Certificate
            </a>
          </div>

          {/* SCUML */}
          <div className="bg-white dark:bg-darkBg p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-darkText">
              SCUML Certificate
            </h3>

            <a
              href="/certificates/scuml.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white 
              dark:bg-accent dark:text-darkBg
              px-6 py-3 rounded-lg
              hover:scale-105 transition duration-300"
            >
              View Certificate
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;