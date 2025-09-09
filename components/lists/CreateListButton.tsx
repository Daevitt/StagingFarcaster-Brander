'use client'

import React, { useState } from 'react';
import { useTaskStore } from '../../lib/store';

export default function CreateListButton() {
  const { addTaskList } = useTaskStore();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTaskList({
        title: title.trim(),
        description: description.trim(),
        taskCount: 0
      });
      setTitle('');
      setDescription('');
      setIsOpen(false);
    }
  };

  if (isOpen) {
    return (
      <div className="crypto-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🚀</span>
          <h3 className="text-lg font-bold neon-text">Create New List</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              LIST_NAME
            </label>
            <input
              type="text"
              placeholder="Enter list title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="web3-input"
              autoFocus
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
              DESCRIPTION
            </label>
            <textarea
              placeholder="Describe your task list (optional)..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="web3-input h-24 resize-none"
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="btn-web3-primary flex-1 relative group"
            >
              <div className="flex items-center justify-center gap-2">
                <span>🎯</span>
                <span>Deploy List</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn-web3-secondary px-4"
            >
              Cancel
            </button>
          </div>
        </form>
        
        <div className="mt-4 text-xs text-gray-400 font-mono text-center">
          💡 Tip: Clear titles get more engagement
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="crypto-card hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group p-4 text-center relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
          ➕
        </div>
        <span className="text-cyan-400 font-semibold text-sm font-mono">
          NEW_LIST.exe
        </span>
        <div className="text-xs text-gray-400 mt-1">
          Click to initialize
        </div>
      </div>
      
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
}
