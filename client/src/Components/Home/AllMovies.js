import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Loader from "../Notfications/Loader";
import { Empty } from "../Notfications/Empty";
import Rating from "../Stars";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

function AllMovies({ isLoading, movies }) {
  return (
    <div className="my-16">
      <Titles title="Mais Filmes" Icon={BsCollectionFill} />
      {isLoading ? (
        <Loader />
      ) : movies?.length > 0 ? (
        <div className="grid sm:mt-12 mt-6 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies?.map((movie, index) => (
            <div key={index} className="relative overflow-hidden">
              <img
                src={movie?.titleImage ? movie.titleImage : "/images/user.png"}
                alt={movie?.name}
                className="w-full h-auto rounded-lg transition duration-300 transform hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="p-2">
                  <h3 className="font-semibold text-lg">{movie.name}</h3>
                  <p className="text-sm">{movie.description}</p>
                </div>
                <div className="flex gap-2 text-star mb-2">
                  <Rating value={movie?.rate} />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="text-subMain w-3 h-3" />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiTime className="text-subMain w-3 h-3" />
                    <span>{movie.time} Hr</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Empty message="Parece que não temos nenhum filme" />
      )}
    </div>
  );
}

export default AllMovies;
