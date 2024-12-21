"use client";

import { useChat } from "ai/react";
import { useState, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "assistant" | "system" | "data";
  content: string;
  toolResults?: any[];
}

export default function Chat() {
  const [showSetup, setShowSetup] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [keys, setKeys] = useState({
    walletKey: "",
    xaiKey: "",
    openaiKey: "",
  });

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
      headers: {
        "X-Wallet-Key": keys.walletKey,
        "X-Xai-Key": keys.xaiKey || "",
        "X-OpenAI-Key": keys.openaiKey || "",
      },
      onResponse: async (response) => {
        // No return value needed - useChat will handle the response
        await response.json();
      },
    });

  useEffect(() => {
    setShowSetup(true);
    setMounted(true);
  }, []);

  const handleSetupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSetup(false);
  };

  if (showSetup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <form
          onSubmit={handleSetupSubmit}
          className="bg-white p-6 rounded-lg max-w-md w-full"
        >
          <h2 className="text-xl font-bold mb-4 text-black">Setup Required</h2>
          <div className="mb-4">
            <label className="block mb-2 text-black">Wallet Private Key:</label>
            <input
              type="password"
              className="w-full p-2 border rounded text-black placeholder:text-gray-500"
              value={keys.walletKey}
              onChange={(e) =>
                setKeys((prev) => ({ ...prev, walletKey: e.target.value }))
              }
              placeholder="0x..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">XAI Key (Optional):</label>
            <input
              type="password"
              className="w-full p-2 border rounded text-black placeholder:text-gray-500"
              value={keys.xaiKey}
              onChange={(e) =>
                setKeys((prev) => ({ ...prev, xaiKey: e.target.value }))
              }
              placeholder="Enter your XAI key"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">
              OpenAI Key (Optional):
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded text-black placeholder:text-gray-500"
              value={keys.openaiKey}
              onChange={(e) =>
                setKeys((prev) => ({ ...prev, openaiKey: e.target.value }))
              }
              placeholder="Enter your OpenAI key"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Start Chat
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="flex-1 overflow-y-auto">
        {messages.map((m: Message) => (
          <div
            key={m.id}
            className={`mb-4 ${
              m.role === "assistant"
                ? "bg-gray-100 p-4 rounded-lg border border-gray-200"
                : "bg-blue-500 text-white p-4 rounded-lg"
            }`}
          >
            <div className="font-bold mb-2">
              {m.role === "assistant" ? "🤖 AI" : "👤 You"}:
            </div>
            <div className="whitespace-pre-wrap">
              {m.content}
              {m.toolResults && (
                <pre className="mt-2 bg-gray-800 text-white p-2 rounded text-sm">
                  {JSON.stringify(m.toolResults, null, 2)}
                </pre>
              )}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-md p-4 bg-white border-t"
      >
        <div className="relative">
          <input
            className="w-full p-4 pr-12 border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-600 text-black placeholder:text-gray-500"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            {isLoading ? (
              <span className="animate-pulse">...</span>
            ) : (
              <span className="text-xl">→</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
