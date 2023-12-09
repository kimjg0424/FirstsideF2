import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Board from "../components/Board";

const BoardDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState([]);

  const getBoard = async () => {
    const response = await (
      await axios.get(`//localhost:8080/api/board/`+id)
    ).data;
    setBoard(response);
    setLoading(false);
    console.log(response)
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
    {loading ? (
        <h2>loading...</h2>
    ) : (
        <Board
        id ={board.id}
        title ={board.title}
        content ={board.content}
        createBy ={board.createBy}
        />
    )}
    </div>
  )
};

export default BoardDetail;
