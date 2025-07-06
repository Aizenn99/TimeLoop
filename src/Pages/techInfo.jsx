import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Icons } from "@/components/social-icons"; // adjust path if needed

const TechInfo = () => {
  return (
    <div className="w-screen h-screen p-4 flex ">
    <div><Dock direction="middle">
        <DockIcon>
          <Icons.gitHub className="size-6 text-black fill-current" />
        </DockIcon>
        <DockIcon>
          <Icons.notion className="size-6" />
        </DockIcon>
        <DockIcon>
          <Icons.googleDrive className="size-6" />
        </DockIcon>
        <DockIcon>
          <Icons.whatsapp className="size-6" />
        </DockIcon>
        {/* Add more icons like Figma, VSCode, Instagram once added */}
      </Dock></div>
      
    </div>
  );
};

export default TechInfo;
