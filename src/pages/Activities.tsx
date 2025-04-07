import React from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
  const activities = [
    {
      id: "colloquio-italo-spagnolo",
      title: "Colloquio italo-spagnolo",
      period: "2024",
      description: "Un importante evento di scambio culturale tra Italia e Spagna, focalizzato sulla conservazione del patrimonio culturale.",
      highlights: [
        "Presentazioni di esperti di entrambi i paesi",
        "Workshop pratici sulla conservazione",
        "Mostre di artefatti storici"
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