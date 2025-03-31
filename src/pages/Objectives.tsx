export default function Objectives() {
  const objectives = [
    {
      title: "Digital Preservation",
      description: "Develop and implement cutting-edge digital technologies for heritage preservation and documentation.",
      goals: [
        "Create 3D digital archives of cultural artifacts",
        "Implement AI-driven conservation monitoring systems",
        "Develop virtual reality experiences for heritage sites"
      ]
    },
    {
      title: "International Collaboration",
      description: "Build strong networks with international institutions and researchers in the field of cultural heritage.",
      goals: [
        "Establish partnerships with leading heritage institutions",
        "Organize international conferences and workshops",
        "Create exchange programs for researchers and students"
      ]
    },
    {
      title: "Community Engagement",
      description: "Involve local communities in heritage preservation and promote cultural awareness.",
      goals: [
        "Develop educational programs for schools",
        "Create public workshops and events",
        "Support local heritage initiatives"
      ]
    }
  ];

  return (
    <div className="text-primary-900">
      <h1 className="text-4xl font-bold mb-8">Our Objectives</h1>
      <div className="space-y-8">
        {objectives.map((objective, index) => (
          <div key={index} className="bg-white/40 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary-900">{objective.title}</h2>
            <p className="mb-4 text-primary-900">{objective.description}</p>
            <h3 className="text-xl font-semibold mb-2 text-primary-900">Key Goals:</h3>
            <ul className="list-disc list-inside space-y-2 text-primary-900">
              {objective.goals.map((goal, goalIndex) => (
                <li key={goalIndex} className="text-primary-900">{goal}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 