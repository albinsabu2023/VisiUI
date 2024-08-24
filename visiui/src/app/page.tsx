"use client";

import React from "react";
import Endpoint from "@/data-components/Endpoint";
import Nav from "@/ui-components/Navbar";
import Footer from "@/ui-components/footer";
import "../app/globals.css";
import {notFound} from "next/navigation"

export function NotFoundCatchAll() {
  notFound()
}

const sampleValue = new Endpoint<string>({ value: "Edit me!" });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900 bg-white">
      <Nav />
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow text-gray-900 dark:text-white"></div>
      <Footer />
    </div>
  );
}
