const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Director",
    image: "/team/member1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Co - Director",
    image: "/team/member2.jpg",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="scroll-mt-24 py-24 bg-white dark:bg-darkBg transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-accent">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-600 dark:text-darkText/70">
            The professionals behind our success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto ">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-cream dark:bg-darkCard rounded-2xl shadow-md overflow-hidden
              hover:-translate-y-3 hover:shadow-xl transition-all duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover object-top"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-darkText">
                  {member.name}
                </h3>

                <p className="text-primary dark:text-accent mt-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Team;