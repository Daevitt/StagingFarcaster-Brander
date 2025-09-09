"use client";

import React, { useState } from "react";
import { useTaskStore } from "../../lib/store";

export default function CreateListButton() {
  const { addTaskList } = useTaskStore();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTaskList({
        title: title.trim(),
        description: description.trim(),
        taskCount: 0,
      });
      setTitle("");
      setDescription("");
      setIsOpen(false);
    }
  };

  if (isOpen) {
    return (
      <div className="p-6 rounded-xl border border-green-500/40 bg-black/90 shadow-[0_0_15px_#00ff99]">
        <h2 className="text-green-400 font-mono text-xl mb-4">+ New List</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="List Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-lg bg-black border border-green-500/40 text-green-300 font-mono focus:outline-none focus:border-green-400"
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded-lg bg-black border border-green-500/40 text-green-300 font-mono focus:outline-none focus:border-green-400"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg border border-green-400 text-green-400 font-mono hover:bg-green-400 hover:text-black transition-all shadow-[0_0_10px_#00ff99]"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg border border-red-400 text-red-400 font-mono hover:bg-red-400 hover:text-black transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 rounded-xl border border-green-400 text-green-400 font-mono hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_10px_#00ff99]"
      >
        + New List
      </button>
      <button
        className="px-5 py-2 rounded-xl border border-green-400 text-green-400 font-mono hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_10px_#00ff99]"
      >
        🎨 Generate NFT
      </button>
      <button
        className="px-5 py-2 rounded-xl border border-green-400 text-green-400 font-mono hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_10px_#00ff99]"
      >
        ➕ Add NFT
      </button>
    </div>
  );
}
