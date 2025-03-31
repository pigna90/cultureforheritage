export default function Team() {
  const team = [
    {
      name: "Alessandro Romano",
      university: "Google",
      role: "Senior Data Scientist",
      bio: "Dr. Johnson has over 15 years of experience in cultural heritage preservation and digital technologies. She leads our research initiatives in digital preservation and community engagement.",
      email: "sarah.johnson@example.com"
    },
    {
      name: "Prof. Marco Rossi",
      university: "University of Rome",
      role: "Senior Researcher",
      bio: "Professor Rossi specializes in archaeological site preservation and has led numerous international conservation projects across Europe and Asia.",
      email: "marco.rossi@example.com"
    },
    {
      name: "Dr. Emily Chen",
      university: "Stanford University",
      role: "Digital Technologies Lead",
      bio: "Dr. Chen focuses on developing innovative methods for 3D documentation of cultural heritage artifacts and sites using advanced imaging technologies.",
      email: "emily.chen@example.com"
    }
  ];

  return (
    <div className="text-primary-900">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white/40 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-1 text-primary-900">{member.name}</h2>
            <p className="text-lg text-accent-700 mb-1">{member.university}</p>
            <p className="text-lg text-primary-700 mb-4">{member.role}</p>
            <p className="mb-4 text-primary-900">{member.bio}</p>
            <a href={`mailto:${member.email}`} className="text-accent-600 hover:text-accent-700 font-medium">
              Contact →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 