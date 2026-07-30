"use client";

import Link from "next/link";
import { useState } from "react";

type CarouselSlide = {
  src: string;
  alt: string;
  label: string;
};

export function HomeCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <figure className="home-carousel" aria-label="Реальные наборы wonder me box">
      <div
        className="home-carousel__track"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="home-carousel__slide"
            aria-hidden={index !== activeSlide}
            key={slide.src}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <figcaption className="home-carousel__label" aria-live="polite">
        {slides[activeSlide].label}
      </figcaption>

      <div className="home-carousel__arrows">
        <button type="button" onClick={showPrevious} aria-label="Предыдущее фото">
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" onClick={showNext} aria-label="Следующее фото">
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="home-carousel__dots" aria-label="Выбрать фото">
        {slides.map((slide, index) => (
          <button
            className={index === activeSlide ? "is-active" : undefined}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Фото ${index + 1}: ${slide.label}`}
            aria-current={index === activeSlide ? "true" : undefined}
            key={slide.src}
          />
        ))}
      </div>

      <Link className="home-carousel__catalog" href="/catalog">
        В каталог
      </Link>
    </figure>
  );
}
