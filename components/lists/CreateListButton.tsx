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
      <div className="crypto-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🚀</span>
          <h2 className="text-xl font-semibold">Create New List</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="List Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700"
      >
        + New List
      </button>
      <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700">
        🎨 Generate NFT
      </button>
      <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700">
        ➕ Add NFT
      </button>
    </div>
  );
}
