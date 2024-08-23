import { useEffect } from "react";

const Even = () => {
  useEffect(()=> {
    // 클린업, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>Even</div>
}

export default Even;