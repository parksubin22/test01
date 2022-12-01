import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

export default function Prac() {
  const [lists, setList] = useState([
    { id: 1, title: "리액트 공부하기", contents: "챕터1 완료", isDone: false },
    { id: 2, title: "리액트 공부하기", contents: "챕터2 완료", isDone: false },
    { id: 3, title: "리액트 공부하기", contents: "챕터3 완료", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // input 제목, 내용
  const onChangeNameHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContentsHandler = (e) => {
    setContents(e.target.value);
  };

  // 새 리스트 추가
  const addToDo = () => {
    setList([
      ...lists,
      {
        id: lists.length + 1,
        title: title,
        contents: contents,
        isDone: false,
      },
    ]);
    setTitle("");
    setContents("");
  };

  // done으로 바꿔주기
  const changeDone = (recieveId) => {
    // console.log(recieveId);
    setList(
      lists.map(
        (list) =>
          list.id === recieveId
            ? { ...list, isDone: !list.isDone }
            : { ...list } //★
      )
    );
  };

  // 삭제하기 기능
  //   console.log(lists);
  const deleteHandler = (id) => {
    setList(lists.filter((list) => list.id !== id)); //한줄일때는 return 생략 가능
    console.log(id);
  };

  return (
    <div>
      <div className="wrap">
        <Input
          onChangeNameHandler={onChangeNameHandler}
          onChangeContentsHandler={onChangeContentsHandler}
          addToDo={addToDo}
        ></Input>
        <List
          handlerDelete={deleteHandler}
          changeDone={changeDone}
          lists={lists}
        ></List>
      </div>
    </div>
  );
}
