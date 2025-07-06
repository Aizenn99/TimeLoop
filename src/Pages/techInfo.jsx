import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiThreads, SiGoogle, SiUnsplash } from "react-icons/si";
import { LuGithub } from "react-icons/lu";

const TechInfo = () => {
  const iconStyle =
    "bg-white text-black rounded-2xl cursor-pointer w-16 h-16 flex items-center justify-center shadow-md hover:scale-110 transition-transform";

  const [times, setTimes] = useState({
    India: "",
    USA: "",
    Japan: "",
    Australia: "",
    Germany: "",
  });

  const getTime = (timeZone) => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date());
  };

  useEffect(() => {
    const updateTimes = () => {
      setTimes({
        India: getTime("Asia/Kolkata"),
        USA: getTime("America/New_York"), // you can change this based on region
        Japan: getTime("Asia/Tokyo"),
        Australia: getTime("Australia/Sydney"),
        Germany: getTime("Europe/Berlin"),
      });
    };

    updateTimes(); // initial call
    const interval = setInterval(updateTimes, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="w-screen h-screen p-4 flex bg-black ">
      <div className="relative p-2 ">
        {/* Skills Left */}
        <div className="absolute left-20  top-10 rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] text-[#F1F1F1] border-white w-[20rem] h-[17rem] p-3">
          <div className="flex justify-between items-center px-1  ">
            <span className="text-2xl font-semibold">SKILLS</span>
            <GoStarFill size={20} />
          </div>
          <div className="flex flex-col gap-1  mt-10">
            <p> UI/UX Design</p>
            <p>Web Development</p>
            <p>AI Integration</p>
            <p>Machine Learning</p>
            <p> Full Stack Development</p>
          </div>
        </div>

        {/* Useful Links */}
        <div className="absolute left-105  top-10 rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] text-[#F1F1F1] border-white w-[40rem] h-[17rem] p-3">
          <span className="text-2xl font-bold">USEFULL LINKS:</span>
          <div className="p-3">
            <p className="text-muted-foreground mt-12">
              Connect with me through these platforms
            </p>
            <div className="flex gap-3 mt-4 items-center">
              <div className={iconStyle}>
                <FaXTwitter size={30} />
              </div>
              <div className={iconStyle}>
                <SiThreads size={30} />
              </div>
              <div className={iconStyle}>
                <SiGoogle size={30} />
              </div>
              <div className={iconStyle}>
                <FaInstagram size={30} />
              </div>
              <div className={iconStyle}>
                <SiUnsplash size={30} />
              </div>
              <div className={iconStyle}>
                <a
                  href="https://github.com/Aizenn99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-20 top-84 rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] text-[#F1F1F1] border-white w-[40rem] h-[17rem] p-3">
          <span className="text-2xl font-semibold">EXPERIENCES</span>
          <div className="flex flex-col gap-1 mt-10">
            <p>Tech Club Co-Founder and Treasurer of CodeWaves</p>
            <p>Web Developer at Introo+ </p>
            <p>Freelance UI/UX Designer</p>
          </div>
        </div>

        {/* Time Box */}
        <div className="absolute left-185 top-84 rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] text-[#F1F1F1] border-white w-[20rem] h-[17rem] p-3">
          <div className="flex justify-between items-center px-2 ">
            <span className="text-2xl font-semibold">CURRENT LOCAL TIMES</span>
          </div>
          <div className="flex flex-col gap-1 px-2 mt-10">
            <p>India: {times.India}</p>
            <p>USA: {times.USA}</p>
            <p>Japan: {times.Japan}</p>
            <p>Australia: {times.Australia}</p>
            <p>Germany: {times.Germany}</p>
          </div>
        </div>

        {/* Empty Right Tall Box */}
        <div className="absolute left-270  top-10 rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] text-[#F1F1F1] border-white w-[20rem] h-[35.5rem] p-3">
          <span className="text-2xl font-semibold">PROJECTS</span>
          <p className="text-muted-foreground text-sm mt-2">
            Here are some of my projects that showcase my skills and creativity.
          </p>
          <div className="flex flex-col gap-2 px-2 mt-10">
            <div>
              <a
                href="https://apple-nine-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer">Apple Clone</span>
              </a>
              <p className="text-muted-foreground text-xs">
                Iphone 15 Pro website with react js and Gsap Animations and
                text.
              </p>
            </div>

            <div>
              <a
                href="https://github.com/Aizenn99/E_commerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer">E-commerce</span>
              </a>
              <p className="text-muted-foreground text-xs">
                A Clothing Brand Website with MERN Stack, With two panels admin
                and user.
              </p>
            </div>

            <div>
              <a
                href="https://github.com/Aizenn99/health-Path"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer">Heath Path Finder</span>
              </a>
              <p className="text-muted-foreground text-xs">
                App which tells the dieseases of the body just add the symptom
                and get the result.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/Aizenn99/Expense_Tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer">Expense Tracker</span>
              </a>
              <p className="text-muted-foreground text-xs">
                Track your daily expenses with adding Incomes and Expenses.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/Aizenn99/EasyTax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer">Easy Tax</span>
              </a>
              <p className="text-muted-foreground text-xs">
                A Car selling website in which you can also add your car for a
                Sell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechInfo;
