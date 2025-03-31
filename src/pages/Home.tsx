import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import coverImage from '../assets/images/cover.png';

export default function Home() {
  const images = [
    { src: coverImage, alt: "Cultural Heritage Cover 1" },
    { src: coverImage, alt: "Cultural Heritage Cover 2" },
    { src: coverImage, alt: "Cultural Heritage Cover 3" }
  ];
  
  return (
    <div className="h-screen flex flex-col text-primary-900">
      {/* Hero Section */}
      <section className="py-4 text-center">
        <h1 className="text-4xl font-bold mb-1">Culture for Heritage</h1>
        <p className="text-lg mb-2">Exploring and Preserving Cultural Heritage Through Research and Innovation</p>
        <div className="text-base">
          <p>University of Example</p>
          <p>Department of Cultural Studies</p>
        </div>
      </section>

      {/* Image Carousel */}
      <div className="w-full max-w-xl mx-auto my-2 flex-grow flex items-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full h-[35vh]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-soft"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* News & Events Section */}
      <section className="bg-white/40 backdrop-blur-sm p-3 rounded-lg">
        <h2 className="text-xl font-bold mb-2 text-primary-900">Latest News & Events</h2>
        <div className="space-y-2">
          <Link to="/news/digital-tools-workshop" className="block hover:bg-white/20 transition-colors rounded-lg p-1.5">
            <article className="border-l-4 border-accent-400 pl-2">
              <h3 className="font-bold text-primary-900 text-lg">Upcoming Workshop: Digital Tools for Heritage Conservation</h3>
              <p className="text-sm text-primary-600">March 15, 2024</p>
              <p className="mt-0.5 text-primary-900">Join us for a hands-on workshop exploring the latest digital tools in heritage conservation.</p>
              <div className="inline-flex items-center mt-1 text-accent-600 hover:text-accent-700 font-medium">
                Read more
                <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          </Link>
          <Link to="/news/research-publication" className="block hover:bg-white/20 transition-colors rounded-lg p-1.5">
            <article className="border-l-4 border-accent-400 pl-2">
              <h3 className="font-bold text-primary-900 text-lg">New Research Publication</h3>
              <p className="text-sm text-primary-600">February 28, 2024</p>
              <p className="mt-0.5 text-primary-900">Our team's latest research on sustainable preservation methods has been published.</p>
              <div className="inline-flex items-center mt-1 text-accent-600 hover:text-accent-700 font-medium">
                Read more
                <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          </Link>
          <Link to="/news/innovation-grant" className="block hover:bg-white/20 transition-colors rounded-lg p-1.5">
            <article className="border-l-4 border-accent-400 pl-2">
              <h3 className="font-bold text-primary-900 text-lg">Cultural Heritage Innovation Grant Awarded</h3>
              <p className="text-sm text-primary-600">February 15, 2024</p>
              <p className="mt-0.5 text-primary-900">Our research unit has been awarded a major grant to develop innovative methods for digital heritage preservation.</p>
              <div className="inline-flex items-center mt-1 text-accent-600 hover:text-accent-700 font-medium">
                Read more
                <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </div>
  );
} 