import { useEffect, useState } from "react";

const statsData = [
  { id: 1, value: 250, label: "Properties Managed" },
  { id: 2, value: 120, label: "Happy Clients" },
  { id: 3, value: 15, label: "Years Experience" },
  { id: 4, value: 98, label: "Success Rate (%)" },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [target]);

  return <span>{count}</span>;
};

const Stats = () => {
  return (
    <section className="py-24 bg-primary dark:bg-darkCard text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

          {statsData.map((stat) => (
            <div key={stat.id}>

              <h3 className="text-4xl md:text-5xl font-bold mb-3 text-accent">
                <Counter target={stat.value} />+
              </h3>

              <p className="text-white/80 dark:text-darkText/80">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;