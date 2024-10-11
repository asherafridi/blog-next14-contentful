"use client"
import React, { useState, useEffect, useRef } from 'react';

// Extend the window object for SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

interface JSXMessage {
    sender: string;
    text: any; // Or `Element[]`, depending on your JSX setup
  }

const Page = () => {
    const [messages, setMessages] = useState<JSXMessage[]>([
        { sender: 'GPT', text: 'Hi, welcome to SimpleChat! Go ahead and send me a message. 😄' },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        recognition.onresult = (event:any) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            setIsListening(false);
            handleSendMessage();
        };

        recognition.onend = () => setIsListening(false);
        recognition.onerror = (event:any) => {
            console.error('Speech Recognition Error', event.error);
            setIsListening(false);
        };
    }, []);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (input.trim() === '') return;

        const newMessages = [...messages, { sender: 'You', text: input }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('https://cztiz-chatbot.vercel.app/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            setIsLoading(false);

            if (response.ok) {
                const formattedResponse = formatResponse(data.response);
                const newMessageList = [...newMessages, { sender: 'GPT', text: formattedResponse }];
                setMessages(newMessageList);
            } else {
                setMessages([...newMessages, { sender: 'GPT', text: 'Error: Failed to fetch response.' }]);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setMessages([...newMessages, { sender: 'GPT', text: 'Error: Something went wrong.' }]);
        }
    };
    const formatResponse = (response: string) => {
        // Split the response into lines and process each line
        const formatted = response.split('\n').map((line, index) => (
            <span key={index}>
                {line.split(/(https?:\/\/[^\s]+|\*\*[^*]+\*\*)/g).map((part, i) => {
                    // Handle URLs
                    if (part.match(/https?:\/\/[^\s]+/)) {
                        return (
                            <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                                {part}
                            </a>
                        );
                    }
    
                    // Handle bold text (surrounded by **)
                    if (part.match(/\*\*[^*]+\*\*/)) {
                        const boldText = part.slice(2, -2); // Remove the '**' for display
                        return (
                            <strong key={i}>
                                {boldText}
                            </strong>
                        );
                    }
    
                    // Return the non-link, non-bold part as is
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
        <div className='row gpt'>
            <div className='col-md-3 sidebar'>
                <h2>Welcome to GPT, CloudZone IT generative AI tool guiding you to the answers you need about digital business transformation. What issue can we solve for you today?</h2>
            </div>
            <div className='col-md-9'>
                <section className="msger">
                    <main className="msger-chat" ref={chatRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`msg ${msg.sender === 'You' ? 'right-msg' : 'left-msg'}`}>
                                <div className="msg-bubble">
                                    <div className="msg-info">
                                        <div className="msg-info-name">{msg.sender}</div>
                                    </div>
                                    <div className="msg-text">
                                        {msg.text} {/* Render rich text */}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="msg left-msg">
                                <div className="msg-bubble">
                                    <div className="msg-text">Loading...</div>
                                </div>
                            </div>
                        )}
                    </main>

                    <form className="msger-inputarea" onSubmit={handleSendMessage}>
                        <button
                            type="button"
                            className={`msger-mic-btn ${isListening ? 'listening' : ''}`}
                            onClick={isListening ? stopListening : startListening}
                        >
                            {isListening ? (
                                <i className="fa-solid fa-stop"></i>
                            ) : (
                                <i className="fa-solid fa-microphone"></i>
                            )}
                        </button>
                        <input
                            type="text"
                            className="msger-input"
                            placeholder="Enter your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" className="msger-send-btn"><i className="fa-solid fa-arrow-up"></i></button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Page;
