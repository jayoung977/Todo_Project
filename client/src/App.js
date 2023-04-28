import { useState } from "react";
import Todo from "./Components/Todo";
import AddTodo from "./Components/AddTodo";

function App() {
  //1. state값 지정 (초기 배열)
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "저녁먹기",
      done: 0,
    },
    {
      id: 2,
      title: "리액트 공부",
      done: 0,
    },
    {
      id: 3,
      title: "잠자기",
      done: 1,
    },
  ]);
  //4. Todo 추가하는 함수
  const addItem = (newItem) => {
    //newItem => {title : "xxx"}
    newItem.id = todoItems.length + 1;
    newItem.done = 0;
    //newItem => {title : "xxx", id: n, done: 0}
    setTodoItems([...todoItems, newItem]);
  };

  //5. Todo delete하는 함수
  const deleteItem = (targetItem) => {
    //targetItem => {title : "xxx", id: n, done: 0}
    //1. filter() targetItem의 id 와 todoItems state의 id가 같지 않는 요소들을 새로운 배열로 반환
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    //2. 위 새로운 배열들을 state변경
    setTodoItems(newTodoItems);
  };

  // }
  return (
    <div className="App">
      {/*3. Todo 추가 input */}
      <AddTodo addItem={addItem} />
      {/* Todo 목록 보이기 */}
      {todoItems.map((item) => {
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />; //2.prop으로 값 넘기기
      })}
    </div>
  );
}

export default App;
