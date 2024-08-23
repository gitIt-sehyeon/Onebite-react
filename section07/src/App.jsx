import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1. mount
  useEffect(()=>{
    console.log("mount");
  }, []);

  //2. update
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  }); //리렌더링 할 때마다 실행 됨. 두번째 인자가 없으면

  //3. unmount

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className = "App">

      <h1>Simple Counter</h1>

      <section>
        <input value = {input} onChange = {(e) => {
          setInput(e.target.value);
        }}/>
      </section>
        
      <section>
        <Viewer count = {count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>

      <section>
        <Controller onClickButton = {onClickButton}/>
      </section>

    </div>
  )
}

export default App
