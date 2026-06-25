import { useEffect, useRef, useState } from "react";

function TimerWidget() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      if (timeLeft === 0) {
        const total =
          Number(hours) * 3600 +
          Number(minutes) * 60 +
          Number(seconds);

        if (total <= 0) {
          alert("Please enter a valid time.");
          return;
        }

        setTimeLeft(total);
      }

      setRunning(true);
    }
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            alert("Time's Up!");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const displayHours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const displayMinutes = String(
    Math.floor((timeLeft % 3600) / 60)
  ).padStart(2, "0");
  const displaySeconds = String(timeLeft % 60).padStart(2, "0");

 return (
  <div className="bg-[#111827] rounded-2xl p-8 shadow-lg">

    <h2 className="text-3xl font-bold text-purple-400 text-center mb-8">
      ⏳ Countdown Timer
    </h2>

    {/* Input Boxes */}

    <div className="flex justify-center items-center gap-6 mb-10">

      <div className="flex flex-col items-center">

        <label className="text-gray-400 text-sm mb-2">
          Hours
        </label>

        <input
          type="number"
          min="0"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          disabled={running}
          className="w-24 h-16 text-center text-2xl bg-[#1F2937] border border-gray-600 rounded-xl text-white"
        />

      </div>

      <div className="text-5xl text-gray-500 mt-6">:</div>

      <div className="flex flex-col items-center">

        <label className="text-gray-400 text-sm mb-2">
          Minutes
        </label>

        <input
          type="number"
          min="0"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          disabled={running}
          className="w-24 h-16 text-center text-2xl bg-[#1F2937] border border-gray-600 rounded-xl text-white"
        />

      </div>

      <div className="text-5xl text-gray-500 mt-6">:</div>

      <div className="flex flex-col items-center">

        <label className="text-gray-400 text-sm mb-2">
          Seconds
        </label>

        <input
          type="number"
          min="0"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          disabled={running}
          className="w-24 h-16 text-center text-2xl bg-[#1F2937] border border-gray-600 rounded-xl text-white"
        />

      </div>

    </div>

    {/* Timer */}

    <div className="text-center mb-10">

      <div className="inline-block bg-[#0F172A] px-12 py-6 rounded-2xl border border-gray-700 shadow-md">

        <h1 className="text-6xl font-bold tracking-widest text-white">

          {displayHours}:{displayMinutes}:{displaySeconds}

        </h1>

      </div>

    </div>

    {/* Buttons */}

    <div className="flex justify-center gap-5">

      <button
        onClick={startTimer}
        className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 rounded-xl transition"
      >
        ▶ Start
      </button>

      <button
        onClick={pauseTimer}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-xl transition"
      >
        ⏸ Pause
      </button>

      <button
        onClick={resetTimer}
        className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl transition"
      >
        ↺ Reset
      </button>

    </div>

  </div>
);
}

export default TimerWidget;