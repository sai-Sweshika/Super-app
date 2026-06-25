function MovieModal({ movie, onClose }) {

  return (

    <div className="fixed inset-0 bg-black/80 flex justify-center items-center">

      <div className="bg-[#1F2937] w-[600px] rounded-xl p-6 relative">

        <button

          onClick={onClose}

          className="absolute right-4 top-3 text-white text-3xl"

        >

          ×

        </button>

        <img

          src={movie.image}

          className="rounded-lg w-full h-80 object-cover"

        />

        <h1 className="text-white text-3xl font-bold mt-5">

          {movie.title}

        </h1>

        <p className="text-green-400 mt-2">

          {movie.category}

        </p>

        <p className="text-yellow-400 mt-2">

          ⭐ {movie.rating}

        </p>

        <p className="text-gray-300 mt-5">

          {movie.description}

        </p>

      </div>

    </div>

  );

}

export default MovieModal;