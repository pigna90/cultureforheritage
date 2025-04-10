import { Link } from 'react-router-dom';

export default function News() {
  const news = [
    {
      title: "New website online",
      date: "April 10, 2025",
      description: "We are excited to announce the launch of our new website, designed to better serve our community and showcase our work in cultural heritage preservation.",
      link: "/"
    },
    {
      title: "Colloquio italo-spagnolo",
      date: "May 20, 2024",
      description: "Join us for an important cultural exchange event between Italian and Spanish heritage institutions.",
      link: "/activities/colloquio-italo-spagnolo"
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
            <Link 
              to={item.link}
              className="text-accent-600 hover:text-accent-700 font-medium"
            >
              More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 