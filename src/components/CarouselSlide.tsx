import { type Place } from "../data/places";

interface Props {
  place: Place;
  animating: boolean;
  direction: "next" | "prev";
}

export default function CarouselSlide({ place, animating, direction }: Props) {
  return (
    <div
      className={`slide ${animating ? `slide--exit-${direction}` : "slide--enter"}`}
    >
      <img
        src={place.imageUrl}
        alt={place.name}
        className="slide__image"
        loading="lazy"
      />
      <div className="slide__overlay" />
      <div className="slide__content">
        <div className="slide__location">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {place.location}
        </div>
        <h2 className="slide__title">{place.name}</h2>
        <p className="slide__description">{place.description}</p>
        <div className="slide__tags">
          {place.tags.map((tag) => (
            <span key={tag} className="slide__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
