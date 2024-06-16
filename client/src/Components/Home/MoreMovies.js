import React, { useState } from "react";
import Titles from "../Titles";
import { BsFilm, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Movie from "../Movie";
import Loader from "../Notfications/Loader";
import { Empty } from "../Notfications/Empty";
import { useSelector } from "react-redux";

// Function to shuffle an array
const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const MoreMovies = () => {
  const { isLoading, movies } = useSelector((state) => state.getAllMovies);
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);

  const shuffledMovies = movies ? shuffleArray(movies) : [];

  return (
    <div className="my-16">
      <Titles title="Mais Filmes" Icon={BsFilm} />
      <div className="mt-10">
        {isLoading ? (
          <Loader />
        ) : shuffledMovies.length > 0 ? (
          <Swiper
            navigation={{ nextEl, prevEl }}
            autoplay={true}
            speed={1000}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            {shuffledMovies.slice(0, 12).map((movie, index) => (
              <SwiperSlide key={index}>
                <Movie movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Empty message="Parece que não temos nenhum filme" />
        )}
      </div>
    </div>
  );
};

export default MoreMovies;
