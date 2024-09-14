import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(()=>{
    const currentDiaryItme = data.find((item) => String(item.id)===String(params.id))

    if(!currentDiaryItme){
      window.alert("존재하지 않는 일기입니다.");
      nav('/', {replace : true}); //return문이 mount 되기도 전에 nav가 아래에서 실행 되어버리면 안됨 그래서 useEffect()를 써야함
    }

    setCurDiaryItem(currentDiaryItme);
  }, [params.id, data])

  const onClickDelete = () => {
    if(
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")
    ) {
      onDelete(params.id);
      nav('/', {replace : true});
    }
  }

  const onSubmit = (input) => {
    if(
      window.confirm("일기를 정말 수정할까요?")
    ){
      onUpdate(
        params.id, 
        input.createdDate.getTime(), 
        input.emotionId, 
        input.content
      );
    }
    nav("/", {replace: true});
  }

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button 
          text={"뒤로 가기"} 
          onClick={()=>{
          nav(-1);
        }}
        />}
        rightChild={<Button 
          text={"삭제하기"} 
          type={"NAGATIVE"} 
          onClick={onClickDelete}
        />}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
  )
}

export default Edit;