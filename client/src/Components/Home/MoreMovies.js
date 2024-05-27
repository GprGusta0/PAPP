import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Movie";
import Loader from "../Notfications/Loader";
import { Empty } from "../Notfications/Empty";

function MoreMovies({ isLoading, movies }) {
  return (
    <div className="my-16">
      <Titles title="Mais Filmes" Icon={BsCollectionFill} />
      {isLoading ? (
        <Loader />
      ) : movies?.length > 0 ? (
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {movies?.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <Empty message="Parece que não temos nenhum filme" />
        </div>
      )}
    </div>
  );
}

export default MoreMovies;