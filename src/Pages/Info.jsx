import React from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";

const Info = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Background animation */}
      <BackgroundPaths />

      {/* Centered wrapper for sm, positioned cards for lg */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen gap-6 px-4 lg:block lg:p-4 lg:mt-0">
        
        {/* First Card */}
        <div className="rounded-xl font-mono tracking-tighter border-[1.3px] bg-background border-black w-full max-w-md p-4
                        lg:absolute lg:w-[26rem] lg:left-100 lg:top-30">
          <span className="text-2xl font-semibold">I'm Het</span>
          <p className="mt-2">
            My journey in the tech world began in 2023 with a fascination for
            the digital realm. From the early days of coding, I've been
            captivated by the limitless possibilities of technology. Let's create
            something amazing together!
          </p>
        </div>

        {/* Second Card */}
        <div className="rounded-xl font-mono tracking-tighter border-[1.3px] bg-background border-black w-full max-w-md p-4
                        lg:absolute lg:w-[26rem] lg:right-100 lg:top-80">
          <span className="text-2xl font-semibold">AKA.</span>
          <p className="mt-2">
            Specialize in AI engineering and web development, crafting
            innovative solutions that bridge the gap between technology and
            creativity. Whether it's building intelligent systems or intuitive
            user interfaces, I love turning ideas into impactful digital
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
