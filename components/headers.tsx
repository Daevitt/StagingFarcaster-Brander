"use client";

import React from "react";
import CreateListButton from "./lists/CreateListButton";

export default function Header() {
  return (
    <header className="w-full p-4 flex items-center justify-between border-b border-green-500/30 bg-black/80 backdrop-blur-md shadow-[0_0_20px_#00ff99]">
      <h1 className="text-green-400 font-mono text-2xl tracking-widest">
        🚀 Farcaster Web3
      </h1>
      <div className="flex gap-3">
        <CreateListButton />
      </div>
    </header>
  );
}
