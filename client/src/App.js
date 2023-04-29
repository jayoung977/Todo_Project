import { useState, useEffect } from "react";
import Todo from "./Components/Todo";
import AddTodo from "./Components/AddTodo";
import "./styles/App.scss";

import Header from "./Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function App() {
  //1. state값 지정 (초기 배열)
  //[ProntEnd]
  // const [todoItems, setTodoItems] = useState([
  //   {
  //     id: 1,
  //     title: '저녁먹기',
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     title: '리액트 공부',
  //     done: false,
  //   },
  //   {
  //     id: 3,
  //     title: '잠자기',
  //     done: true,
  //   },
  // ]);
  //[BackEnd] axios 요청 날리기
  const [todoItems, setTodoItems] = useState([]);

  //7. useEffect
  useEffect(() => {
    console.log("mount 완료");
    const getTodos = async () => {
      const res = await axios.get("http://localhost:8080/api/todos");
      setTodoItems(res.data);
    };
    getTodos();
  }, []);
  //[4] Todo 추가하는 함수
  const addItem = async (newItem) => {
    //[ProntEnd]
    // //newItem => {title : "xxx"}
    // newItem.id = todoItems.length + 1;
    // newItem.done = 0;
    // //newItem => {title : "xxx", id: n, done: 0}
    // setTodoItems([...todoItems, newItem]);
    //[BackEnd] axios 요청 날리기
    const res = await axios.post("http://localhost:8080/api/todo", newItem);
    // console.log("res >>", res);
    //...todoItems: 기존 아이템
    // res.data: 새로 추가한 아이템  {title : "xxx", id: n, done: 0}
    setTodoItems([...todoItems, res.data]);
    //다른 방법: 프론트 데이터 사용 send.end()처리
    // newItem.id = todoItems.length + 1;
    // newItem.done = 0;
    // await axios.post("http://localhost:8080/api/todo", newItem);
    // setTodoItems([...todoItems, newItem]);
  };

  //[5] Todo delete하는 함수

  const deleteItem = async (targetItem) => {
    //[ProntEnd]
    // //targetItem => {title : "xxx", id: n, done: 0}
    // //1. filter() targetItem의 id 와 todoItems state의 id가 같지 않는 요소들을 새로운 배열로 반환
    // const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    // //2. 위 새로운 배열들을 state변경
    // setTodoItems(newTodoItems);
    //[BackEnd] axios 요청 날리기
    await axios.delete(`http://localhost:8080/api/todo/${targetItem.id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  //[6] 수정-BackEnd
  //[6]-1 서버 API이용해서 db 업데이트
  //[6]-2 변경 사항 화면 출력
  const updateItem = async (targetItem) => {
    console.log(targetItem);
    await axios.patch(
      `http://localhost:8080/api/todo/${targetItem.id}`,
      targetItem
    );
  };
  return (
    <div className="App">
      <Header />
      {/*3. Todo 추가 input */}
      <AddTodo addItem={addItem} />
      {/* 미션: 현재 todo목록 개수 올리기 */}
      <h3>Total: {todoItems.length} </h3>
      {/* Todo 목록 보이기 */}
      {todoItems.length !== 0 ? (
        todoItems.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          ); //2.prop으로 값 넘기기
        })
      ) : (
        <h3>값을 추가해주세요 🥹</h3>
      )}
    </div>
  );
}

export default App;
