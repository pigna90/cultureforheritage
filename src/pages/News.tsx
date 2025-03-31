export default function News() {
  const news = [
    {
      title: "Digital Tools for Heritage Conservation Workshop",
      date: "March 15, 2024",
      type: "Event",
      description: "Join us for a hands-on workshop exploring the latest digital tools in heritage conservation. Learn about 3D scanning, photogrammetry, and digital documentation techniques.",
      details: {
        time: "9:00 AM - 5:00 PM",
        location: "Digital Heritage Lab",
        registration: "Open until March 10"
      }
    },
    {
      title: "New Research Publication on Sustainable Preservation",
      date: "February 28, 2024",
      type: "Publication",
      description: "Our team's latest research on sustainable preservation methods has been published in the International Journal of Heritage Studies.",
      details: {
        authors: "Dr. Sarah Johnson, Prof. Marco Rossi",
        journal: "International Journal of Heritage Studies",
        doi: "10.1234/ijhs.2024.001"
      }
    },
    {
      title: "Cultural Heritage Innovation Grant Awarded",
      date: "February 15, 2024",
      type: "News",
      description: "Our research unit has been awarded a major grant to develop innovative methods for digital heritage preservation.",
      details: {
        amount: "€500,000",
        duration: "2 years",
        focus: "Digital Innovation in Heritage Conservation"
      }
    }
  ];

  return (
    <div className="text-primary-900">
      <h1 className="text-4xl font-bold mb-8">News & Events</h1>
      <div className="space-y-8">
        {news.map((item, index) => (
          <div key={index} className="bg-white/40 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-primary-900">{item.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${
                item.type === 'Event' ? 'bg-green-500/20 text-green-700' :
                item.type === 'Publication' ? 'bg-blue-500/20 text-blue-700' :
                'bg-purple-500/20 text-purple-700'
              }`}>
                {item.type}
              </span>
            </div>
            <p className="text-sm text-primary-600 mb-4">{item.date}</p>
            <p className="mb-4 text-primary-900">{item.description}</p>
            <div className="bg-white/60 p-4 rounded-lg">
              {Object.entries(item.details).map(([key, value]) => (
                <p key={key} className="mb-2 text-primary-900">
                  <span className="text-primary-700">{key.charAt(0).toUpperCase() + key.slice(1)}: </span>
                  {value}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 