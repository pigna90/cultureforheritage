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
    <div className="text-primary-900 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Goals</h1>
      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-primary-50 h-auto sm:h-24"
          >
            <div className="p-4 h-full flex items-center">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl bg-primary-200 text-primary-800">
                  {index + 1}
                </div>
                <p className="text-lg leading-relaxed mt-2 sm:mt-0 sm:my-auto">
                  {goal}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 rounded-lg transition-opacity duration-300 border-primary-300 opacity-0 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
} 