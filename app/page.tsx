"use client";

import { useState, useEffect } from "react";
import { useAuthStore, useTaskStore } from "../lib/store";
import { sdk } from "@farcaster/miniapp-sdk";

export default function Page() {
  const { isAuthenticated } = useAuthStore();
  const { taskLists } = useTaskStore();
  const [isLoading, setIsLoading] = useState(true);

  // Hook al inicio del componente
  useEffect(() => {
    sdk.actions.ready(); // Avisar a Farcaster que la miniapp está lista
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="text-green-400">Loading...</div>;
  }

  return (
    <div className="text-green-400 font-mono">
      {isAuthenticated ? (
        <ul>
          {taskLists.map((list, idx) => (
            <li key={idx} className="border-b border-green-500/30 py-2">
              {list.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
