import React from "react";
import TokenCard from "./TokenCard";
import EventCard from "./EventCard";
import SparkleIcon from "../component/SparkleIcon";
import Typewriter from "../component/Typewriter";

const tokenData = [
  { amount: "$800 token", percentage: "+32.40%", label: "Best candidate" },
  { amount: "$990 token", percentage: "+32.40%", label: "Best candidate" },
  { amount: "$989 token", percentage: "+32.40%", label: "Best candidate" },
];

const eventData = [
  {
    title: "DEVMATCH HACKATON",
    month: "JUN",
    day: "20",
    dateTime: "Thu 10:15",
    location: "New York, NY",
  },
  {
    title: "DEVMATCH HACKATON",
    month: "JUN",
    day: "20",
    dateTime: "Thu 10:15",
    location: "New York, NY",
  },
  {
    title: "DEVMATCH HACKATON",
    month: "JUN",
    day: "20",
    dateTime: "Thu 10:15",
    location: "New York, NY",
  },
  {
    title: "DEVMATCH HACKATON",
    month: "JUN",
    day: "20",
    dateTime: "Thu 10:15",
    location: "New York, NY",
  },
  {
    title: "DEVMATCH HACKATON",
    month: "JUN",
    day: "20",
    dateTime: "Thu 10:15",
    location: "New York, NY",
  },
  {
    title: "DEVMATCH HACKATON",
    month: "JUN",
    day: "20",
    dateTime: "Thu 10:15",
    location: "New York, NY",
  },
];

const EventSectionDevmatch: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="w-full max-w-[1062px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {tokenData.map((token, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full mt-4"
            >
              {" "}
              {/* 添加 margin-top 以调整位置 */}
              <TokenCard {...token} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex z-10 flex-col pl-1.5 mt-14 w-full max-md:mt-10 max-md:max-w-full space-y-8">
        <h2 className="self-start text-xl font-medium text-black max-md:max-w-full">
          Participate in event to network with expert and earn coin !
        </h2>

        <div className="flex flex-col space-y-8 p-4 bg-cyan-400/50 max-w-3xl rounded-lg text-cyan-700">
          <SparkleIcon className="h-8 w-8" />
          <p className="text-lg font-light">
            <Typewriter
              text="You recently changed your passion, here are your new recommendations."
              onFinished={() => {}}
            />
          </p>
        </div>
        <div className="mt-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {eventData.slice(0, 3).map((event, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <EventCard
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/10fde738095a22c9682364d31199ee390f9105e2fc7b0eaa2890221c87caec1b?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
                  {...event}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <EventCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/10fde738095a22c9682364d31199ee390f9105e2fc7b0eaa2890221c87caec1b?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
                {...eventData[3]}
              />
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="grow mt-1.5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {eventData.slice(4).map((event, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                    >
                      <EventCard
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/10fde738095a22c9682364d31199ee390f9105e2fc7b0eaa2890221c87caec1b?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
                        {...event}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a3e44a35c53c74b345e74bb6b9755a415f620f9fd5c7f8234973e1fc5e7ed?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
        alt=""
        className="object-contain self-end -mt-4 mr-5 max-w-full aspect-[1.15] w-[278px] max-md:mr-2.5"
      />
    </section>
  );
};

export default EventSectionDevmatch;
