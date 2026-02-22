import {useState} from "react";
import axios from "axios";

export default function Dashboard(){
  const [message,setMessage]=useState("");
  const [reply,setReply]=useState("");

  const send=async()=>{
    const token=localStorage.getItem("token");
    const res=await axios.post(import.meta.env.VITE_API_URL+"/chat",
      {message},
      {headers:{Authorization:`Bearer ${token}`}}
    );
    setReply(res.data.reply);
  }

  return (
    <div>
      <h2>AI Support Chat</h2>
      <textarea onChange={e=>setMessage(e.target.value)} />
      <button onClick={send}>Send</button>
      <p>{reply}</p>
    </div>
  );
}