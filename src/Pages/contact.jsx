import { Button } from "@/components/ui/button";
import React from "react";
import { IoInfinite } from "react-icons/io5";

const Contact = () => {
  const stats = [
    { number: "50+", label: "Completed Projects" },
    { number: "2,143", label: "Cups Of Coffee" },
    { number: "5,326", label: "Hours Spent Coding" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#1A1A1B] text-white">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Decorative element */}
        <div className="flex justify-center mb-12 text-gray-300">
          <div className="w-16 h-16 border-2 border-gray-500 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-7xl flex items-center justify-center font-bold mb-16 animate-fade-in-up">
          Let's w
          <span className="inline-flex items-center justify-center  text-yellow-400 mx-1">
            <IoInfinite className="text-5xl lg:text-6xl" />
          </span>
          rk together
        </h2>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="animate-scale-in">
          <Button
            variant="contact"
            size="lg"
            className="rounded-full bg-[#EEEEEE] cursor-pointer  text-black px-8 py-4 text-lg font-medium"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=kalriyahet@gmail.com",
                "_blank"
              )
            }
          >
            kalriyahet@gmail.com
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            I usually reply faster than 12h.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
