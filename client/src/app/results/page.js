"use client";

import NavBar from "@/components/NavBar";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";

const API_ENDPOINT = "http://localhost:8000";

const ResultsBody = () => {
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
      <div>
        {Object.keys(chats).length ? (
          <></>
        ) : (
          // <div>
          //   {/* Render your results here */}
          //   {results.map((result, index) => (
          //     <div key={index}>
          //       {/* Render each result */}
          //       {result.name}{" "}
          //       {/* Replace `name` with whatever field your data contains */}
          //     </div>
          //   ))}
          // </div>
          <p>Loading results...</p>
        )}
      </div>
    </>
  );
};

export default ResultsBody;
