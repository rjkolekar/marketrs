import React, { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.",
      author: "Judith Black",
      role: "CEO of Workcation",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-8 sm:h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-lg sm:text-xl font-semibold leading-8 text-gray-900 sm:leading-9">
            <p>{testimonials[currentIndex].quote}</p>
          </blockquote>
          <figcaption className="mt-6 sm:mt-10">
            <img className="mx-auto h-8 w-8 sm:h-10 sm:w-10 rounded-full" src={testimonials[currentIndex].image} alt="" />
            <div className="mt-2 sm:mt-4 flex flex-col items-center text-base sm:text-lg">
              <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
              <div className="text-gray-600">{testimonials[currentIndex].role}</div>
            </div>
          </figcaption>
        </figure>
      </div>
      {/* Arrows for navigation */}
      <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md" onClick={handlePrev}>
        {/* Left Arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md" onClick={handleNext}>
        {/* Right Arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
