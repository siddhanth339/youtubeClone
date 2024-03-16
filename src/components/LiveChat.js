import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chatMessages.messages);
  const [comment, setComment] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({ name: "siddhanth", message: "Namaste React Live!" })
      );
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  if (!messages) return;
  return (
    <>
      <div className="ml-1 p-2 bg-slate-100 h-[450px] rounded-lg overflow-scroll">
        <h1>LiveChat</h1>
        {messages.map((message) => (
          <ChatMessage name={message.name} text={message.message} />
        ))}
      </div>
      <form className="m-1" onSubmit={(e) => e.preventDefault()}>
        <input
          className="bg-gray-300 rounded-lg pl-1"
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button
          className="ml-2 px-1 rounded-lg bg-blue-800 text-white"
          onClick={() => {
            dispatch(addMessage({ name: "Unknown", message: comment }));
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
