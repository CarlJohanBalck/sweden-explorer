interface Props {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export default function CarouselControls({
  current,
  total,
  onPrev,
  onNext,
  onDotClick,
}: Props) {
  return (
    <div className="controls">
      <button className="controls__arrow controls__arrow--prev" onClick={onPrev} aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="controls__dots">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`controls__dot ${i === current ? "controls__dot--active" : ""}`}
            onClick={() => onDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button className="controls__arrow controls__arrow--next" onClick={onNext} aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="controls__counter">
        {current + 1} / {total}
      </div>
    </div>
  );
}
