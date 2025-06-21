"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  "https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
  "https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
  "https://res.cloudinary.com/degrggosz/image/upload/v1748501295/home2_bg_ito8po.jpg",
];

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="w-screen h-[calc(100vh/2)] lg:h-screen relative overflow-hidden">
      <Slider {...settings}>
        {carouselImages.map((src, index) => (
          <div key={index} className="relative h-[calc(100vh/2)] lg:h-screen">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              height={1080}
              width={1920}
              className="h-full w-screen object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-1/3 lg:top-2/5 left-0 md:left-12 lg:left-24 ml-6 sm:ml-12 p-4 sm:p-8 max-w-xl w-full bg-black/40 rounded-md"
      >
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          Empowering Sustainable Living with Nature
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
          At VR Agri Farms, we combine our love for agriculture with a commitment to social responsibility. From farmland sales to natural farming solutions, we help you embrace a lifestyle rooted in sustainability and growth.
        </p>
        <Link
          href="/about"
          className="inline-block bg-[#2F855A] hover:bg-[#276749] text-white font-medium px-6 py-3 rounded-md transition duration-300"
        >
          Learn More
        </Link>
      </motion.div>

      {/* Custom Dots Style */}
      <style jsx global>{`
        .slick-dots li button:before {
          color: #F6BE00 !important;
          font-size: 10px;
          opacity: 1 !important;
        }
        .slick-dots li.slick-active button:before {
          color: #2F855A !important;
        }
      `}</style>
    </div>
  );
}
