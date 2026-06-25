function MovieCard({ movie, onClick }) {

  return (

    <div

      onClick={onClick}

      className="cursor-pointer bg-[#1f2937] rounded-xl overflow-hidden hover:scale-105 duration-300"

    >

      <img

        src={movie.image}

        alt={movie.title}

        className="w-full h-80 object-cover"

      />

      <div className="p-4">

        <h2 className="text-white text-xl font-bold">
          {movie.title}
        </h2>

        <p className="text-gray-400">
          ⭐ {movie.rating}
        </p>

      </div>

    </div>

  );

}

export default MovieCard;