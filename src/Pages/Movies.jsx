import { useState } from "react";
import useStore from "../store/useStore";
import movies from "../services/movieApi";

import MovieCard from "../Components/MovieCard";
import MovieModal from "../Components/MovieModal";

function Movies() {

  const selectedCategories = useStore((state) => state.categories);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter(movie =>
      selectedCategories.includes(movie.category)
  );

  return (

    <div className="min-h-screen bg-black p-8">

      <h1 className="text-5xl text-white font-bold mb-10">
        Recommended Movies
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {filteredMovies.map(movie=>(
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={()=>setSelectedMovie(movie)}
          />
        ))}

      </div>

      {selectedMovie &&

      <MovieModal

        movie={selectedMovie}
        onClose={()=>setSelectedMovie(null)}

      />

      }

    </div>

  );

}

export default Movies;