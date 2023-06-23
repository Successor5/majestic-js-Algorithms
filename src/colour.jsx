// import React, { useState } from "react";

// export const Colour = () => {
//   const [colour, setColour] = useState("");

//   return (
//     <>
//       <button onClick={() => setColour("red")}>Set Red</button>
//       <button onClick={() => setColour("blue")}>Set Blue</button>
//       <p>Selected Colour: {colour}</p>
//     </>
//   );
// };


// import React, { useState } from "react";

// export const Colour = () => {
//   const [color, setColor] = useState("");

//   return (
//     <>
    
//       <button onClick={() => setColor("red")}>Red</button>
//       <button onClick={() => setColor("blue")}>Blue</button>
//       <button onClick={() => setColor("orange")}>orange</button>
//       <button onClick={() => setColor("green")}>green</button>
//       <button onClick={() => setColor("black")}>Black</button>
//       <button onClick={() => setColor("purple")}>purple</button>
//       <button onClick={() => setColor("grey")}>grey</button>
//       <button onClick={() => setColor("brown")}>Brown</button>
//       <button onClick={() => setColor("pink")}>pink</button>
//       <button onClick={() => setColor("yellow")}>yellow</button>
//       <div style={{ backgroundColor: color, width: "100vh", height: "100vh", overflow:"-moz-hidden-unscrollable" }}></div>
      
//     </>
//   );
// };




import React, { useState, useEffect } from "react";

export const Colour = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setColor(randomColor);
    }, 200); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          width: "100vh",
          height: "100vh",
          overflow: "-moz-hidden-unscrollable",
        }}
      ></div>
    </>
  );
};

