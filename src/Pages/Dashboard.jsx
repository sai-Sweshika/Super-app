import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import TimerWidget from "../Components/TimerWidget";
import WeatherWidget from "../Components/WeatherWidget";
import NewsWidget from "../Components/NewsWidget";

function Dashboard() {
  const user = useStore((state) => state.user);
  const categories = useStore((state) => state.categories);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-400">
            Super App Dashboard
          </h1>

          <Link
            to="/movies"
            className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            Browse Movies
          </Link>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* User Profile */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              User Profile
            </h2>

            <p><strong>Name:</strong> {user?.name || "-"}</p>
            <p><strong>Username:</strong> {user?.username || "-"}</p>
            <p><strong>Email:</strong> {user?.email || "-"}</p>
            <p><strong>Mobile:</strong> {user?.mobile || "-"}</p>

            <div className="mt-5">
              <h3 className="font-semibold mb-2">Selected Categories</h3>

              <div className="flex flex-wrap gap-2">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <span
                      key={category}
                      className="bg-green-500 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))
                ) : (
                  <p>No categories selected.</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <WeatherWidget />
          </div>

          {/* Notes */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Notes
            </h2>

            <textarea
              placeholder="Write your notes..."
              className="w-full h-40 bg-black border border-gray-700 rounded-lg p-3 outline-none"
            ></textarea>
          </div>

          {/* News */}
          <div>
    <NewsWidget />
</div>


        </div>

        {/* Timer */}
        <div className="lg:col-span-2">
          <TimerWidget />
        </div>
      </div>
    </div>

  );
}

export default Dashboard;