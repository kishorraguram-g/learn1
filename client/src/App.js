import { useState } from "react";

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = async () => {
    console.log('hi');
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/process`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paragraph: text }),
      });
      const data = await res.json();
      setResponse(data.result); // Assuming the backend returns { result: "Processed text" }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error processing data");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Send Paragraph to Backend</h2>
      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your paragraph here..."
      ></textarea>
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>Submit</button>
      <h3>Response:</h3>
      <p>{response}</p>
    </div>
  );
}

export default App;
