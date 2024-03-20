import React from "react";

function Marquee() {
  return (
    <div>
      <marquee
        className="text-9xl text-gray-600 bg-[#000000] font-medium font-sans uppercase "
        direction=""
      >
        Buy Wyld Live Wyld Think Wyld Run Wyld Swipe Wyld Tap Wyld Show wyld
      </marquee>

      <marquee
        className="text-9xl text-gray-600 bg-[#000000] font-medium font-sans uppercase "
        direction="right"
      >
        Buy Wyld Live Wyld Think Wyld Run Wyld Swipe Wyld Tap Wyld Show wyld
      </marquee>

      <marquee
        className="text-9xl text-gray-500 bg-[#000000] font-medium font-sans uppercase "
        direction=""
      >
        Buy Wyld Live Wyld Think Wyld Run Wyld Swipe Wyld Tap Wyld Show wyld
      </marquee>
    </div>
  );
}

export default Marquee;
