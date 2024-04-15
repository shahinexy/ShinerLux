import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary md:py-16 py-5 text-white">
      <footer className="p-4 max-w-7xl mx-auto">
        <h2 className="font-bold text-2xl">
          Shiner<span className="text-secondary">Lux</span>
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pt-5 mt-5 border-t-2 border-secondary">
          <div>
            <h3 className="font-bold text-xl mb-3">About</h3>
            <p>
              At ShinerLux, we specialize in luxury real estate. We offer
              curated listings tailored to discerning tastes. Find your dream
              home with us today.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3 md:text-center">Contact</h3>
            <div className="flex gap-5 text-3xl md:justify-center">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaGithub></FaGithub>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3 md:text-end">Service</h3>
            <ul className="md:text-end text-sm">
              <li>Research</li>
              <li>Planing</li>
              <li>Buy & Sell</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
