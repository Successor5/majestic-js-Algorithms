import React, { useState } from "react";
export const  Count =()=>{
        const [count, setCount] = useState(0);
      
        const incrementCount = () => {
          setCount(count + 1);
        };
        const decrease=()=>{
       setCount(count-1);
        }
            return (
                <>
            <p>Count: {count}</p>
            <button onClick={decrease}>decrease</button>
            <button onClick={incrementCount}>Increment</button>
        </>
        );
      };
      
      