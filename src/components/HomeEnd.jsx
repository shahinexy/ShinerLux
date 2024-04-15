import { FaChartLine, FaFileAlt, FaHandshake, FaHome } from "react-icons/fa";
import img from "../assets/images/edenpenthouse.jpg";
import { Link } from "react-router-dom";
import img2 from "../assets/images/pngtree-miniature-house-in-the-forest-picture-image_2460582.jpg";
const HomeEnd = () => {
  return (
    <div className="md:my-20 my-5">
      {/* find your home  */}
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
        <div data-aos="fade-down-right">
          <img className="w-full h-full" src={img} alt="" />
        </div>
        <div data-aos="fade-down-left" className="space-y-5">
          <h2 className="md:text-4xl text-2xl font-bold">
            Find your new <span className="text-secondary">home</span> with us
          </h2>
          <p>
            With over $2 Billion in sales, Our agency is the industry’s top
            luxury producer with over 27 years of experience.
          </p>
          <div className="grid sm:grid-cols-2 items-center justify-center gap-3 space-y-5">
            <div className="flex items-center gap-3">
              <div className="text-5xl text-primary">
                <FaHandshake></FaHandshake>
              </div>
              <div>
                <p className="text-xl font-semibold">Sell your home</p>
                <p>Free service</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-5xl text-primary">
                <FaChartLine></FaChartLine>
              </div>
              <div>
                <p className="text-xl font-semibold">Buy a home</p>
                <p>No fees asked</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-5xl text-primary">
                <FaFileAlt></FaFileAlt>
              </div>
              <div>
                <p className="text-xl font-semibold">Free Appraisal</p>
                <p>No fees asked</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-5xl text-primary">
                <FaHome></FaHome>
              </div>
              <div>
                <p className="text-xl font-semibold">Free Photoshoot</p>
                <p>Professional service</p>
              </div>
            </div>
          </div>
          <div className="md:pt-7">
            <Link to={"/about"}>
              <button className="btn bg-secondary border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-none text-lg">
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* get in tauch  */}
      <div data-aos="zoom-in-up" className="mt-20">
        <div
          className="md:w-3/4 mx-auto text-center text-white  bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="bg-black/60 space-y-5 md:p-16 p-5">
          <div className="flex justify-center text-7xl text-secondary">
            <FaHome></FaHome>
          </div>
          <h2 className="md:text-4xl text-2xl font-bold">
            Get your dream house
          </h2>
          <p>
            Get in touch with us and our experts and developers would love to
            contribute their expertise and insights and help you today.
          </p>
          <div className="md:pt-7">
            <Link to={"/contact"}>
              <button className="btn bg-secondary border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-none text-lg">
                Contact Now
              </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEnd;
