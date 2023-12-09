import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Board = ({ id, title, content, createBy }) => {
  
  const navigate = useNavigate();


  const moveToUpdate = () => {
    navigate(`/update/` + id);
  };


const deleteBoard = async () => {
    console.log(id)
  if(window.confirm(`게시글을 정말 삭제하시겠습니다?`)){
  await axios.delete(`//localhost:8080/api/board/`+id).then((res)=> {
  console.log(res)  
  alert('삭제되었습니다')
    navigate(`/board`)
  })
  }
}

const moveToList = () => {
  navigate(`/board`)
}


  return (
    <div>
      <h2>{title}</h2>
      <h5>{createBy}</h5>
      <hr />
      <p>{content}</p>
    <div>
    <button onClick={moveToUpdate}>수정</button>
    <button onClick={deleteBoard}>삭제</button>
    <button onClick={moveToList}>목록</button>
    </div>
 
    </div>
  );
};

export default Board;
