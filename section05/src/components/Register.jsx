//simple register form

import { useState, useRef } from "react";


const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  });
  
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) =>  {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value //[변수] -> 변수를 프로퍼티의 키 값으로 쓸 수 있다.
    })
  }

  const onSubmit = () => {
    if(input.name === ""){
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <input //e.target은 input 태크를 가리킴 다른 것들도 동일 
          ref = {inputRef}
          name = "name"
          value={input.name}
          onChange={onChange}
          placeholder={"name"}
        />
      </div>

      <div>
        <input
        name = "birth"
          value = {input.birth}
          onChange = {onChange}
          type="date"
        />
      </div>

      <div>
        <select 
          name = "country"
          value = {input.country}
          onChange = {onChange}
        >
          <option></option>
          <option value = "kr">Korea</option>
          <option value = "us">America</option>
          <option value = "uk">UK</option>
        </select>
      </div>

      <div>
        <textarea
          name = "bio"
          value = {input.bio}
          onChange = {onChange}
        />
      </div>

      <button onClick ={onSubmit}>submit</button>

    </div>
  )
}

export default Register;