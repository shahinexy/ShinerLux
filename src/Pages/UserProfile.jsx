import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaCamera, FaUser, FaUserCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { TfiEmail } from "react-icons/tfi";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const { user } = useContext(authContext);
  const { register } = useForm({
    defaultValues: {
      name: user ? user.displayName : "",
      photo: user ? user.photoURL : "",
    },
  });

  return (
    <div>
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <div className=" md:w-2/3 text-white p-8 bg-primary mx-auto md:my-20 my-6">
        <div className="text-center flex justify-center flex-col items-center mb-8">
          {user ? (
            <>
              {user.photoURL ? (
                <>
                  <img
                    className="md:w-52 md:h-52 w-32 h-32  rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </>
              ) : (
                <FaUserCircle className="text-4xl md:w-52 md:h-52 w-32 h-32" />
              )}
            </>
          ) : (
            ""
          )}
          <div className="my-5">
            {user ? (
              <>
                {(user.displayName && (
                  <p className="text-2xl font-bold italic">
                    {user.displayName}
                  </p>
                )) ||
                  "Unknown"}
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="my-5 lg:px-20 md:px-10">
          <h2 className=" border-b-2 border-secondary"></h2>
          <div className="lg:px-10 px-5 my-5 ">
            <form className="space-y-6">
              <div>
                <p className="flex gap-2 items-center">
                  <TfiEmail></TfiEmail> Email
                </p>
                <input
                  disabled
                  className="mt-2 px-3 py-2 w-full text-black"
                  type="email"
                  name="email"
                  value={user ? user.email : ""}
                />
              </div>
              <div>
                <p className="flex gap-2 items-center">
                  <FaUser></FaUser> User Name
                </p>
                <input
                  {...register("name")}
                  className="mt-2 px-3 py-2 w-full text-black"
                  type="text"
                  name="name"
                  placeholder="name"
                  disabled
                />
              </div>
              <div>
                <p className="flex gap-2 items-center">
                  <FaCamera></FaCamera> Photo URL
                </p>
                <input
                  {...register("photo")}
                  className="mt-2 px-3 py-2 w-full text-black"
                  type="text"
                  name="photo"
                  placeholder="url"
                  disabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
