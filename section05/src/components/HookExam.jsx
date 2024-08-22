//Three tips about hooks
//1. It works only inside of function components and custom hooks
//2. It cannot be called in a conditional statement
//3. We can make custom hooks

import { useState } from "react";
import useInput from "./../hooks/useInput"

const HookExam = () => {

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input
        value={input} onChange={onChange}
      />
      <input
        value={input2} onChange={onChange2}
      />
    </div>
  )
}

export default HookExam;