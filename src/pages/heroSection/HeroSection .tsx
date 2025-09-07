import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden h-screen">

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Plan Your Perfect <span className="text-yellow-300">Adventure</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mb-10 text-blue-100">
          Discover amazing destinations, create personalized travel itineraries,
          and save your favorite places. <br /> Your next adventure is just a
          click away.
        </p>

        <button
          onClick={() => navigate("/countrys")}
          className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-xl bg-yellow-400 text-blue-900 transition-all duration-300 hover:bg-yellow-500 hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          Learn More
          <span className="absolute right-4 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
