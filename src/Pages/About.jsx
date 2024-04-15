import img from "../assets/images/Private-Reserve-Gili-Lankanfushi.jpeg";
import img2 from "../assets/images/istockphoto-1317804584-612x612.jpg";
import img3 from "../assets/images/istockphoto-1319763895-612x612.jpg";
import img4 from "../assets/images/istockphoto-940475680-612x612.jpg";
import img5 from "../assets/images/images.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div
        className="bg-no-repeat bg-cover bg-bottom md:h-[55vh] h-[35vh]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="md:text-5xl text-3xl h-full flex items-center justify-center text-white bg-black/40 font-bold">
          More About Us
        </h1>
      </div>

      {/* about our company section  */}
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="md:text-3xl text-2xl font-bold text-center text-black md:my-8 my-5">
          About Our <span className="text-secondary">Company</span>
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 my-5 md:my-12 md:gap-12 gap-5">
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
            <p>
            We strive to provide exceptional luxury real estate experiences. We aim to exceed client expectations with personalized service and expert guidance. Our commitment is to help you find your perfect dream home.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
            <p>
            To be the leading authority in luxury real estate, setting new standards of excellence. We envision creating lasting relationships with our clients, built on trust and exceptional service. Our goal is to redefine the luxury home buying experience
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
            <p>
            Integrity, Excellence, and Personalized Service. At [Your Company Name], we uphold the highest standards of honesty and professionalism in all our dealings. We are dedicated to delivering excellence in every aspect of the luxury real estate process, prioritizing our clients needs and aspirations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Our Resources
            </h3>
            <p>
            Comprehensive market insights, expert guidance, and innovative tools. we provide valuable resources to empower our clients in their luxury real estate journey. From detailed property analyses to personalized consultations, we equip you with the knowledge and support needed to make informed decisions.
            </p>
          </div>
        </div>

        {/* Our team section  */}
        <h1 className="md:text-3xl text-2xl font-bold text-center text-black md:mt-20 my-5">
          Meet Our <span className="text-secondary">Team</span>
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-10 gap-7">
          <div>
            <img className="w-full h-72" src={img5} alt="" />
            <div>
              <p className="text-xl font-semibold">Sakibul Islam</p>
              <p>buying agent</p>
            </div>
          </div>
          <div>
            <img className="w-full h-72" src={img2} alt="" />
            <div>
              <p className="text-xl font-semibold">Mysa Jahan</p>
              <p>selling agent</p>
            </div>
          </div>
          <div>
            <img className="w-full h-72" src={img3} alt="" />
            <div>
              <p className="text-xl font-semibold">Rifat Ahmmed</p>
              <p>sales executive</p>
            </div>
          </div>
          <div>
            <img className="w-full h-72" src={img4} alt="" />
            <div>
              <p className="text-xl font-semibold">Ibrahim Khalil</p>
              <p>real estate broker</p>
            </div>
          </div>
        </div>

        {/* testimonial  */}
        <h1 className="md:text-3xl text-2xl font-bold text-center text-black md:mt-20 my-5">
          Our Client <span className="text-secondary">Review</span>
        </h1>
        <div className="bg-primary p-5 md:w-2/3 mx-auto my-7 shadow-md shadow-secondary">
          <div className="text-4xl text-secondary">
            <FaQuoteLeft></FaQuoteLeft>
          </div>
          <div className="md:px-20">
            <div className="flex gap-3 items-center">
              <img
                className="md:w-16 w-12 md:h-16 h-12 rounded-full"
                src={img3}
                alt=""
              />
              <p className="text-white md:text-xl font-semibold">Jacks parow</p>
            </div>
            <p className="text-white my-3">
            Working with ShinerLux was a enjoyable experience. Their team's expertise in luxury real estate is unmatched, and they truly understand the needs and preferences of their clients. From the initial consultation to closing, they provided exceptional service and guidance, making the home buying process effortless. I highly recommend ShinerLux to anyone looking for their dream luxury property.
            </p>
          </div>
          <div className="text-4xl text-secondary flex justify-end">
            <FaQuoteRight></FaQuoteRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
