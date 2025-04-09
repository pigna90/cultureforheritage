import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ColloquioItaloSpagnolo = () => {
  const [language, setLanguage] = useState<'it' | 'es'>('it');

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'es' : 'it');
  };

  const images = [
    `${process.env.PUBLIC_URL}/images/colloquio_italo_spagnolo/img_20240510_111838.jpg`,
    `${process.env.PUBLIC_URL}/images/colloquio_italo_spagnolo/img_20240510_111909.jpg`,
    `${process.env.PUBLIC_URL}/images/colloquio_italo_spagnolo/img_20240510_111919.jpg`,
    `${process.env.PUBLIC_URL}/images/colloquio_italo_spagnolo/img_20240510_112020.jpg`,
    `${process.env.PUBLIC_URL}/images/colloquio_italo_spagnolo/img_20240510_112024.jpg`,
    `${process.env.PUBLIC_URL}/images/colloquio_italo_spagnolo/img_20240510_112128.jpg`,
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Language Switcher */}
        <div className="fixed right-8 top-8 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-1">
            <button 
              onClick={() => setLanguage('it')}
                className={`px-3 py-1.5 rounded-full text-base font-medium transition-all duration-200 ${
                language === 'it' 
                    ? 'bg-accent-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-accent-500 hover:bg-gray-50'
              }`}
              aria-label="Switch to Italian"
            >
                IT
            </button>
            <button 
              onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 rounded-full text-base font-medium transition-all duration-200 ${
                language === 'es' 
                    ? 'bg-accent-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-accent-500 hover:bg-gray-50'
              }`}
              aria-label="Switch to Spanish"
            >
                ES
            </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="mb-12">
            <Link 
              to="/activities"
              className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium mb-6"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {language === 'it' ? 'Torna alle Attività' : 'Volver a Actividades'}
            </Link>
            
            <h1 className="text-4xl font-bold text-primary-900 mb-6">Colloquio italo-spagnolo</h1>
            
            {/* Event Details Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-primary-600 mb-1">
                    {language === 'it' ? 'Data' : 'Fecha'}
                  </h3>
                  <p className="text-primary-900">Lunedì, 20 maggio 2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-600 mb-1">
                    {language === 'it' ? 'Luogo' : 'Lugar'}
                  </h3>
                  <p className="text-primary-900">Sala Conferenze del Rettorato<br />Università del Salento, Lecce</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-600 mb-1">
                    {language === 'it' ? 'Patrocinio' : 'Patrocinio'}
                  </h3>
                  <p className="text-primary-900">Amministrazione provinciale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Poster Section */}
            <section className="bg-white rounded-xl shadow-sm overflow-hidden">
          <img 
            src={`${process.env.PUBLIC_URL}/images/colloquio_italo_spagnolo/poster.webp`}
            alt="Colloquio italo-spagnolo poster" 
            className="w-full h-auto"
          />
            </section>

            {/* Description Section */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                {language === 'it' 
                  ? 'Paesaggi immateriali. Nuove ecologie e tecnologie per patrimonio culturale'
                  : 'Paisajes inmateriales. Nuevas ecologías y tecnologías para el patrimonio cultural'}
              </h2>
              
              {language === 'it' ? (
                <>
                  <p className="text-primary-900 leading-relaxed">
                Il tema del paesaggio si trova da tempo al centro di dibattiti interdisciplinari riguardanti ambiti tra loro tradizionalmente differenziati. Ambiti ai quali in questi ultimi anni si sono aggiunte discipline che potremmo chiamare ibride, nate dalla rivoluzione delle nuove tecnologie.
              </p>
                
                  <blockquote className="border-l-4 border-accent-500 pl-4 italic my-6 text-primary-700 text-lg">
                "Abbiamo assistito al trionfo del verbo, assistiamo ora a quello della scienza, entrambi forieri di una catastrofe percettiva senza precedenti. Questo squilibrio tra spazio geometrico e paesaggio pone l'urgenza di un terzo stato che ritrovi i primi due come dati, a patto che la veduta locale non sembri un dettaglio da scartare, che la visione globale non sia assunta come la sola legge. Il miracolo di un tale riequilibrio, che ricomponga universo e paesaggio, è la sfida che Serres vede pesare sul nostro destino."
                    <footer className="text-sm mt-2 text-primary-600">
                  Gaspare Polizzi, Michel Serres: i sensi e il mondo, in Spazio e conoscenza nella costruzione dell'ambiente, a cura di Maria Bottero, Franco Angeli 1991, pp. 41-57 (53).
                </footer>
              </blockquote>
                
                  <p className="text-primary-900 leading-relaxed">
                Ricordiamo così le suggestioni di Michel Serres, parte di quella rivoluzione epistemologica degli anni 70 del secolo scorso, che hanno saputo coniugare storia e geografia, filosofia e pensiero ecologico e che hanno sedotto anche architetti, ingegneri e urbanisti. Dall'altro lato, l'intelligenza artificiale ha tracciato scenari del tutto inediti per chi si occupa di beni culturali, ambiente e territorio. A ben vedere, allora, riteniamo che il termine paesaggio possa coagulare ansie e preoccupazioni relative ai rischi e alle sfide che uno sviluppo sostenibile del territorio, che abbia a cuore il patrimonio culturale, propone ad attori globali e locali impegnati nella interpretazione del presente e nella pianificazione del futuro. E, nella certezza che una tecnologia ben diretta associata a una conoscenza delle problematiche e dei bisogni del territorio possa costituire un fattore determinante nella buona riuscita delle scelte di oggi, accanto alle legittime ansie e preoccupazioni, ai rischi e alle sfide, nutriamo speranze e vediamo opportunità da cogliere.
              </p>
                
                  <p className="text-primary-900 leading-relaxed">
                Con questo spirito e nella consapevolezza dell'importanza del confronto e del dialogo tra discipline e culture differenti l'incontro si propone di portare a dialogo specialisti spagnoli e italiani impegnati in attività di ricerca e professionali legate al patrimonio culturale in ambiti di intervento quali tutela e valorizzazione dei beni culturali, rischio e sostenibilità, ambiente e territorio, diritti umani e legislazione in materia di patrimonio, patrimonio culturale immateriale, digitalizzazione e intelligenza artificiale. In questo modo intendiamo mettere a confronto prospettive ed esperienze espressioni di culture ed approcci differenti al tema della sostenibilità e del paesaggio culturale, creando un'occasione di dialogo tra le nostre istituzioni che costituisca la base per la formulazione di proposte progettuali comuni e l'adozione di buone prassi. Riteniamo che, dopo anni di isolamento forzato, il nostro territorio abbia necessità di confrontarsi dal punto di vista della progettualità in ambito culturale e dei programmi di sviluppo, evitando l'errore di una chiusura autoreferenziale. Tanto più opportuno ci sembra questo confronto con una realtà come quella spagnola che è parte della storia e della cultura del mediterraneo e che ha saputo investire in modo esemplare sul turismo culturale, diventando oggetto di studi in ambito specialistico.
              </p>
            </>
          ) : (
            <>
                  <p className="text-primary-900 leading-relaxed">
                El tema del paisaje ha estado durante mucho tiempo en el centro de los debates interdisciplinarios relativos a campos tradicionalmente diferenciados. Ámbitos a los que en los últimos años se han sumado disciplinas que podríamos denominar híbridas, nacidas de la revolución de las nuevas tecnologías.
              </p>
                
                  <blockquote className="border-l-4 border-accent-500 pl-4 italic my-6 text-primary-700 text-lg">
                "Hemos asistido al triunfo del verbo, asistimos ahora al de la ciencia, ambos precursores de una catástrofe perceptiva sin precedentes. Este desequilibrio entre espacio geométrico y paisaje plantea la urgencia de un tercer estado que recupere los dos primeros como datos, siempre que la visión local no parezca un detalle a desechar, que la visión global no se tome como única ley. El milagro de tal reequilibrio, recomponiendo universo y paisaje, es el desafío que Serres ve pesar sobre nuestro destino"
                    <footer className="text-sm mt-2 text-primary-600">
                  Gaspare Polizzi, Michel Serres: i sensi e il mondo, in Spazio e conoscenza nella costruzione dell'ambiente, a cura di Maria Bottero, Franco Angeli 1991, pp. 41-57 (53).
                </footer>
              </blockquote>
                
                  <p className="text-primary-900 leading-relaxed">
                Recordamos así las sugerencias de Michel Serres, parte de esa revolución epistemológica de los años setenta, que combinó historia y geografía, filosofía y pensamiento ecológico, y que sedujo también a arquitectos, ingenieros y urbanistas. Por otro lado, la inteligencia artificial ha trazado escenarios completamente nuevos para quienes se ocupan del patrimonio cultural, el medio ambiente y el territorio. Así pues, si lo examinamos con detenimiento, creemos que el término paisaje puede aglutinar ansiedades y preocupaciones relacionadas con los riesgos y retos que un desarrollo sostenible del territorio, que tenga muy en cuenta el patrimonio cultural, propone a los agentes globales y locales que se dedican a interpretar el presente y a planificar el futuro. Y, en la certeza de que una tecnología bien orientada asociada al conocimiento de los problemas y necesidades del territorio puede ser determinante para el éxito de las opciones actuales, junto a las legítimas angustias y preocupaciones, riesgos y desafíos, alimentamos esperanzas y vemos oportunidades que hay que aprovechar.
              </p>
                
                  <p className="text-primary-900 leading-relaxed">
                Con este espíritu y conscientes de la importancia de la confrontación y el diálogo entre diferentes disciplinas y culturas, el encuentro El Paisaje Cultural en la Transición Ecológica y Digital. Riesgos, derechos y sostenibilidad pretende reunir a especialistas españoles e italianos dedicados a la investigación y a actividades profesionales relacionadas con el patrimonio cultural en ámbitos como la protección y puesta en valor del patrimonio cultural, el riesgo y la sostenibilidad, el medio ambiente y el territorio, los derechos humanos y la legislación patrimonial, el patrimonio cultural inmaterial, la digitalización y la inteligencia artificial. De este modo, pretendemos comparar perspectivas y experiencias expresadas por diferentes culturas y enfoques sobre la cuestión de la sostenibilidad y el paisaje cultural, creando una oportunidad para el diálogo entre nuestras instituciones que constituirá la base para la formulación de propuestas de proyectos comunes y la adopción de buenas prácticas. Creemos que, tras años de aislamiento forzado, nuestro territorio necesita confrontarse desde el punto de vista de la planificación en el ámbito cultural y de los programas de desarrollo, evitando el error de la cerrazón autorreferencial. Esta comparación con una realidad como la española, que forma parte de la historia y la cultura del Mediterráneo, y que ha sabido apostar por el turismo cultural de manera ejemplar, convirtiéndose en objeto de estudios en un ámbito especializado, nos parece tanto más oportuna.
              </p>
            </>
          )}
            </section>

            {/* Scientific Coordinators Section */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                {language === 'it' ? 'Responsabili scientifici' : 'Coordinadores científicos'}
              </h2>
              <ul className="space-y-6">
                <li className="text-primary-900">
                  <span className="font-bold">Stefano Magnolo</span>,{' '}
                  <span className="text-primary-700">
                    {language === 'it' ? 'Coordinatore dell\'Unità di ricerca' : 'Coordinador de la Unidad de investigación'}{' '}
                    <span className="italic">"Culture as a Good and as a Medium" (Crome)</span>
                  </span>
                  {' – '}
                  <span className="font-medium">Università del Salento</span>
                </li>
                <li className="text-primary-900">
                  <span className="font-bold">Barbara Accettura</span>,{' '}
                  <span className="text-primary-700">
                    {language === 'it' ? 'unità di ricerca' : 'unidad de investigación'}{' '}
                    <span className="italic">"Culture as a Good and as a Medium" (CroMe)</span>
                  </span>
                  {' – '}
                  <span className="font-medium">Università del Salento</span>
                </li>
                <li className="text-primary-900">
                  <span className="font-bold">Ana Galán Pérez</span>,{' '}
                  <span className="text-primary-700">
                    {language === 'it' ? 'unità di ricerca' : 'unidad de investigación'}{' '}
                    <span className="italic">"Culture as a Good and as a Medium" (CroMe)</span>
                    {language === 'it' ? ' e ' : ' y '}
                    <span className="italic">GREPAC</span>,{' '}
                    {language === 'it' ? 'Gruppo di ricerca in' : 'Grupo de investigación en'}{' '}
                    <span className="italic">Gestión de Riesgos y Emergencias en Patrimonio Cultural</span>
                  </span>
                  {' – '}
                  <span className="font-medium">Universidad Complutense de Madrid</span>
                </li>
              </ul>
            </section>

            {/* Research Units Section */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                {language === 'it' ? 'Unità di ricerca coinvolte' : 'Grupos de investigación'}
              </h2>
              <ul className="space-y-4">
                <li className="text-primary-900">
                  <span className="italic">Culture as a Good and as a Medium</span>.{' '}
                  <span className="text-primary-700">
                    {language === 'it' 
                      ? 'Nuove categorie di patrimonio e forme della sua protezione e valorizzazione' 
                      : 'Nuevas categorías de patrimonio y formas de su protección y valorización'}
                  </span>
                  {' '}<span className="font-medium">(CroMe)</span>
                  {' – '}<span className="font-medium">Unisalento</span>
                </li>
                <li className="text-primary-900">
                  <span className="italic">GREPAC</span>,{' '}
                  <span className="text-primary-700">
                    {language === 'it' 
                      ? 'Gestione dei rischi e delle emergenze nel patrimonio culturale' 
                      : 'Gestión de Riesgos y Emergencias en Patrimonio Cultural'}
                  </span>
                  {' – '}<span className="font-medium">Universidad Complutense de Madrid</span>
                </li>
              </ul>
            </section>

            {/* Program Schedule Section */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-8">
                {language === 'it' ? 'Programma della giornata' : 'Programa del día'}
              </h2>

              {/* Morning Session */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-primary-900 mb-6">
                  {language === 'it' 
                    ? 'Sessione della mattina: Sala conferenze del Rettorato (ore 10.00-13.00)'
                    : 'Sesión de la mañana: Sala de conferencias del Rectorado (10:00-13:00)'}
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-primary-900 mb-4">
                      {language === 'it' ? 'Saluti Istituzionali' : 'Saludos Institucionales'}
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-primary-900">
                        <span className="font-bold">Fabio Pollice</span>
                        {' – '}
                        <span className="text-primary-700">{language === 'it' ? 'Magnifico Rettore' : 'Magnífico Rector'}</span>
                        {' '}<span className="font-medium">Università del Salento</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Luigi Melica</span>
                        {' – '}
                        <span className="text-primary-700">
                          {language === 'it' ? 'Direttore del Dipartimento di Scienze Giuridiche' : 'Director del Departamento de Ciencias Jurídicas'}
                        </span>
                        {', '}<span className="font-medium">Università del Salento</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Stefano Minerva</span>
                        {' – '}
                        <span className="text-primary-700">
                          {language === 'it' ? 'Presidente della Provincia di Lecce' : 'Presidente de la Provincia de Lecce'}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-primary-900 mb-4">
                      {language === 'it' ? 'Coordinano e presiedono' : 'Coordinan y presiden'}
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-primary-900">
                        <span className="font-bold">Gabriella De Giorgi Cezzi</span>
                        {' – '}<span className="font-medium">Università del Salento</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Stefano Magnolo</span>
                        {' – '}<span className="font-medium">Università del Salento</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-primary-900 mb-4">
                      {language === 'it' ? 'Interventi' : 'Intervenciones'}
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-primary-900">
                        <span className="font-bold">Mario Rosario Spasiano</span>
                        {' – '}<span className="font-medium">Università della Campania "Luigi Vanvitelli"</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Giuseppe Piperata</span>
                        {' – '}<span className="font-medium">Istituto Universitario di Architettura di Venezia (IUAV)</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Maria Teresa Carballeira Rivera</span>
                        {' – '}<span className="font-medium">Universidad de Santiago de Compostela</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Francesca Cappelletti</span>
                        {' – '}<span className="font-medium">Università di Ferrara</span>
                        {' – '}<span className="text-primary-700">
                          {language === 'it' ? 'Direttrice Galleria Borghese, Roma' : 'Directora Galería Borghese, Roma'}
                        </span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Marco Calabró</span>
                        {' – '}<span className="font-medium">Università della Campania "Luigi Vanvitelli"</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Estrella Sanz Dominguez</span>
                        {' – '}<span className="font-medium">Universidad Complutense de Madrid</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Col. Angelo Vita</span>
                        {' – '}<span className="text-primary-700">
                          {language === 'it' ? 'Comandante del Comando Regione Carabinieri Forestale "Puglia"' : 'Comandante del Comando Regione Carabinieri Forestale "Puglia"'}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Afternoon Session */}
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-6">
                  {language === 'it' 
                    ? 'Sessione del pomeriggio: Sala Conferenze del Rettorato (ore 15.00-18.00)'
                    : 'Sesión de la tarde: Sala de Conferencias del Rectorado (15:00-18:00)'}
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-primary-900 mb-4">
                      {language === 'it' ? 'Tavola rotonda' : 'Mesa redonda'}
                    </h4>
                    <p className="text-primary-900 mb-6">
                      {language === 'it' ? 'Coordina e presiede: ' : 'Coordina y preside: '}
                      <span className="font-bold">Prof. Francesco Fabrizio Tuccari</span>
                      {' – '}<span className="font-medium">Università del Salento</span>
                    </p>
                    <ul className="space-y-3">
                      <li className="text-primary-900">
                        <span className="font-bold">Anna Maria Biedermann</span>
                        {' – '}<span className="font-medium">Universidad de Zaragoza</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Marco Brocca</span>
                        {' – '}<span className="font-medium">Università del Salento</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Margarita Zango-Pascual</span>
                        {' – '}<span className="font-medium">Universidad Pablo de Olavide, Sevilla</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Maria Luisa Tacelli</span>
                        {' – '}<span className="font-medium">Università del Salento</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Ana Galán Pérez</span>
                        {' – '}<span className="font-medium">Universidad Complutense de Madrid</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Barbara Accettura</span>
                        {' – '}<span className="font-medium">Università del Salento</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Marco Errico</span>
                        {' – '}<span className="font-medium">Università della Campania "Luigi Vanvitelli"</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Carla Saracino</span>
                        {' – '}<span className="font-medium">Università del Salento</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Alessandro Romano</span>
                        {' – '}<span className="font-medium">Kühne+Nagel</span>
                        {' – '}<span className="text-primary-700">
                          {language === 'it' ? 'Senior Data Scientist' : 'Científico de Datos Senior'}
                        </span>
                        {', '}<span className="font-medium">Amburgo</span>
                      </li>
                      <li className="text-primary-900">
                        <span className="font-bold">Lorenzo Prete</span>
                        {' – '}<span className="font-medium">Università del Salento</span>
                        {' – '}<span className="text-primary-700">
                          {language === 'it' ? 'Unità di ricerca CroMe' : 'Unidad de investigación CroMe'}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-primary-900">
                      {language === 'it' ? 'Confronto e dibattito con gli studenti' : 'Debate y discusión con los estudiantes'}
                    </h4>
                  </div>
                </div>
              </div>
            </section>

            {/* Image Gallery Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
              {language === 'it' ? 'Immagini dell\'evento' : 'Imágenes del evento'}
              </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
                className="w-full h-[500px] rounded-xl overflow-hidden shadow-sm bg-gray-100"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={image}
                      alt={`Colloquio italo-spagnolo image ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColloquioItaloSpagnolo; 