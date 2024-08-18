"use client";

import React, { useEffect, useState } from "react";
import EventSection from "./EventSection";
import useStorage from "@/lib/useStorage";
import EventSectionDevmatch from "./EventSectionDevmatch";
import SparkleIcon from "../component/SparkleIcon";

const MainComponent: React.FC = () => {
  const { getItem } = useStorage();
  const [passion, setPassion] = useState<string>("");

  useEffect(() => {
    const currentPassion = getItem("passion");
    if (currentPassion) {
      setPassion(currentPassion);
    }
  }, []);
  return (
    <main className="flex flex-col">
      {passion == "blockchain" ? <EventSectionDevmatch /> : <EventSection />}
    </main>
  );
};

export default MainComponent;
