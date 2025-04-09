export default function News() {
  const news = [
    {
      title: "New Research Publication on Sustainable Preservation",
      date: "February 28, 2024",
      description: "Our team's latest research on sustainable preservation methods has been published in the International Journal of Heritage Studies.",
      link: "https://example.com/publication"
    },
    {
      title: "Cultural Heritage Innovation Grant Awarded",
      date: "February 15, 2024",
      description: "Our research unit has been awarded a major grant to develop innovative methods for digital heritage preservation.",
      link: "https://example.com/grant"
    }
  ];

  // Sort news by date in descending order (newest first)
  const sortedNews = [...news].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="text-primary-900">
      <h1 className="text-4xl font-bold mb-8 text-accent-700">News</h1>
      <div className="space-y-8">
        {sortedNews.map((item, index) => (
          <div key={index} className="bg-white/40 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-primary-900 mb-2">{item.title}</h2>
            <p className="text-sm text-primary-600 mb-4">{item.date}</p>
            <p className="mb-4 text-primary-900">{item.description}</p>
            <a 
              href={item.link} 
              className="text-accent-600 hover:text-accent-700 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 