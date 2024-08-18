"use client";

import Link from "next/link";
import NavLinks from "../dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-12 items-end justify-start rounded-md bg-darkBlue p-1 md:h-24"
        href="/"
      >
        <div className="w-30 text-white text-3xl mb-10 ml-3">{"Skill^3"}</div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-black-50 md:block"></div>
      </div>
    </div>
  );
}
