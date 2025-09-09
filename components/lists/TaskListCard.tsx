'use client'

import React from 'react'
import type { TaskList } from '@/lib/types'

interface TaskListCardProps {
  list: TaskList
  onClick?: () => void
  onDelete?: () => void
}

export default function TaskListCard({ list, onClick, onDelete }: TaskListCardProps) {
  return (
    <div className="crypto-card group cursor-pointer relative overflow-hidden">
      <div onClick={onClick} className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-lg">
              📝
            </div>
            <div>
              <h3 className="font-bold text-lg text-white group-hover:neon-text transition-all duration-300">
                {list.title}
              </h3>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-cyan-400 font-mono">ID: {list.id.slice(-6)}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">
                  {new Date(list.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400 font-mono">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Description */}
        {list.description && (
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {list.description}
          </p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/10">
            <div className="text-lg font-bold neon-text-purple">{list.taskCount}</div>
            <div className="text-xs text-gray-400 font-mono">TASKS</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/10">
            <div className="text-lg font-bold neon-text">0</div>
            <div className="text-xs text-gray-400 font-mono">COMPLETED</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10">
            <div className="text-lg font-bold text-green-400">0</div>
            <div className="text-xs text-gray-400 font-mono">POINTS</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1 font-mono">
            <span>PROGRESS</span>
            <span>0%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-1.5 rounded-full w-0 transition-all duration-500"></div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button 
            onClick={onClick}
            className="flex-1 btn-web3-primary text-xs py-2 relative group"
          >
            <span>Enter List</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onDelete()
              }}
              className="px-3 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-200 text-xs"
            >
              🗑️
            </button>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           style={{
             background: 'linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981, #8b5cf6)',
             backgroundSize: '300% 300%',
             animation: 'gradientShift 3s ease infinite',
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             padding: '2px'
           }}>
      </div>
    </div>
  )
}
