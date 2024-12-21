"use client";

import { useChat } from "ai/react";
import { useState } from "react";
import { Message as VercelMessage } from "ai";

interface ToolCall {
  toolName: string;
  args: Record<string, unknown>;
  result?: Record<string, unknown>;
}

interface Message extends VercelMessage {
  toolCalls?: ToolCall[];
}

export default function Chat() {
  const [showSetup, setShowSetup] = useState(true);
  const [keys, setKeys] = useState({
    walletKey: "",
    xaiKey: "",
  });

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    headers: {
      "X-Wallet-Key": keys.walletKey,
      "X-Xai-Key": keys.xaiKey,
    },
    maxSteps: 15,
  });

  if (showSetup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowSetup(false);
          }}
          className="bg-white p-6 rounded-lg max-w-md w-full"
        >
          <h2 className="text-xl font-bold mb-4 text-black">Setup Required</h2>
          <div className="mb-4">
            <label className="block mb-2 text-black">Wallet Private Key:</label>
            <input
              type="password"
              className="w-full p-2 border rounded text-black"
              value={keys.walletKey}
              onChange={(e) =>
                setKeys((prev) => ({ ...prev, walletKey: e.target.value }))
              }
              placeholder="0x..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">XAI Key:</label>
            <input
              type="password"
              className="w-full p-2 border rounded text-black"
              value={keys.xaiKey}
              onChange={(e) =>
                setKeys((prev) => ({ ...prev, xaiKey: e.target.value }))
              }
              placeholder="Enter your XAI key"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Start Chat
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((m: Message) => (
        <div
          key={m.id}
          className={`p-4 rounded-lg mb-2 ${
            m.role === "assistant"
              ? "bg-gray-100 text-black"
              : "bg-blue-500 text-white"
          }`}
        >
          <div>{m.content}</div>
          {m.toolCalls && (
            <pre className="mt-2 bg-gray-800 text-white p-2 rounded text-sm">
              {JSON.stringify(m.toolCalls, null, 2)}
            </pre>
          )}
        </div>
      ))}

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-md p-4 bg-white border-t"
      >
        <input
          className="w-full p-4 border rounded text-black"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
