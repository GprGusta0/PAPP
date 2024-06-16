import React, { useState, useEffect } from "react";
import Titles from "../Titles";
import { BsClockFill, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; 
import Movie from "../Movie";
import Loader from "../Notfications/Loader";
import { Empty } from "../Notfications/Empty";
import { useSelector } from "react-redux";

const RecentlyAdded = () => {
  const { isLoading, movies } = useSelector((state) => state.getAllMovies);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);

  // Check if movies is not an array or undefined
  if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <div className="my-16">
        <Titles title="Adicionados Recentemente" Icon={BsClockFill} />
        {isLoading ? (
          <Loader />
        ) : (
          <Empty message="Parece que não temos nenhum filme adicionado recentemente" />
        )}
      </div>
    );
  }

  // Sort movies by createdAt in descending order
  const sortedMovies = [...movies].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  

  return (
    <div className="my-16">
      <Titles title="Adicionados Recentemente" Icon={BsClockFill} />
      <div className="mt-10">
        {isLoading ? (
          <Loader />
        ) : sortedMovies.length > 0 ? (
          <Swiper
            onSwiper={setSwiperInstance} // Save Swiper instance
            navigation={{ nextEl, prevEl }} // Navigation buttons
            autoplay={{ delay: 3000 }} // Autoplay configuration
            speed={1000} // Transition speed
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            {sortedMovies.slice(0, 10).map((movie, index) => (
              <SwiperSlide key={index}>
                <Movie movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Empty message="Parece que não temos nenhum filme adicionado recentemente" />
        )}
      </div>
    </div>
  );
};

export default RecentlyAdded;
