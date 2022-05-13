import { useState } from "react";

export default function AnimationLetter({ letter }) {
  const [status, setStatus] = useState(false);

  return (
    <span
      className={status ? "title-animation animated" : "title-animation"}
      onMouseOver={() => {
        setStatus(true);
        setTimeout(() => {
          if (status === true) {
            return;
          } else {
            setStatus(false);
          }
        }, 1000);
      }}
    >
      {letter}
    </span>
  );
}