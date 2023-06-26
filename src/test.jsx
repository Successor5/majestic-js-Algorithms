import React, { useState } from "react";

export const Test = () => {
  const [me, setMe] = useState(-2);

  const countt = () => {
    setMe(me + 1);
  };

  return (
    <>
      <div>count: {me}</div>
      <div onClick={countt}>add</div>
    </>
  );
};

