"use client";

import { useState } from "react";

export default function AiPlaygroundPage() {
  // Commented out chat UI for debugging
  // import { useChat } from '@ai-sdk/react';
  // const { messages, input, handleInputChange, handleSubmit, status, error, append } = useChat({ ... });

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");
    try {
      const res = await fetch("/api/rehab-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) throw new Error("API error");
      const reader = res.body?.getReader();
      if (reader) {
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          setResponse((prev) => prev + chunk);
        }
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        AI Playground (Google Model Debug)
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type a prompt..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading || !prompt.trim()}
        >
          Send
        </button>
      </form>
      {loading && <div className="italic text-gray-500">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {response && (
        <div className="p-2 rounded border bg-white/80 whitespace-pre-wrap">
          <strong>Response:</strong>
          <div>{response}</div>
        </div>
      )}
    </div>
  );
}
