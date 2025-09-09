'use client'

import React, { useState } from 'react';
import { useAuthStore } from '../../lib/store';

export default function UserProfile() {
  const { user, logout } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button 
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-3 p-2 rounded-xl crypto-glass hover:border-cyan-400/50 transition-all duration-300 group"
      >
        <div className="relative">
          {user.pfpUrl && (
            <img 
              src={user.pfpUrl} 
              alt={user.displayName}
              className="w-8 h-8 rounded-full border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors"
            />
          )}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
        </div>
        <div className="text-left">
          <p className="font-semibold text-white text-sm">{user.displayName || user.username}</p>
          <p className="text-cyan-400 text-xs font-mono">@{user.username}</p>
        </div>
        <div className="text-cyan-400 text-xs group-hover:rotate-180 transition-transform duration-300">
          ▼
        </div>
      </button>
      
      {showMenu && (
        <div className="absolute right-0 mt-2 w-56 crypto-glass rounded-xl z-20 overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src={user.pfpUrl} 
                alt={user.displayName}
                className="w-10 h-10 rounded-full border-2 border-purple-400/50"
              />
              <div>
                <p className="font-semibold text-white">{user.displayName}</p>
                <p className="text-gray-400 text-xs font-mono">FID: {user.fid}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="text-center p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <div className="text-sm font-bold text-cyan-400">0</div>
                <div className="text-xs text-gray-400">Points</div>
              </div>
              <div className="text-center p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <div className="text-sm font-bold neon-text-blue">0</div>
                <div className="text-xs text-gray-400">NFTs</div>
              </div>
            </div>
          </div>
          
          <div className="p-2">
            <button 
              onClick={logout}
              className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <span>🔌</span>
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
      
      {showMenu && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
}
