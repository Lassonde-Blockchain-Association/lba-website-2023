"use client";
import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    const chatbotId = process.env.NEXT_PUBLIC_CHATBOT_ID;
    if (typeof chatbotId === "string") {
      script.setAttribute("chatbotId", chatbotId);
    } else {
      console.error("NEXT_PUBLIC_CHATBOT_ID is not defined");
      return;
    }
    script.setAttribute("domain", "www.chatbase.co");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="">
      <iframe
        src={`https://www.chatbase.co/chatbot-iframe/${process.env.NEXT_PUBLIC_CHATBOT_ID}`}
        title="Chatbot"
        style={{ width: "100%", height: "100%", minHeight: "700px" }}
        frameBorder="0"
      />
    </div>
  );
};

export default Chatbot;
