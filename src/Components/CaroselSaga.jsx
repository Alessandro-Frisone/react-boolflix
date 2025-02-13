import { useEffect, useRef } from "react";

const FastAndFuriousCarousel = () => {
  const carouselRef = useRef(null);
  const scrollSpeed = 1.5; // Velocità scorrimento

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrame;

    const scrollLoop = () => {
      if (carousel) {
        carousel.scrollLeft += scrollSpeed; // Scorrimento continuo
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollLoop);
    };
    animationFrame = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const images = [
    "https://i.ebayimg.com/00/s/MTQ3N1gxMDAw/z/YCkAAOSwDBVhYGhl/$_57.JPG?set_id=8800005007",
    "https://i.ebayimg.com/images/g/-Z4AAOSweGpcrypS/s-l1200.jpg",
    "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/Po4AAOSwDBdjonVZ/$_57.JPG?set_id=880000500F",
    "https://i.ebayimg.com/images/g/x98AAOSwHFpk5mpP/s-l1200.jpg",
    "https://i.pinimg.com/736x/4f/f8/a8/4ff8a8de041491d0a9083a771117122e.jpg",
    "https://pad.mymovies.it/filmclub/2011/06/227/locandina.jpg",
    "https://www.tallengestore.com/cdn/shop/products/Fast_Furious_7_-_Paul_Walker_-_Vin_Diesel_-_Dwayne_Johnson_-_Tallenge_Hollywood_Action_Movie_Poster_4db39f52-8057-4dac-a779-596841a0ef9a.jpg?v=1582543253",
    "https://i.ebayimg.com/images/g/tscAAOSwArRhG4LV/s-l1200.jpg",
    "https://i.ebayimg.com/images/g/yyYAAOSwnNZhG4Ls/s-l400.jpg",
    "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/njIAAOSwbFxkbv4M/$_57.JPG?set_id=880000500F",
  ];


  return (
    <div className="w-full flex justify-center items-center bg-gray-900">
      <div className="w-[80%] bg-gray-800 p-6 rounded-lg shadow-lg text-center mt-10 overflow-hidden">
        <h2 className="text-white text-3xl font-bold mb-4">
          Fast & Furious Saga
        </h2>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 p-2 scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            display: "flex",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              className="w-60 h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
              src={src}
              alt={`Fast & Furious ${(index % images.length) + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FastAndFuriousCarousel;
