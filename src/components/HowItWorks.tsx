import { TreePalm, Sparkles } from "lucide-react";
import React from "react";
import ExpandableCardDemo from "./expandable-card-demo-standard";

const HowItWorks = () => {
  return (
    <section className="w-full py-28 px-8 md:px-16 lg:px-24 bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            How it works
          </h2>

          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-5xl md:text-6xl font-semibold mt-4 leading-tight"
          >
            Start chatting <br /> with Tripwiser
          </h1>

          <p className="text-gray-600 mt-6 max-w-lg leading-7">
            Tell us what you’re looking for, and our AI will craft a
            personalized travel plan tailored to your interests, time, and
            budget.
          </p>

          {/* SUGGESTIONS */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              "Best beaches in Bali",
              "3 day trip to Paris",
              "Budget trip to Goa",
              "Hidden gems in Italy",
            ].map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium hover:bg-gray-100 transition"
              >
                <TreePalm size={16} />
                {item}
              </button>
            ))}
          </div>

          {/* FEATURE */}
          <div className="mt-12 bg-gray-50 rounded-3xl p-6 flex gap-5 items-start shadow-sm">
            <div className="p-3 bg-lime-100 rounded-xl">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Instant AI Recommendations
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Get fast, personalized suggestions based on your travel goals.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT → YOUR EXPANDABLE CARD */}
        <div className="w-full">
          <div className="bg-gray-50 p-6 rounded-3xl shadow-sm">
            <ExpandableCardDemo />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;