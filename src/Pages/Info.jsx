import React from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";

const Info = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background animation */}
      <BackgroundPaths />

      <div className="p-4 relative z-10">
        <div className="absolute left-100 top-30 rounded-xl font-mono tracking-tighter border-[1.3px] bg-background border-black w-[26rem] h-[17rem] p-3">
          <span className="text-2xl font-semibold">I'm Het</span>
          <br />
          <p className="mt-2 ">
            My journey in the tech world began in 2023 with a fascination for
            the digital realm. From the early days of coding, I've been
            captivated by the limitless possibilities of technology.Let's create
            something amazing together!
          </p>
        </div>
        <div className="absolute right-100 top-80 rounded-xl font-mono tracking-tighter border-[1.3px] bg-background border-black w-[26rem] h-[17rem] p-3">
          <span className="text-2xl font-semibold">AKA.</span>
          <br />
          <p className="mt-2 ">
            I specialize in AI engineering and web development, crafting
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


