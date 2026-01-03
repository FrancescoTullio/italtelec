import { useState, useEffect } from 'react';
import '../css-component/carousel.css';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Trasmettitori TV Digitali",
            subtitle: "Tecnologia all'avanguardia per broadcasting televisivo",
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Sistemi FM Professionali",
            subtitle: "Soluzioni radio FM ad alta potenza e qualità",
            image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Trasmettitori DAB+",
            subtitle: "Il futuro della radio digitale",
            image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=1200&h=600&fit=crop"
        },
        {
            id: 4,
            title: "Modulazione RF Avanzata",
            subtitle: "Sistemi integrati per ogni esigenza di trasmissione",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    const goToPrevious = () => {
        setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % slides.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-slide ${index === activeIndex ? 'active' : ''} ${index === (activeIndex - 1 + slides.length) % slides.length ? 'prev' : ''
                            } ${index === (activeIndex + 1) % slides.length ? 'next' : ''}`}
                    >
                        <div className="carousel-image-wrapper">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="carousel-image"
                            />
                            <div className="carousel-overlay"></div>
                        </div>
                        <div className="carousel-content">
                            <div className="container">
                                <h1 className="carousel-title">{slide.title}</h1>
                                <p className="carousel-subtitle">{slide.subtitle}</p>
                                <button className="carousel-btn">Scopri di più</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button className="carousel-control prev" onClick={goToPrevious}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className="carousel-control next" onClick={goToNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Indicators */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Vai alla slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Carousel;