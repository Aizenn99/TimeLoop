import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { FaXTwitter, FaInstagram, FaFigma } from "react-icons/fa6";
import { SiThreads, SiGoogle, SiUnsplash } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
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
        USA: getTime("America/New_York"),
        Japan: getTime("Asia/Tokyo"),
        Australia: getTime("Australia/Sydney"),
        Germany: getTime("Europe/Berlin"),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen min-h-screen p-4 flex flex-col items-center gap-6 bg-black relative">
      {/* Skills */}
      <div className="w-full max-w-[40rem] h-auto rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] border-white text-[#F1F1F1] p-3
                      lg:absolute lg:w-[20rem] lg:h-[17rem] lg:left-20 lg:top-10">
        <div className="flex justify-between items-center px-1">
          <span className="text-2xl font-semibold">SKILLS</span>
          <GoStarFill size={20} />
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <p>UI/UX Design</p>
          <p>Web Development</p>
          <p>AI Integration</p>
          <p>Machine Learning</p>
          <p>Full Stack Development</p>
        </div>
      </div>

      {/* Useful Links */}
      <div className="w-full max-w-[40rem] h-auto rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] border-white text-[#F1F1F1] p-3
                      lg:absolute lg:w-[40rem] lg:h-[17rem] lg:left-105 lg:top-10">
        <span className="text-2xl font-bold">USEFUL LINKS:</span>
        <p className="text-muted-foreground mt-6">
          Connect with me through these platforms
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <div className={iconStyle}><FaXTwitter size={30} /></div>
          <div className={iconStyle}><SiGoogle size={30} /></div>
          <a href="https://www.instagram.com/af.hettt/" target="_blank" rel="noopener noreferrer">
            <div className={iconStyle}><FaInstagram size={30} /></div>
          </a>
          <div className={iconStyle}><FaFigma size={30} /></div>
          <a href="https://github.com/Aizenn99" target="_blank" rel="noopener noreferrer">
            <div className={iconStyle}><LuGithub size={30} /></div>
          </a>
          <a href="https://vercel.com/hets-projects-43691b22" target="_blank" rel="noopener noreferrer">
            <div className={iconStyle}><RiVercelLine size={30} /></div>
          </a>
        </div>
      </div>

      {/* Experiences */}
      <div className="w-full max-w-[40rem] h-auto rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] border-white text-[#F1F1F1] p-3
                      lg:absolute lg:w-[40rem] lg:h-[17rem] lg:left-20 lg:top-84">
        <span className="text-2xl font-semibold">EXPERIENCES</span>
        <div className="flex flex-col gap-1 mt-6">
          <p>Tech Club Co-Founder and Treasurer of CodeWaves</p>
          <p>Web Developer at Introo+</p>
          <p>Freelance UI/UX Designer</p>
        </div>
      </div>

      {/* Time Card */}
      <div className="w-full max-w-[40rem] h-auto rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] border-white text-[#F1F1F1] p-3
                      lg:absolute lg:w-[20rem] lg:h-[17rem] lg:left-185 lg:top-84">
        <div className="flex justify-between items-center px-2">
          <span className="text-2xl font-semibold">CURRENT LOCAL TIMES</span>
        </div>
        <div className="flex flex-col gap-1 px-2 mt-6">
          <p>India: {times.India}</p>
          <p>USA: {times.USA}</p>
          <p>Japan: {times.Japan}</p>
          <p>Australia: {times.Australia}</p>
          <p>Germany: {times.Germany}</p>
        </div>
      </div>

      {/* Projects */}
      <div className="w-full max-w-[40rem] h-auto rounded-xl bg-[#1A1A1D] font-mono tracking-tighter border-[1.3px] border-white text-[#F1F1F1] p-3
                      lg:absolute lg:w-[20rem] lg:h-[35.5rem] lg:left-270 lg:top-10">
        <span className="text-2xl font-semibold">PROJECTS</span>
        <p className="text-muted-foreground text-sm mt-2">
          Here are some of my projects that showcase my skills and creativity.
        </p>
        <div className="flex flex-col gap-2 px-2 mt-6">
          <div>
            <a href="https://apple-nine-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <span className="cursor-pointer">Apple Clone</span>
            </a>
            <p className="text-muted-foreground text-xs">
              iPhone 15 Pro site using React and GSAP animations.
            </p>
          </div>
          <div>
            <a href="https://github.com/Aizenn99/E_commerce" target="_blank" rel="noopener noreferrer">
              <span className="cursor-pointer">E-commerce</span>
            </a>
            <p className="text-muted-foreground text-xs">
              Full MERN site with Admin and User panel.
            </p>
          </div>
          <div>
            <a href="https://github.com/Aizenn99/health-Path" target="_blank" rel="noopener noreferrer">
              <span className="cursor-pointer">Health Path Finder</span>
            </a>
            <p className="text-muted-foreground text-xs">
              Enter symptoms and get possible diseases.
            </p>
          </div>
          <div>
            <a href="https://github.com/Aizenn99/Expense_Tracker" target="_blank" rel="noopener noreferrer">
              <span className="cursor-pointer">Expense Tracker</span>
            </a>
            <p className="text-muted-foreground text-xs">
              Track your income and expenses daily.
            </p>
          </div>
          <div>
            <a href="https://github.com/Aizenn99/EasyTax" target="_blank" rel="noopener noreferrer">
              <span className="cursor-pointer">Easy Tax</span>
            </a>
            <p className="text-muted-foreground text-xs">
              Sell and post your car online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechInfo;
