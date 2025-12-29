// import Cards from "./Cards";

// function Body() {
//     let cardarr = [
//         {
//         title:"Title1",
//         desc:"I am title 1"
//         },
//           {
//         title:"Title2",
//         desc:"I am title 2"
//         },
//     ]
//     return (
//         <>
//             <h1>welcome to react course</h1>
//           {
//             cardarr.map((element,index)=>(
//                 <Cards title={element.title} desc={element.desc}/>
//             ))
//           }
//         </>
//     )
// }
// export default Body;

import { useState } from "react";
import Cards from "./Cards";

function Body() {
  const [inputText, setInputText] = useState("");

  const cardarr = [
    { id: 1, title: "Title1", desc: "I am title 1" },
    { id: 2, title: "Title2", desc: "I am title 2" },
  ];

  // onChange
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <h1>Welcome to React Course</h1>

      {/* onChange */}
      <input
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={handleChange}
      />

      <p>You typed: {inputText}</p>

      {cardarr.map((card) => (
        <Cards
          key={card.id}
          data={card}
        />
      ))}
    </>
  );
}

export default Body;
