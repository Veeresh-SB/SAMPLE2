import { useState } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");

  const sendPost = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "Axios POST",
          body: "This is a POST request example",
          userId: 1,
        }
      );

      setResult("Post Successful ✅");
      console.log(response.data);
    } catch (error) {
      setResult("Post Failed ❌");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios POST Example</h2>
      <button onClick={sendPost}>Send POST Request</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
