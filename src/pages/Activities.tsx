import React from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
  const activities = [
    {
      id: "digital-documentation",
      title: "Digital Documentation Project",
      period: "2023-2025",
      description: "A comprehensive project to create high-resolution 3D models of important cultural artifacts using advanced scanning technologies.",
      highlights: [
        "Development of new scanning methodologies",
        "Creation of online accessible archives",
        "Collaboration with multiple museums"
      ]
    },
    {
      id: "heritage-workshop",
      title: "Heritage Conservation Workshop Series",
      period: "Spring 2024",
      description: "A series of workshops focusing on practical aspects of heritage conservation, combining traditional methods with modern technologies.",
      highlights: [
        "Hands-on training sessions",
        "Expert guest lectures",
        "Virtual reality demonstrations"
      ]
    },
    {
      id: "international-conference",
      title: "International Conference on Digital Heritage",
      period: "November 2023",
      description: "A successful conference that brought together experts from around the world to discuss the latest developments in digital heritage preservation.",
      highlights: [
        "Over 200 participants from 30 countries",
        "50+ research presentations",
        "Publication of proceedings"
      ]
    }
  ];

  return (
    <div className="text-primary-900">
      <h1 className="text-4xl font-bold mb-8">Activities</h1>
      <div className="space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white/40 backdrop-blur-sm p-6 rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-primary-900">{activity.title}</h2>
            </div>
            <p className="text-sm text-primary-600 mb-4">{activity.period}</p>
            <p className="mb-4 text-primary-900">{activity.description}</p>
            <h3 className="text-xl font-semibold mb-2 text-primary-900">Key Highlights:</h3>
            <ul className="list-disc list-inside space-y-2 text-primary-900 mb-4">
              {activity.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{highlight}</li>
              ))}
            </ul>
            <Link 
              to={`/activities/${activity.id}`}
              className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
            >
              Read more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities; 