import React from "react";
import { Metadata } from "next";
import page from "."// Make sure the import path to Page is correct

export const metadata: Metadata = {
  title: "Dashboard Overview - Track Your Skill Progress",
  description: "Explore your dashboard to track cognitive, emotional, technical, and leadership abilities.Engage wirh the skill 3 community and view your recent achievements"
};

export default function DashboardPage() {
  return <Page />;
}
