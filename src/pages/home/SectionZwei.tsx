import React, { type ReactNode } from 'react';
import { Herz, Kalendar, Ort } from './IconsImages';

export interface Card {
  icon: ReactNode;
  title: string;
  description: string;
}

const SectionZwei = () => {
  const cards: Card[] = [
    {
      icon: <Ort /> ,
      title: "Discover Countries",
      description: "Browse through a comprehensive list of countries with detailed information, flags, and key facts about each destination.",
    },
    {
      icon: <Herz />,
      title: "Save Favorites",
      description: "Mark countries as favorites and easily access them later. Filter by your favorite destinations to plan future trips.",
    },
    {
      icon: <Kalendar />,
      title: "Plan Trips",
      description: "Create custom travel itineraries by selecting multiple countries. Save your trips and access them anytime for future reference.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg shadow hover:shadow-lg transition bg-white">
            <div className="text-blue-600 mb-4">{card.icon}</div>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionZwei;
