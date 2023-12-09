import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: "",
    author: "",
    content: "",
  });

  const { title, author, content } = board;

  const onChange = (e) => {
    const { value, name } = e.target;
    setBoard({
      ...board,
      [name] : value  
    });
  };

  const saveBoard = async () => {
    await axios.post(`//localhost:8080/api/board`,board)
    navigate(`/board`)
  
  }


  const backToList = () => {
    navigate('/board')
  }


  return (
    <div>
    <div>
      <span>제목</span>
      <input type="text" name="title" value={title} onChange={onChange} />
    </div>
    <br />
    <div>
      <span>작성자</span>
      <input
        type="text"
        name="author"
        value={author}
        onChange={onChange}
      />
    </div>
    <br />
    <div>
      <span>내용</span>
      <textarea
        name="content"
        cols="30"
        rows="10"
        value={content}
        onChange={onChange}
      ></textarea>
    </div>
    <br />
    <div>
      <button onClick={saveBoard}>저장</button>
      <button onClick={backToList}>취소</button>
    </div>
  </div>
  )
};

export default BoardWrite;
