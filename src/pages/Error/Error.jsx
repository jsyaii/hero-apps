import { Link } from "react-router";
import error from "../../assets/error-404.png";

const Error = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <img src={error} alt="Error" />
      <h1 className="text-[#001931] font-bold text-5xl">
        Oops, page not found!
      </h1>
      <p className="text-[#627382] mt-2 mb-4">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn bg-gradient text-white font-semibold py-4 px-6 rounded-sm text-[16px] transition-all duration-300  hover:-translate-y-1"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default Error;
