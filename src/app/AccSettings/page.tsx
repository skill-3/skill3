"use client";

import React from "react";
import ProfileInfo from "./ProfileInfo";
import EditButton from "./EditButton";
import useStorage from "@/lib/useStorage";
import useWallet from "@/lib/useWallet";

const MyComponent: React.FC = () => {
  const { getItem, setItem } = useStorage();
  const { wallet, isLoading, isError } = useWallet();
  return (
    <main className="pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <ProfileInfo
          initialName="Merna"
          initialAge={21}
          initialSchool="APU"
          initialPassion=""
        />
      </div>
    </main>
  );
};

export default MyComponent;
