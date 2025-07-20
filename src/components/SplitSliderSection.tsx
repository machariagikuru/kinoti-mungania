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

    // Handles moving to the next slide
    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    // Handles moving to the previous slide
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    // Automatic slide transition
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000); // Change slide every 6 seconds
        return () => clearInterval(timer); // Clean up timer on unmount
    }, [current, length]);

    return (
        <section className="py-20 lg:py-32 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content Side (unchanged as per request) */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
                        This is What We Deserve:
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                        A stronger, empowered teaching fraternity in Meru County.
                        Our voice must be louder, our rights clearer, and our support systems stronger.
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-primary mb-8">
                        #WelcomeToTeamKinoti
                    </p>

                    <button
                        onClick={() => {
                            const el = document.getElementById("about"); // Assuming 'about' is your target section ID
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition duration-300
                       shadow-lg hover:shadow-xl transform hover:scale-105 text-lg font-semibold"
                        aria-label="Learn more about Kinoti Mungania's vision"
                    >
                        Learn More
                    </button>
                </div>

                {/* Image Slider Side */}
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg border border-border">
                    {/* KUPPET logos - positioned outside the slide map for static visibility */}
                    <img
                        src="/images/kuppet-logo.jpg"
                        alt="KUPPET Logo Left"
                        className="absolute top-4 left-4 w-16 h-16 object-contain opacity-80 z-20"
                    />
                    <img
                        src="/images/kuppet-logo.jpg"
                        alt="KUPPET Logo Right"
                        className="absolute top-4 right-4 w-16 h-16 object-contain opacity-80 z-20"
                    />

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
                                className="w-full h-full object-contain" // Reverted to object-contain
                            />
                        </div>
                    ))}

                    {/* Slider Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary/80 text-primary-foreground p-3 rounded-full z-30
                       hover:bg-primary hover:scale-110 transition duration-300 shadow-md"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary/80 text-primary-foreground p-3 rounded-full z-30
                       hover:bg-primary hover:scale-110 transition duration-300 shadow-md"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slider Dot Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-5" : "bg-primary/50"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};