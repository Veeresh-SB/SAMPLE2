import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [user] = useState({
    name: "Veeresh",
    age: 22,
    course: "React JS",
  });

  return (
    <div>
      <h1>Parent Component</h1>

      {/* Passing object as props */}
      <Child userData={user} />
    </div>
  );
}

export default Parent;
