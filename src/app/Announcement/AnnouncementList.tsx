import React from 'react';
import AnnouncementItem from './AnnouncementItem';

const announcements = [
  { id: 'FIG-123', title: 'Complete course with coursera', progress: 3, priority: 'High', date: 'June 11', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-122', title: 'answer quiz', progress: 5, priority: 'Low', date: 'June 11', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-120', title: 'complete assignments', progress: 2, priority: 'Low', date: 'June 9', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-119', title: 'discuss with mentor and friends', progress: 1, priority: 'Medium', date: 'June 5', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-118', title: 'change and complete task on time', progress: 5, priority: 'Medium', date: 'June 5', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-115', title: 'Revise copy on About page', progress: 4, priority: 'Low', date: 'May 25', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-114', title: 'Publish HackerNews post', progress: 2, priority: 'Low', date: 'May 21', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-113', title: 'Review image licensing for header section images', progress: 3, priority: 'High', date: 'May 19', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-112', title: 'Accessibility focused state for input fields', progress: 0, priority: 'High', date: 'May 16', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-111', title: 'Header IA revision to support addition of blog page', progress: 1, priority: 'High', date: 'May 8', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
  { id: 'FIG-110', title: 'Press outbound', progress: 3, priority: 'Medium', date: 'May 5', owner: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0adb95ea9220904e2f9431d445470344cbb4385928c8a75c34167b3ee397f087?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f' },
];


const AnnouncementList: React.FC = () => {
  return (
    <section className="mt-5 mr-6 max-w-full w-[100%] max-md:mr-2.5 max-md:max-w-full">
      {announcements.map((announcement) => (
        <AnnouncementItem key={announcement.id} {...announcement} />
      ))}
      <button className="gap-2 self-end px-4 mt-20 mr-12 text-base font-medium text-white whitespace-nowrap bg-teal-500 rounded-lg min-h-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:mr-2.5">
        Next
      </button>
    </section>
  );
};

export default AnnouncementList;