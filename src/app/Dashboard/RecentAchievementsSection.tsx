import Heading from "../../components/Heading";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const achievementList = [
  {
    headingText: "1",
    headingTextDevMatch: "DevMatch",
    headingTextSecondRunnerUp: "Second Runner Up",
  },
  {
    headingText: "2",
    headingTextDevMatch: "DevMatch",
    headingTextSecondRunnerUp: "Third Runner Up",
  },
  {
    headingText: "3",
    headingTextDevMatch: "DevMatch",
    headingTextSecondRunnerUp: "First Runner Up",
  },
  {
    headingText: "4",
    headingTextDevMatch: "DevMatch",
    headingTextSecondRunnerUp: "Pioneer Innovation Medal",
  },
];

export default function RecentAchievementsSection() {
  return (
    // Recent achievements section
    <div className="mr-5 mt-[46px] flex flex-col items-start gap-[26px] self-stretch px-1.5 md:mr-0">
      <Heading size="heading3x1" as="h2" className="ml-2.5 text-black-900 md:ml-0">
        Recent Achievements
      </Heading>
      <div className="w-[96%] md:w-full">
        <div className="flex flex-col gap-[18px]">
          <Suspense fallback={<div>Loading feed...</div>}>
            {achievementList.map((d, index) => (
              <UserProfile {...d} key={`achievementList${index}`} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
