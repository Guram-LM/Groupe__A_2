import { Link } from 'react-router-dom';

const SectionEin = () => {
  return (
    <section className=" py-20">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900">Plan Your Perfect</h1>
        <h1 className="text-6xl font-bold text-blue-600 mt-2">Adventure</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Discover amazing destinations, create personalized travel itineraries, and save your favorite places.
          <br />
          Your next adventure is just a click away.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to={"/countrys"}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Places
          </Link>
          <Link
            to={"/heroSection"}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionEin;
