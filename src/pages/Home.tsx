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
      <div className="w-full max-w-4xl mx-auto mt-6 md:mt-12 mb-4 md:mb-8 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-accent-700">CroMe</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-6 text-primary-800">Culture as a good and as a medium</h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-6 text-primary-700 md:whitespace-nowrap">New Categories of Heritage and Form of its Protection and Enhancement</h3>
            <div className="text-base text-primary-600 border-t border-primary-200 pt-2 md:pt-3">
              <p className="font-semibold leading-tight">University of Salento</p>
              <p className="leading-tight">Department of Legal Studies</p>
              <p className="leading-tight">Research Group on Intangible Cultural Heritage</p>
            </div>
            <a 
              href="https://www.instagram.com/culture_for_heritage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-accent-600 hover:text-accent-700 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-medium">@culture_for_heritage</span>
            </a>
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
      <div className="w-full max-w-4xl mx-auto mb-8 md:mb-12 px-4">
        <section className="bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 mb-4">
            <h2 className="text-2xl font-bold text-primary-900">Latest News & Events</h2>
            <Link to="/news" className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center text-base">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="space-y-3 md:space-y-4">
            <Link to="/" className="block hover:bg-white/40 transition-colors rounded-lg">
              <article className="border-l-2 border-accent-400 pl-3 md:pl-4 py-2">
                <p className="text-sm md:text-sm text-primary-600 mb-1">April 10, 2025</p>
                <h3 className="font-bold text-primary-900 text-lg md:text-lg mb-1">New website online</h3>
                <p className="text-base md:text-base text-primary-700 line-clamp-2">We are excited to announce the launch of our new website, designed to better serve our community and showcase our work in cultural heritage preservation.</p>
              </article>
            </Link>
            <Link to="/colloquio-italo-spagnolo" className="block hover:bg-white/40 transition-colors rounded-lg">
              <article className="border-l-2 border-accent-400 pl-3 md:pl-4 py-2">
                <p className="text-sm md:text-sm text-primary-600 mb-1">May 20, 2024</p>
                <h3 className="font-bold text-primary-900 text-lg md:text-lg mb-1">Colloquio italo-spagnolo</h3>
                <p className="text-base md:text-base text-primary-700 line-clamp-2">Join us for an important cultural exchange event between Italian and Spanish heritage institutions.</p>
              </article>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 