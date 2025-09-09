'use client'

import  LoginButton  from '../components/auth/LoginButton'
import  UserProfile  from '../components/auth/UserProfile'
import  TaskListCard  from '../components/lists/TaskListCard'
import  CreateListButton  from '../components/lists/CreateListButton'
import { useState, useEffect } from "react"
import { useAuthStore, useTaskStore } from '../lib/store'
import { markAppAsReady } from '../lib/farcaster'
import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

useEffect(() => {
  sdk.actions.ready();
}, []);

export default function HomePage() {
  const { isAuthenticated } = useAuthStore()
  const { taskLists } = useTaskStore()
  const [isLoading, setIsLoading] = useState(true)

  // Marcar la app como lista cuando se carga
  useEffect(() => {
    const initApp = async () => {
      await markAppAsReady()
      setIsLoading(false)
    }
    
    initApp()
  }, [])

  // Mostrar loading mientras se inicializa
  if (isLoading) {
    return (
      <div className="miniapp-container">
        <div className="web3-gradient-bg particles-bg min-h-screen flex items-center justify-center">
          <div className="crypto-glass rounded-2xl p-8 text-center">
            <div className="web3-spinner mx-auto mb-6"></div>
            <p className="text-white text-lg font-medium">Initializing TaskList...</p>
            <p className="text-gray-300 text-sm mt-2">🚀 Connecting to Web3</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="miniapp-container">
      <div className="web3-gradient-bg particles-bg min-h-screen">
        {/* Header */}
        <header className="crypto-glass web3-header p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-xl">
                📋
              </div>
              <div>
                <h1 className="text-xl font-bold text-white neon-text">TaskList</h1>
                <p className="text-xs text-gray-300">Web3 Task Manager</p>
              </div>
            </div>
            {isAuthenticated && <UserProfile />}
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 pb-20">
          {!isAuthenticated ? (
            /* Landing Page for Non-Authenticated Users */
            <div className="text-center text-white">
              <div className="mb-8 mt-12">
                {/* Hero Section */}
                <div className="crypto-glass rounded-3xl p-8 mb-8">
                  <div className="text-6xl mb-4">🎯</div>
                  <h2 className="text-3xl font-bold mb-4 neon-text-purple">
                    Complete Tasks, Earn NFTs
                  </h2>
                  <p className="text-lg opacity-90 mb-6 text-gray-200">
                    Join the Web3 revolution of productivity and compete for exclusive digital rewards
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Live on Base
                    </span>
                    <span>•</span>
                    <span>Powered by Farcaster</span>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="grid gap-4 mb-8">
                  <div className="crypto-card group cursor-pointer">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
                    <h3 className="font-bold mb-2 text-lg neon-text">Compete & Earn</h3>
                    <p className="text-sm text-gray-300">
                      Climb the leaderboard by completing tasks and earn your place among Web3 achievers
                    </p>
                    <div className="mt-3 text-xs text-cyan-400 font-mono">[POINTS + RANKING]</div>
                  </div>
                  
                  <div className="crypto-card group cursor-pointer">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎨</div>
                    <h3 className="font-bold mb-2 text-lg neon-text">Exclusive NFTs</h3>
                    <p className="text-sm text-gray-300">
                      Top performers receive unique digital collectibles minted on Base network
                    </p>
                    <div className="mt-3 text-xs text-purple-400 font-mono">[MINT ON BASE]</div>
                  </div>
                  
                  <div className="crypto-card group cursor-pointer">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🤝</div>
                    <h3 className="font-bold mb-2 text-lg neon-text">Web3 Community</h3>
                    <p className="text-sm text-gray-300">
                      Connect with fellow builders in the decentralized Farcaster ecosystem
                    </p>
                    <div className="mt-3 text-xs text-green-400 font-mono">[SOCIAL LAYER]</div>
                  </div>
                </div>
                
                {/* CTA Section */}
                <div className="crypto-glass rounded-2xl p-6">
                  <p className="text-sm text-gray-300 mb-4">Ready to join the Web3 productivity revolution?</p>
                  <LoginButton />
                  <p className="text-xs text-gray-400 mt-3 font-mono">
                    🔐 Secure authentication via Farcaster
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Dashboard for Authenticated Users */
            <div>
              {/* Welcome Section */}
              <div className="crypto-glass rounded-2xl p-6 mb-6 text-center">
                <h2 className="text-2xl font-bold neon-text mb-2">Welcome to the Future</h2>
                <p className="text-gray-300 text-sm">Your Web3 productivity dashboard</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">🌐 Active Lists</h3>
                  <CreateListButton />
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="stats-card">
                    <div className="text-2xl font-bold neon-text">{taskLists.length}</div>
                    <div className="text-xs text-gray-300 font-mono">ACTIVE_LISTS</div>
                  </div>
                  <div className="stats-card">
                    <div className="text-2xl font-bold neon-text-purple">0</div>
                    <div className="text-xs text-gray-300 font-mono">NFTS_EARNED</div>
                  </div>
                </div>

                {/* Performance Indicator */}
                <div className="crypto-card mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-300">Performance Level</p>
                      <p className="text-lg font-bold neon-text">ROOKIE 🚀</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-300">Next Reward</p>
                      <p className="text-sm font-mono text-cyan-400">50 points</p>
                    </div>
                  </div>
                  <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>

              {/* Task Lists */}
              <div className="space-y-4">
                {taskLists.length === 0 ? (
                  <div className="crypto-card text-center py-12">
                    <div className="text-5xl mb-4">🏗️</div>
                    <h3 className="font-bold mb-2 text-xl neon-text">Ready to Build?</h3>
                    <p className="text-sm text-gray-300 mb-6">
                      Create your first task list and start earning in the Web3 ecosystem
                    </p>
                    <div className="max-w-xs mx-auto">
                      <CreateListButton />
                    </div>
                    <p className="text-xs text-gray-400 mt-4 font-mono">
                      🎯 Each completed task = points toward NFT rewards
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-300 font-mono">
                        📊 {taskLists.length} LIST{taskLists.length !== 1 ? 'S' : ''} ACTIVE
                      </p>
                    </div>
                    {taskLists.map((list) => (
                      <TaskListCard key={list.id} list={list} />
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 p-4">
          <div className="max-w-sm mx-auto">
            <div className="crypto-glass rounded-xl p-3 text-center">
              <p className="text-xs text-gray-300 font-mono">
                🚀 Powered by Farcaster • Built on Base
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}



