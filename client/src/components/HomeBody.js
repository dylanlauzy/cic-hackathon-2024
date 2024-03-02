"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const HomeBody = () => {
  const { question, setQuestion } = useAppContext();
  const router = useRouter(); // Instantiate the router

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("results");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/blue.png')" }}
    >
      <h1 className="text-blue-500 text-6xl font-bold mb-6">
        ASK YOUR ISSUE...
      </h1>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <input
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            placeholder="type in your message"
            className="pl-4 pr-20 py-3 rounded-md text-lg w-full"
          />
          <button
            className="absolute right-0 top-0 bottom-0 bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeBody;

