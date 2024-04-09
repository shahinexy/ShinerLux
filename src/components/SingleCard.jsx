import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCard = () => {
  const datas = useLoaderData();
  const param = useParams();
  const data = datas.find((data) => data.id === param.id);
  const {
    image,
    estate_title,
    segment_name,
    price,
    description,
    status,
    area_sqft,
    location,
    facilities,
    rant_package_facilities,
    about,
  } = data;
  return (
    <div>
      <div className="max-w-5xl mx-auto p-4">
        <div>
          <img className="w-full h-[50vh]" src={image} alt="" />
        </div>
        <div className="my-3">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <p className="text-3xl font-bold">{estate_title}</p>
            <p className="bg-primary px-3 text-white ">{segment_name}</p>
          </div>
          <p className="mt-3">{description}</p>
          <div className="flex gap-5 flex-wrap my-3">
            <p className="flex gap-2 items-center">
              <FaLandmark></FaLandmark>
              {area_sqft} sq ft{" "}
            </p>
            <p className="flex gap-2 items-center">
              <FaMapMarkerAlt></FaMapMarkerAlt> {location}{" "}
            </p>
            {status.sell && <p className="bg-primary px-2 text-white">Sell</p>}
            {status.rent && (
              <p className="bg-secondary px-2 text-primary">Rent</p>
            )}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 my-5">
            <div>
              <h2 className="text-center text-xl font-bold bg-secondary py-3 text-primary">
                Fore Sell
              </h2>
              {status.sell ? (
                <div className="p-3 space-y-3">
                  <p className="font-semibold">Facilities</p>
                  <ul className="list-disc pl-8">
                    {facilities.map((data, idx) => (
                      <li key={idx}>{data}</li>
                    ))}
                  </ul>
                  <p className="font-bold text-primary text-lg">
                    Price: {price.sell}$
                  </p>
                </div>
              ) : (
                <h3 className="text-xl text-center text-primary font-semibold my-5">
                  This property not for Sell
                </h3>
              )}
            </div>
            <div>
              <h2 className="text-center text-xl font-bold bg-primary py-3 text-white">
                Fore Rent
              </h2>
              {status.rent ? (
                <div className="p-3 space-y-3">
                  <p className="font-semibold">Facilities</p>
                  <ul className="list-disc pl-8">
                    {rant_package_facilities.map((data, idx) => (
                      <li key={idx}>{data}</li>
                    ))}
                  </ul>
                  <p className="font-bold text-secondary text-lg">
                    Price: {price.rent}$
                  </p>
                </div>
              ) : (
                <h3 className="text-xl text-center text-secondary font-semibold my-5">
                  This property not for Rent
                </h3>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary pt-3 border-t border-secondary">
              About the property
            </h2>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
