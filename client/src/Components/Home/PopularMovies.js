import React, { useState } from "react";
import Titles from "../Titles";
import { BsCollectionFill, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Movie from "../Movie";
import Loader from "../Notfications/Loader";
import { Empty } from "../Notfications/Empty";
import { useSelector } from "react-redux";

const PopularMovies = () => {
  const { isLoading, movies } = useSelector((state) => state.getAllMovies);
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);

  return (
    <div className="my-16">
      <Titles title="Filmes Populares" Icon={BsCollectionFill} />
      <div className="mt-10">
        {isLoading ? (
          <Loader />
        ) : movies?.length > 0 ? (
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
            {movies.slice(0, 8).map((movie, index) => (
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

export default PopularMovies;
