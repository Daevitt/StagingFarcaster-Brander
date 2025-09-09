'use client'

import React from 'react';
import { useAuthStore } from '../../lib/store';

export default function LoginButton() {
  const { login, setLoading, isLoading } = useAuthStore();

  const handleLogin = async () => {
    setLoading(true);
    
    try {
      // Aquí iría tu lógica de autenticación con Farcaster
      // Por ahora, simulamos un login exitoso
      const mockUser = {
        fid: 12345,
        username: 'testdaevitt',
        displayName: 'Test Daevitt',
        pfpUrl: 'https://raw.githubusercontent.com/Daevitt/FarcasterMiniApp/refs/heads/main/logos/perfil%20100%208bits%20brander.png'
      };
      
      // Simular delay de API
      setTimeout(() => {
        login(mockUser);
        setLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleLogin}
      disabled={isLoading}
      className="btn-web3-primary w-full relative group overflow-hidden"
    >
      <div className="flex items-center justify-center gap-3">
        {isLoading ? (
          <>
            <div className="web3-spinner w-5 h-5"></div>
            <span>Connecting to Web3...</span>
          </>
        ) : (
          <>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-sm">
              🔗
            </div>
            <span className="font-bold">Connect with Farcaster</span>
          </>
        )}
      </div>
      
      {!isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      )}
    </button>
  );
}
