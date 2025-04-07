export default function Goals() {
  const goals = [
    "To encourage dialogue between legal field and other humanistic-social disciplines regarding the understanding of the intangible heritage (IH)",
    "The construction of a European interdisciplinary research network for the study of IH",
    "To contribute to the definition of the IH",
    "To increase digital scholarship practices in research and for communication within the and outside the research unit",
    "To make proposals for the conservation-enhancement of the IH",
    "To implement interdisciplinary scientific communication on IH inside and outside the strictly academic sphere, also using digital technologies",
    "The involvement of stakeholders and the establishment of public-private partnerships",
    "The implementation of Third Mission activities",
    "The organization of face-to-face and remote networking events",
    "To check calls for the funding of the research network and specific project activities"
  ];

  return (
    <div className="text-primary-900 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Goals</h1>
      <div className="space-y-6">
        {goals.map((goal, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
              index % 2 === 0 
                ? 'bg-white/40 hover:bg-white/50' 
                : 'bg-primary-50/40 hover:bg-primary-50/50'
            }`}
          >
            <div className="p-6">
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${
                  index % 2 === 0 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'bg-white text-primary-600'
                }`}>
                  {index + 1}
                </div>
                <p className="text-lg leading-relaxed">
                  {goal}
                </p>
              </div>
            </div>
            <div className={`absolute inset-0 border-2 rounded-xl transition-opacity duration-300 ${
              index % 2 === 0 
                ? 'border-primary-200 opacity-0 group-hover:opacity-100' 
                : 'border-primary-100 opacity-0 group-hover:opacity-100'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );
} 