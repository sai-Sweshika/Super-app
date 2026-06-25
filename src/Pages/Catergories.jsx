import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

const categoriesList = [
  "Action",
  "Comedy",
  "Drama",
  "Thriller",
  "Horror",
  "Romance",
];

function Categories() {
  const navigate = useNavigate();
  const setCategories = useStore((state) => state.setCategories);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleContinue = () => {
    if (selectedCategories.length < 3) {
      alert("Please select at least 3 categories.");
      return;
    }

    setCategories(selectedCategories);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-green-400 mb-4">
          Choose Your Entertainment Categories
        </h1>

        <p className="text-gray-400 mb-8">
          Select at least <span className="text-white font-semibold">3</span>{" "}
          categories to continue.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoriesList.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer rounded-xl p-6 text-center font-semibold transition duration-300 hover:scale-105 ${
                selectedCategories.includes(category)
                  ? "bg-green-500 text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {category}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <h2 className="text-lg">
            Selected :
            <span className="text-green-400 ml-2">
              {selectedCategories.length}
            </span>
          </h2>

          <button
            onClick={handleContinue}
            disabled={selectedCategories.length < 3}
            className={`px-8 py-3 rounded-lg font-semibold transition ${
              selectedCategories.length >= 3
                ? "bg-green-500 hover:bg-green-600 text-black"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;