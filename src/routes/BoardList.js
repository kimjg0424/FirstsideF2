import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";
const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const  navigate = useNavigate()
  const getBoardList = async () => {
    const resp = (await axios.get("//localhost:8080/api/board/list")).data;
    setBoardList(resp);
    console.log(resp);
  };


  const moveToWrite = () => {
    navigate('/write')
  }

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div>
      <ul>
        {boardList.map((board) => (
          <>
            <li key={board.id}>
              <Link to={`/board/${board.id}`}>{board.title}</Link>
            </li>
          </>
        ))}
      </ul>
      <div>
        <button onClick={moveToWrite}> 글쓰기</button>
      </div>
    </div>
  );
};

export default BoardList;
