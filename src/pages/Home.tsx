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
    <div className="min-h-screen flex flex-col text-primary-900">
      {/* Hero Section */}
      <div className="w-full max-w-4xl mx-auto mt-12 mb-8 px-4">
        <section className="text-center">
          <h1 className="text-5xl font-bold mb-2 text-primary-900">CroMe</h1>
          <p className="text-2xl mb-3 text-primary-800">Culture as a good and as a medium</p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-2 text-primary-700 font-medium">New Categories of Heritage and Form of its Protection and Enhancement</p>
            <p className="text-base text-primary-600 border-t border-primary-200 pt-2">Department of Legal Studies<br />Research Group on Intangible Cultural Heritage</p>
          </div>
        </section>
      </div>

      {/* Image Carousel */}
      <div className="w-full max-w-4xl mx-auto mb-8 px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full h-[45vh]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-soft"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Cultural Heritage {index + 1}</h3>
                  <p className="text-sm opacity-90">Exploring the intersection of culture and heritage</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* News & Events Section */}
      <div className="w-full max-w-4xl mx-auto mb-12 px-4">
        <section className="bg-white/40 backdrop-blur-sm p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-primary-900">Latest News & Events</h2>
            <Link to="/news" className="text-accent-600 hover:text-accent-700 font-medium flex items-center">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="space-y-4">
            <Link to="/news/digital-tools-workshop" className="block hover:bg-white/40 transition-colors rounded-lg p-4">
              <article className="border-l-4 border-accent-400 pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded">Workshop</span>
                  <p className="text-sm text-primary-600">March 15, 2024</p>
                </div>
                <h3 className="font-bold text-primary-900 text-lg mb-2">Upcoming Workshop: Digital Tools for Heritage Conservation</h3>
                <p className="text-primary-700 line-clamp-2 mb-3">Join us for a hands-on workshop exploring the latest digital tools in heritage conservation.</p>
                <div className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
            <Link to="/news/research-publication" className="block hover:bg-white/40 transition-colors rounded-lg p-4">
              <article className="border-l-4 border-accent-400 pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded">Research</span>
                  <p className="text-sm text-primary-600">February 28, 2024</p>
                </div>
                <h3 className="font-bold text-primary-900 text-lg mb-2">New Research Publication</h3>
                <p className="text-primary-700 line-clamp-2 mb-3">Our team's latest research on sustainable preservation methods has been published.</p>
                <div className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
            <Link to="/news/innovation-grant" className="block hover:bg-white/40 transition-colors rounded-lg p-4">
              <article className="border-l-4 border-accent-400 pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded">Grant</span>
                  <p className="text-sm text-primary-600">February 15, 2024</p>
                </div>
                <h3 className="font-bold text-primary-900 text-lg mb-2">Cultural Heritage Innovation Grant Awarded</h3>
                <p className="text-primary-700 line-clamp-2 mb-3">Our research unit has been awarded a major grant to develop innovative methods for digital heritage preservation.</p>
                <div className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 