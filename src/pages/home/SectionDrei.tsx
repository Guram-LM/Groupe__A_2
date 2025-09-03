
interface Feature {
  id: number;
  title: string;
  description: string;
}

const SectionDrei = () => {
  const features: Feature[] = [
    { id: 1, title: "Browse Countries", description: "Explore our comprehensive list of countries with flags and information" },
    { id: 2, title: "Add to Favorites", description: "Mark interesting destinations as favorites for easy access" },
    { id: 3, title: "Plan Your Trip", description: "Use our trip planner to create custom itineraries" },
    { id: 4, title: "Save & Share", description: "Save your travel plans and access them anytime" },
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto  text-center">
        <h1 className="text-3xl font-bold mb-10">How it works</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center my-6">
          {features.map((feat) => (
            <div key={feat.id} className="flex flex-col items-center justify-center ">
              
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white text-lg font-bold rounded-full mb-4">
                {feat.id}
              </div>

              <h2 className="text-lg font-semibold mb-2 text-center">{feat.title}</h2>
              <p className="text-gray-600 text-center">{feat.description}</p>
            </div>
          ))}
      </div>



      </div>
    </section>
  );
};

export default SectionDrei;
