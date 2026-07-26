import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const[name,setName] = useState("");
  const[date,setDate] = useState("");
  const[response,setResponse] = useState("");

const bookMeeting = async () => {


  try {
  const res = await fetch("https://meeting-api-demo-aadnbjbnebgghua2.centralindia-01.azurewebsites.net/api/meeting/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // ✅ fixed
    body: JSON.stringify({ name, date }),
  });

  const data = await res.json();
  console.log(data.message);
  setResponse(data.message);
} catch (error) {
  console.error("Error booking meeting:", error);
}

//   try{
//     // http://localhost:5084/api/meeting/book
//   const res = await fetch("https://meeting-api-demo-aadnbjbnebgghua2.centralindia-01.azurewebsites.net/api/meeting/book", {
//       method: "POST",
//       headers: { "Content-Type": "ap]plication/json" },
//       body: JSON.stringify({ name, date }),
//   });

//   if (!res.ok) {
//         throw new Error("Network response was not ok");
//   }

//   const data = await res.json();   // parse JSON body
//   setResponse(data.message);       // update state with API response
// }
// catch(error) 
// {
//       console.error("Error booking meeting:", error);
//       setResponse("Failed to book meeting");
// }

}

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book a Meeting</h2>
      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Meeting Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={bookMeeting}>Book</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
