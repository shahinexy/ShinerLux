import PropTypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ data, idx }) => {
  const {
    id,
    image,
    estate_title,
    segment_name,
    price,
    description,
    status,
    location,
  } = data;
  return (
    <div>
      <div
        data-aos={idx % 2 === 0 ? "fade-down-right" : "fade-down-left"}
        data-aos-duration="1000"
        className="bg-primary text-white shadow-md shadow-black"
      >
        <div className="relative">
          <img
            className="w-full h-56 shadow-md shadow-secondary"
            src={image}
            alt=""
          />
          <div className="absolute top-2 right-1 flex gap-5 text-white">
            {status.sell && <small className="bg-primary px-2">Sell</small>}
            {status.rent && <small className="bg-secondary px-2">Rent</small>}
          </div>
        </div>
        <div className="md:p-4 p-2 space-y-3">
          <p className="text-xl font-semibold">{estate_title}</p>
          <div className="flex justify-between flex-wrap">
            <p>Price: {price.sell ? price.sell : price.rent}$</p>
            <small className="bg-secondary px-2 text-primary font-bold">
              {segment_name}
            </small>
          </div>
          <p className="border-b border-secondary pb-4">{description}</p>
          <div className="flex md:flex-row flex-col-reverse justify-between md:items-center flex-wrap">
            <Link to={`/singleCard/${id}`}>
              <button className="btn bg-secondary border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-none">
                View Details
              </button>
            </Link>
            <p className="flex gap-1 items-center md:my-0 my-3">
              <FaMapMarkerAlt></FaMapMarkerAlt> {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Cards;
