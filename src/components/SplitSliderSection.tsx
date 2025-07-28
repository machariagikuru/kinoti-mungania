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

// Countdown component
const Countdown = () => {
    const targetDate = new Date("2026-01-25T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            const now = Date.now();
            const difference = targetDate - now;
            setTimeLeft(difference > 0 ? difference : 0);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeLeft <= 0) {
        return (
            <div className="text-lg md:text-xl font-semibold mb-4 text-primary">
                🎉 Election day is here!
            </div>
        );
    }

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    return (
        <div className="text-lg md:text-xl font-semibold mb-4">
            <span>
                🗳️ Voting in Kinoti Mungania in
            </span>:
            <span className="ml-2 text-red-600 font-extrabold">
                {`${days} day${days !== 1 ? "s" : ""}, ${hours}h ${minutes}m ${seconds}s`}
            </span>
        </div>
    );
};

// Updated Supporter Counter with Animated Dots
const FloatingDotsCounter = () => {
    const [count, setCount] = useState(0);
    const [dotCount, setDotCount] = useState(1);
    const fastTarget = 4671;
    const finalCount = 6372;

    useEffect(() => {
        let current = 0;
        let fastInterval: NodeJS.Timeout;
        let slowInterval: NodeJS.Timeout;

        // Fast count: +100 every 40ms
        fastInterval = setInterval(() => {
            current += 100;
            setCount(current);

            if (current >= fastTarget) {
                current = fastTarget;
                clearInterval(fastInterval);
                setCount(current); // Ensure it's updated to 4671

                // Slow count: +1 every 2000ms (sync with FloatingStarsCounter)
                slowInterval = setInterval(() => {
                    current += 1;
                    setCount(current);

                    if (current >= finalCount) {
                        clearInterval(slowInterval);
                    }
                }, 2000);
            }
        }, 40);

        // Cleanup both intervals on unmount
        return () => {
            clearInterval(fastInterval);
            clearInterval(slowInterval);
        };
    }, []);

    // Dot animation
    useEffect(() => {
        const dotInterval = setInterval(() => {
            setDotCount((prev) => (prev % 3) + 1);
        }, 500);
        return () => clearInterval(dotInterval);
    }, []);

    const loadingDots = ".".repeat(dotCount);

    return (
        <div className="mt-6 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-red-600 font-extrabold text-lg">{loadingDots}</span>
            <span className="text-red-600 font-extrabold text-sm sm:text-base">
                {count.toLocaleString()} Meru Techers wamesema Kinoti Mungania Tosha
                <br />
                and the number is still growing{loadingDots}
            </span>
        </div>
    );
};

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
    }, [current, length]);

    return (
        <section className="py-20 lg:py-32 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content Side */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
                        This is What We Deserve:
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                        A stronger, empowered teaching fraternity in Meru County.
                        Our voice must be louder, our rights clearer, and our support systems stronger.
                    </p>

                    <Countdown />
                    <FloatingDotsCounter />

                    <p className="text-xl md:text-2xl font-bold text-primary mb-8 mt-4">
                        #WelcomeToTeamKinoti
                    </p>

                    <button
                        onClick={() => {
                            const el = document.getElementById("about");
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
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}

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
