import Sidebar from "../components/Sidebar";
import { useState } from "react";
import api from "../services/api";

export default function AIPage() {

  const [messages,setMessages] = useState([
    {
      role:"ai",
      text:"Hello. I am your emergency AI assistant.",
    },
  ]);

  const [input,setInput] = useState("");

  const [loading,setLoading] = useState(false);

  const sendMessage = async () => {

    if(!input.trim()) return;

    const userMessage = {
      role:"user",
      text:input,
    };

    setMessages((prev)=>[
      ...prev,
      userMessage,
    ]);

    const currentInput = input;

    setInput("");

    setLoading(true);

    try {

      const res = await api.post(
        "/ai/chat",
        {
          message:currentInput,
        }
      );

      const aiReply = res.data.reply;

      setMessages((prev)=>[
        ...prev,
        {
          role:"ai",
          text:aiReply,
        },
      ]);

    } catch (error) {

      setMessages((prev)=>[
        ...prev,
        {
          role:"ai",
          text:
`Emergency AI temporarily overloaded.

Immediate guidance:
- Stay calm
- Contact emergency services
- Evacuate safely
- Avoid panic`,
        },
      ]);

    }

    setLoading(false);

  };

  return (

    <div className="flex bg-dark min-h-screen text-white">

      <Sidebar />

      <div className="ml-72 p-10 w-full">

        <h1 className="text-5xl font-bold mb-10">
          AI Emergency Assistant
        </h1>

        <div className="glass rounded-2xl p-5 h-[70vh] overflow-y-auto">

          {messages.map((msg,index)=>(

            <div
              key={index}
              className={`p-4 rounded-xl mb-4 whitespace-pre-wrap max-w-2xl ${
                msg.role === "user"
                ? "bg-red-500 ml-auto"
                : "bg-slate-800"
              }`}
            >
              {msg.text}
            </div>

          ))}

          {loading && (

            <div className="bg-slate-800 p-4 rounded-xl">
              AI is thinking...
            </div>

          )}

        </div>

        <div className="flex gap-4 mt-5">

          <input
            type="text"
            placeholder="Describe emergency..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-900 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-red-500 px-8 rounded-xl hover:bg-red-600"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}