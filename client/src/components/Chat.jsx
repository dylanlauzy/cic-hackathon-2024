import { useAppContext } from "@/context/AppContext";
import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const API_URL = "http://localhost:8000";

function ChatApp() {
  const { chats, selectedGuy, setChats } = useAppContext();
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null); // Create a ref for scrolling to the end

  const messages = chats[selectedGuy] || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom every time messages change
  }, [messages]); // Dependency array ensures this runs only when messages change

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    // Update UI immediately with the user's message and a loading message from the agent
    const optimisticUpdate = [
      ...messages,
      ["user", newMessage],
      ["agent", "..."],
    ];
    setChats({ ...chats, [selectedGuy]: optimisticUpdate });
    setNewMessage("");

    try {
      const response = await fetch(`${API_URL}/message?mbti=${selectedGuy}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage), // Ensure the body is correctly structured
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      const data = await response.json();
      console.log(data);
      // Replace the loading message with the actual response
      // This assumes the API returns the entire chat history including the new message
      setChats({
        ...chats,
        [selectedGuy]: [
          ...messages,
          ["user", newMessage],
          ["agent", data[selectedGuy]],
        ],
      });
    } catch (error) {
      console.error("Fetching error: ", error);
      // Handle failed request, e.g., remove loading message or display an error
      setChats({ ...chats, [selectedGuy]: messages }); // Reverts to the previous state if the request fails
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[640px] p-2">
      <div className="flex-1 p-4 overflow-auto flex flex-col gap-y-2">
        {messages.map((message, index) => (
          <div className="flex gap-x-2">
            {message[0] == "agent" && (
              <Avatar className="self-start border">
                <AvatarImage src={`/images/${selectedGuy}.png`} />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            )}
            <div
              key={index}
              className={`max-w-[40%] text-wrap	break-words border rounded-lg px-4 py-2 ${
                message[0] === "user"
                  ? "bg-blue-300 ml-auto border-blue-500"
                  : "bg-white mr-auto border-gray-300"
              }`}
            >
              {message[1]}
            </div>
            {message[0] == "user" && (
              <Avatar className="self-start border">
                <AvatarImage />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />{" "}
        {/* This div is used as an anchor to scroll to */}
      </div>
      <div className="flex p-4 bg-gray-100 gap-x-2">
        <input
          type="text"
          className="border p-2 w-full rounded-md"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatApp;
