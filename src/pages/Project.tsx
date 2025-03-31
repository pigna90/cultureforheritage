export default function Project() {
  return (
    <div className="text-primary-900">
      <h1 className="text-4xl font-bold mb-8">Project Overview</h1>
      <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg">
        <p className="mb-4 text-primary-900">
          The Culture for Heritage research unit is dedicated to exploring and preserving cultural heritage
          through innovative research methodologies and digital technologies. Our work spans multiple
          disciplines, including archaeology, anthropology, digital humanities, and conservation science.
        </p>
        <p className="mb-4 text-primary-900">
          We believe that cultural heritage is not just about preserving the past, but about creating
          meaningful connections between historical artifacts, contemporary society, and future generations.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-900">Research Focus Areas</h2>
        <ul className="list-disc list-inside space-y-2 text-primary-900">
          <li>Digital preservation techniques</li>
          <li>Community engagement in heritage conservation</li>
          <li>Sustainable heritage management</li>
          <li>Cross-cultural heritage interpretation</li>
        </ul>
      </div>
    </div>
  );
} 