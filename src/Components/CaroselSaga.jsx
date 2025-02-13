import { useEffect, useRef } from "react";

const FastAndFuriousCarousel = () => {
  const carouselRef = useRef(null);
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

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1.5;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center bg-gray-900 p-10">
      <div className="w-[80%] bg-gray-800 p-6 rounded-lg shadow-lg text-center overflow-hidden">
        <h2 className="text-white text-3xl font-bold mb-4">Fast & Furious Saga</h2>
        <div ref={carouselRef} className="flex overflow-x-auto space-x-4 p-2 scrollbar-hide">
          {[...images, ...images].map((src, index) => (
            <img key={index} className="w-60 h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" src={src} alt="Fast & Furious" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FastAndFuriousCarousel;
