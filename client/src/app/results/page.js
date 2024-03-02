"use client";

import NavBar from "@/components/NavBar";
import ResultBody from "@/components/ResultsBody";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";

const API_ENDPOINT = "http://localhost:8000";

const Results = () => {
  const { question, chats, setChats } = useAppContext();

  useEffect(() => {
    console.log(question);
    if (question) {
      const fetchResults = async () => {
        const response = await fetch(`${API_ENDPOINT}/question`, {
          method: "POST", // Specify the method
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
          body: JSON.stringify(question),
        });
        const data = await response.json();
        setChats(data);

        console.log(data);
      };

      fetchResults().catch(console.error);
    }
  }, [question]); // This effect depends on the `question` parameter

  // Render your results or a loading state
  return (
    <>
      <NavBar />
      <div
        className="pt-16 flex"
        style={{
          backgroundImage: "url('/images/blue.png')",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        {Object.keys(chats).length ? <ResultBody /> : <p className="m-auto text-3xl">Loading results...</p>}
      </div>
    </>
  );
};

export default Results;
