import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-white px-8 md:px-16 lg:px-24 pt-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div>
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight text-black"
          >
            Travel <br />
            Differently.
          </h1>

          <p
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-gray-600 text-lg md:text-xl mt-8 max-w-xl leading-8"
          >
            Tripwiser brings the world closer to you and helps you explore every
            destination with elegance, comfort, and confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            {/* Your Animated Button */}
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d9f99d_0%,#84cc16_50%,#d9f99d_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-lime-100 px-8 text-base font-semibold text-black backdrop-blur-3xl">
                Start chatting →
              </span>
            </button>

            {/* Your Animated Button */}
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e5e7eb_0%,#9ca3af_50%,#e5e7eb_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black border backdrop-blur-3xl">
                ▶ Play Video
              </span>
            </button>
          </div>

          {/* Footer Users */}
          <div className="flex items-center gap-5 mt-14">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/100?img=11"
                className="w-11 h-11 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/100?img=12"
                className="w-11 h-11 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/100?img=13"
                className="w-11 h-11 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/100?img=14"
                className="w-11 h-11 rounded-full border-2 border-white"
              />
              <div className="w-11 h-11 rounded-full bg-lime-100 border-2 border-white flex items-center justify-center text-sm font-semibold">
                +12k
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-6">
              Join 12,000+ travelers <br />
              exploring differently
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative hidden lg:flex justify-center items-center">
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/08/25/05/1000_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg"
            alt="travel"
            className="w-[90%] h-[700px] object-cover rounded-[40px] shadow-2xl"
          />

          {/* Floating Card 1 */}
          <div className="absolute top-12 left-0 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl w-72">
            <h3 className="text-2xl font-semibold">Paris</h3>
            <p className="text-gray-500 text-sm mt-1">5 days trip</p>
            <p className="text-sm mt-3 text-gray-700">
              Romantic highlights and hidden gems
            </p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-16 right-0 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl w-72">
            <h3 className="text-2xl font-semibold">Rome</h3>
            <p className="text-gray-500 text-sm mt-1">4 days trip</p>
            <p className="text-sm mt-3 text-gray-700">
              Timeless history and local flavors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;