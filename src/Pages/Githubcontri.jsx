import React from "react";
import GitHubCalendar from "react-github-calendar";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

const Githubcontri = () => {
  const fromDate = new Date("2025-01-01"); // Show contributions from Jan 1, 2025

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background p-4">
      <div className="p-4 rounded-xl w-full max-w-5xl flex flex-col font-mono items-center justify-center tracking-tighter border border-black  ">
      <div className="text-white" >
         <DatabaseWithRestApi />
      </div>
       
        <div>
          <h2 className="text-2xl font-bold mb-4 mt-6  text-black font-mono text-center">
            My GitHub Contributions (2025)
          </h2>
        </div>

        <div className="text-black" >

        <GitHubCalendar
          username="Aizenn99"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          colorScheme="light"
          transformData={(data) =>
            data.filter((day) => new Date(day.date) >= fromDate)
          }
        />
        </div>
      </div>
    </div>
  );
};

export default Githubcontri;
