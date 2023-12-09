import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardUpdate = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  

  const getBoard = async () => {
    const resp = await axios.get(`//localhost:8080/api/board/${id}`);
    setBoard(resp.data);
  };
  
  

  const updateBoard = async () => {
    await axios.post(`//localhost:8080/api/board`, board).then((res) => {
      alert(`수정완료되었습니다`);
      navigate(`/board/${id}`);
    });
  };

  const [board, setBoard] = useState({
    id: 0,
    title: '',
    // createBy: '',
    content: '',
    author: '',
  });
  const { title, author, content } = board;

  const onChange = (e) => {
    const { value, name } = e.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };


  const backToDetail = () => {
    navigate(`/board/${id}`);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return(
    <div>
    <div>
      <span>제목</span>
      <input type="text" name="title" value={title} onChange={onChange} />
    </div>
    <br />
    <div>
      <span>작성자</span>
      <input type="text" name="author" value={author} readOnly={true} />
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
      <button onClick={updateBoard}>수정</button>
      <button onClick={backToDetail}>취소</button>
    </div>
  </div>
  )
};

export default BoardUpdate;
