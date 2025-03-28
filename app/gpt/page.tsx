"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Side from "./Side";


const DataEntryModal = dynamic(() => import('./Dialouge'), { ssr: false });

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

let SpeechRecognition: any;
let recognition: any;

interface JSXMessage {
  sender: string;
  text: any;
}

const ChatComponent = ({isUsername}:{isUsername:any}) => {
  const searchParams = useSearchParams();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [shouldSend, setShouldSend] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const [username,setName]= useState("You");

  const getCookie = (cookieName:any) => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return ""; // Return empty string if cookie not found
  };


  useEffect(() => {
    const leadCookie = getCookie('lead'); // Get the 'lead' cookie value
    setName(leadCookie); // Set the state with the cookie value
  }, [isLoading,isUsername]);


  const names = ["Rosie", "Alexa", "Amanda", "Sara", "Maya"];
  const [assistantName, setAssistantName] = useState(""); // Initially empty

  const [messages, setMessages] = useState<JSXMessage[]>([
    { sender: assistantName || "Assistant", text: "Hi, welcome to ChatiDea! Go ahead and send me a message. 😄" },
  ]);

  useEffect(() => {
    // Only set the assistant name after the component mounts
    const randomName = names[Math.floor(Math.random() * names.length)];
    setAssistantName(randomName);

    // Update the initial message with the assistant's name
    setMessages([{ sender: randomName, text: "Hi, welcome to ChatZone! Go ahead and send me a message. 😄" }]);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        setShouldSend(!shouldSend);
      };

      recognition.onend = () => setIsListening(false);
      recognition.onerror = (event: any) => {
        console.error("Speech Recognition Error", event.error);
        setIsListening(false);
      };
    }
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const initialMessage = searchParams.get("initial-message");
    if (initialMessage && typeof initialMessage === "string") {
      setInput(decodeURIComponent(initialMessage));
      setShouldSend(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (shouldSend && input.trim() !== "") {
      handleSendMessage();
    }
  }, [shouldSend]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: username !="" ? username : "You", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://chat.vetaai.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input,name:username }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        const formattedResponse = formatResponse(data.response);
        const newMessageList = [...newMessages, { sender: assistantName, text: formattedResponse }];
        setMessages(newMessageList);
      } else {
        setMessages([...newMessages, { sender: assistantName, text: "Error: Failed to fetch response." }]);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setMessages([...newMessages, { sender: assistantName, text: "Error: Something went wrong." }]);
    }
  };

  const formatResponse = (response: string) => {
    const formatted = response.split("\n").map((line, index) => (
      <span key={index}>
        {line.split(/(https?:\/\/[^\s]+|\*\*[^*]+\*\*)/g).map((part, i) => {
          if (part.match(/https?:\/\/[^\s]+/)) {
            return (
              <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {part}
              </a>
            );
          }
          if (part.match(/\*\*[^*]+\*\*/)) {
            const boldText = part.slice(2, -2);
            return <strong key={i}>{boldText}</strong>;
          }
          return part;
        })}
        <br />
      </span>
    ));

    return formatted;
  };

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div className="row gpt">
      <Side />
      <div className="col-md-9">
        <section className="msger">
          <main className="msger-chat" ref={chatRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`msg ${msg.sender === username  ? "right-msg" : "left-msg"}`}>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">{msg.sender}</div>
                  </div>
                  <div className="msg-text">{msg.text}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="msg left-msg">
                <div className="msg-bubble">
                  <div className="msg-text">typing...</div>
                </div>
              </div>
            )}
          </main>

          <form className="msger-inputarea" onSubmit={handleSendMessage}>
            <button
              type="button"
              className={`msger-mic-btn ${isListening ? "listening" : ""}`}
              onClick={isListening ? stopListening : startListening}
            >
              {isListening ? <i className="fa-solid fa-stop"></i> : <i className="fa-solid fa-microphone"></i>}
            </button>
            <input
              type="text"
              className="msger-input"
              placeholder="Enter your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="msger-send-btn">
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

const Page = () => {
  const [isUsername,setIsUsername] = useState(false);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataEntryModal setusername={setIsUsername}  />
      <ChatComponent isUsername={isUsername} />
    </Suspense>
  );

}

export default Page;
