"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "/images/slide1.jpg",
        alt: "Kinoti Mungania Campaign",
    },
    {
        id: 2,
        image: "/images/slide2.jpg",
        alt: "Transparent Leadership",
    },
    {
        id: 3,
        image: "/images/slide3.jpg",
        alt: "Empowering Teachers",
    },
];

export const SplitSliderSection = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="pt-[80px] bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Side */}
                <div>
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        A Vision for Transparent Leadership
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Kinoti Mungania is dedicated to financial transparency, empowering teachers, and representing every member with integrity and accountability.
                    </p>
                    <button
                        onClick={() => {
                            const el = document.getElementById("about");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
                    >
                        Learn More
                    </button>
                </div>

                {/* Image Slider Side */}
                <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden rounded-lg shadow-md">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                            aria-hidden={index !== current}
                        >
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}

                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};
