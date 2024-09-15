import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(()=>{
    const currentDiaryItme = data.find((item) => String(item.id)===String(id))

    if(!currentDiaryItme){
      window.alert("존재하지 않는 일기입니다.");
      nav('/', {replace : true}); //return문이 mount 되기도 전에 nav가 아래에서 실행 되어버리면 안됨 그래서 useEffect()를 써야함
    }

    setCurDiaryItem(currentDiaryItme);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;