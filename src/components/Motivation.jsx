import React from "react";

function Motivation() {
  const quotes = [
    "Keep pushing your limits.",
    "Every setback is a setup for a comeback.",
    "Dream big, work hard, stay humble.",
    "Your potential is endless.",
    "Embrace the challenges—they shape your future.",
    "Push yourself, because no one else will do it for you.",
    "Dream big. Work hard. Stay focused.",
    "Every day is a new beginning. Take a deep breath and start again.",
    "Doubt kills more dreams than failure ever will.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Your only limit is your mind.",
    "Don't watch the clock; do what it does. Keep going.",
    "Be stronger than your excuses.",
    "Make today so awesome that yesterday gets jealous.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section id="motivation" className="pt-8 pb-8 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <h2 className="text-2xl font-medium text-blue-900">{randomQuote}</h2>
      </div>
    </section>
  );
}

export default Motivation;
