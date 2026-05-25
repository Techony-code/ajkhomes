import Logo from "../assets/logo.png"
import logoLight from "../assets/logoLight.png"

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-darkCard text-white transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img
                src={logoLight}
                alt="AJK Estates Logo"
                className="h-14 mb-4 object-contain dark:hidden"
            />

            <img
                src={Logo}
                alt="AJK Estates Logo"
                className="h-14 mb-4 object-contain hidden dark:block"
            />
            <p className="text-white/80 dark:text-darkText/80">
              Delivering excellence in land sales, estate development,
              construction, and property management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/80 dark:text-darkText/80">
              <li className="hover:text-accent cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-accent cursor-pointer transition">
                About
              </li>
              <li className="hover:text-accent cursor-pointer transition">
                Services
              </li>
              <li className="hover:text-accent cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-white/80 dark:text-darkText/80">
              <li>Land Sales</li>
              <li>Construction</li>
              <li>Estate Management</li>
              <li>Consultancy</li>
              <li>Land Surveying</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>
            <p className="text-white/80 dark:text-darkText/80">
              TRINITY ROUNDABOUT,<br />
              OJO TERMINAL, IBADAN,<br />
              OYO STATE.
            </p>

            <p className="mt-4 text-white/80 dark:text-darkText/80">
              +234 701 463 0910
            </p>

            <p className="mt-2 text-white/80 dark:text-darkText/80">
              ajkgreensportshomesandgarden@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-darkBorder mt-12 pt-6 text-center text-white/70 dark:text-darkText/70">
          © {new Date().getFullYear()} AJK Green Sport Home and Gardens Ltd. All rights reserved. <br /> RC 1668214
        </div>

      </div>

    </footer>
  );
};

export default Footer;