import { useEffect, useRef } from "react";
import Background from "../assets/background.jpg";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Small subtle movement (adjust 0.3 for stronger/weaker effect)
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    // Use requestAnimationFrame for smooth performance
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Parallax Background */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={Background}
          alt="Estate"
          className="w-full h-full object-cover"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-darkBg/90 dark:to-darkCard/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-darkText leading-tight animate-fadeUp">
          Premium Estate <br />
          Management Services
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/90 dark:text-darkText/80 max-w-2xl mx-auto animate-fadeUp">
          We manage, maintain and elevate property value with excellence and sustainability.
        </p>

        <a
            href="#properties"
            className="inline-block mt-8 bg-accent text-primary dark:bg-primary dark:text-white
            px-8 py-3 rounded-lg font-semibold
            hover:scale-105 active:scale-95
            transition-all duration-300"
        >
            Explore Properties
        </a>
      </div>
    </section>
  );
};

export default Hero;