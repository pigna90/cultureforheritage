export default function Team() {
  const team = [
    {
      name: "Alessandro Romano",
      company: "Kuehne+Nagel",
      bio: "",
      link: "https://www.aromano.dev"
    },
    {
      name: "Ana Belén Benito Sánchez",
      company: "Complutense University of Madrid",
      bio: "",
      link: "https://produccioncientifica.ucm.es/investigadores/142211/detalle"
    },
    {
      name: "Ana Galán Pérez",
      company: "Complutense University of Madrid",
      bio: "",
      link: "https://bellasartes.ucm.es/ana-galan-perez"
    },
    {
      name: "Anna María Biedermann",
      company: "University of Zaragoza",
      bio: "",
      link: "https://iphunizar.com/anna-maria-biedermann/"
    },
    {
      name: "Barbara Accettura",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/barbara.accettura"
    },
    {
      name: "Carla Maria Saracino",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/carlamaria.saracino"
    },
    {
      name: "Claudia Morini",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/claudia.morini"
    },
    {
      name: "Francesca Dell'Anna Misurale",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/francesca.dellannamisurale"
    },
    {
      name: "Francesco Fabrizio Tuccari",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/francesco.tuccari"
    },
    {
      name: "Francesco Spera",
      company: "University of Salento",
      bio: "",
      link: "#"
    },
    {
      name: "Gabriella De Giorgi Cezzi",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/gabriella.degiorgi"
    },
    {
      name: "Giorgio Colacchio",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/giorgio.colacchio"
    },
    {
      name: "Isabella Salsano",
      company: "University of Salento",
      bio: "",
      link: "#"
    },
    {
      name: "Lorenzo Prete",
      company: "University of Salento",
      bio: "",
      link: "#"
    },
    {
      name: "Marco Brocca",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/marco.brocca"
    },
    {
      name: "Marco Errico",
      company: "Università degli studi della Campania Luigi Vanvitelli",
      bio: "",
      link: "#"
    },
    {
      name: "Maria Luisa Tacelli",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/marialuisa.tacelli"
    },
    {
      name: "Maria Teresa Carballeira Rivera",
      company: "University of Santiago de Compostela",
      bio: "",
      link: "https://www.usc.gal/es/departamento/derecho-publico-teoria/directorio/maria-teresa-carballeira-rivera-2002"
    },
    {
      name: "Polina Zavershinskaia",
      company: "University of Salento",
      bio: "",
      link: "#"
    },
    {
      name: "Sara Ciccarese",
      company: "University of Salento",
      bio: "",
      link: "#"
    },
    {
      name: "Serena Vergori",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/serena.vergori"
    },
    {
      name: "Stefano Magnolo",
      company: "University of Salento",
      bio: "",
      link: "https://www.unisalento.it/scheda-utente/-/people/stefano.magnolo"
    },
    {
      name: "Vittoria Giannini",
      company: "University of Salento",
      bio: "",
      link: "#"
    }
  ];

  return (
    <div className="text-primary-900">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white/40 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-1 text-primary-900">{member.name}</h2>
            <p className="text-lg text-accent-700 mb-4">{member.company}</p>
            <p className="mb-4 text-primary-900">{member.bio}</p>
            {member.link === "#" ? (
              <span className="text-gray-400 font-medium cursor-default">
                Full Profile →
              </span>
            ) : (
              <a 
                href={member.link} 
                className="text-accent-600 hover:text-accent-700 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Profile →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 