import { useState, useEffect, useRef, createRef } from "react";
import Todo from "./Components/Todo";
import AddTodo from "./Components/AddTodo";
import "./styles/App.scss";

import Header from "./Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_BASE_URL } from "./app-config";
// console.log(API_BASE_URL);

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
  const [sortStatus, setSortStatus] = useState(false);
  const divApp = useRef();

  //7. useEffect
  useEffect(() => {
    console.log("mount 완료");
    const getTodos = async () => {
      const res = await axios.get(`${API_BASE_URL}/api/todos`);
      // setTodoItems(res.data);
      setTodoItems(res.data.reverse()); //내림차순 방법 1-1
      // setTodoItems(res.data);//내림차순 방법 2 서버측에서 변경
      //서버측 select * from todos order by id desc
      //->   //  .findAll({ order: [['id','DESC']] });
    };
    getTodos();
    if (divApp.current) {
      console.log("divApp.current>>", divApp.current);
      divApp.current.scrollTop = divApp.current.scrollHeight;
    }
    // const scrollToBottom = () => {
    // const { divApp } = ref;
    // divApp.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "end",
    //   inline: "nearest",
    // });

    // };
    // scrollToBottom();
    // const chatParent = useRef<HTMLDivElement(null);
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
    const res = await axios.post(`${API_BASE_URL}/api/todo`, newItem);
    // console.log("res >>", res);
    //...todoItems: 기존 아이템
    // res.data: 새로 추가한 아이템  {title : "xxx", id: n, done: 0}
    // setTodoItems([...todoItems, res.data]);
    setTodoItems([res.data, ...todoItems]); //내림차순 방법 1-2
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
    await axios.delete(`${API_BASE_URL}/api/todo/${targetItem.id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  //[6] 수정-BackEnd
  //[6]-1 서버 API이용해서 db 업데이트
  //[6]-2 변경 사항 화면 출력
  const updateItem = async (targetItem) => {
    // console.log(targetItem);
    await axios.patch(`${API_BASE_URL}/api/todo/${targetItem.id}`, targetItem);
  };
  // let todoItemsDsc = todoItems.sort().reverse();
  console.log(todoItems.sort());
  return (
    <div className="App" ref={divApp}>
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
