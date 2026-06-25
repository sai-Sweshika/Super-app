import weatherData from "../services/weatherApi";

function WeatherWidget() {

  return (

    <div className="bg-[#101820] rounded-2xl shadow-lg overflow-hidden">

      {/* Top */}

      <div className="bg-[#2C3645] text-center py-3">

        <h2 className="text-white font-semibold text-lg">
          {weatherData.date}
        </h2>

      </div>

      {/* Temperature */}

      <div className="flex justify-between items-center px-8 py-8">

        <div>

          <h1 className="text-6xl font-bold text-white">
            {weatherData.temperature}°
          </h1>

          <p className="text-gray-400 mt-2">
            {weatherData.city}, {weatherData.country}
          </p>

          <p className="text-green-400 mt-2">
            {weatherData.condition}
          </p>

        </div>

        <div className="text-7xl">

          {weatherData.icon}

        </div>

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-3 border-t border-gray-700">

        <div className="text-center py-5 border-r border-gray-700">

          <h3 className="text-gray-400 text-sm">
            Humidity
          </h3>

          <p className="text-white text-xl font-bold mt-2">
            {weatherData.humidity}%
          </p>

        </div>

        <div className="text-center py-5 border-r border-gray-700">

          <h3 className="text-gray-400 text-sm">
            Wind
          </h3>

          <p className="text-white text-xl font-bold mt-2">
            {weatherData.wind} m/s
          </p>

        </div>

        <div className="text-center py-5">

          <h3 className="text-gray-400 text-sm">
            Pressure
          </h3>

          <p className="text-white text-xl font-bold mt-2">
            {weatherData.pressure} hPa
          </p>

        </div>

      </div>

    </div>

  );

}

export default WeatherWidget;