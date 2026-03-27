import { useState, useCallback, useEffect } from "react";
import { places } from "../data/places";
import CarouselSlide from "./CarouselSlide";
import CarouselControls from "./CarouselControls";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % places.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + places.length) % places.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <div className="carousel">
      <CarouselSlide
        place={places[current]}
        animating={animating}
        direction={direction}
      />
      <CarouselControls
        current={current}
        total={places.length}
        onPrev={prev}
        onNext={next}
        onDotClick={(i) => goTo(i, i > current ? "next" : "prev")}
      />
    </div>
  );
}
