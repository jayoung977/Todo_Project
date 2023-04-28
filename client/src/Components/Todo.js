import { useState } from "react";
const Todo = ({ item, deleteItem }) => {
  console.log(item);
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true); //초기값: 읽기모드 (수정전)
  const onDeleteButtonClick = () => {
    //1. App.js에서 deleteItem()함수 전달 받음
    //2. useState로 item을 state전달
    deleteItem(todoItem);
  };
  //[6]-2 수정
  //title input 클릭시 readOnly state를 false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false); // title input이 편집이 가능한 상태
  };
  //[6]-3 수정
  //title input Enter시 readOnly state를 true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };
  //[6]-4 수정
  //사용자가 키보드 입력할 때마다 item의 title을 입력한 값으로 변경
  const editEventHandler = (e) => {
    //title만 수정하지만
    //title뿐 아니라 id, done(rest) 값 todoItem에서 불러온 후에
    //새로운 객체로 setTodoItem에서 수정해야함
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest, // id, done값
    });
  };
  //[6]-5 수정
  //checkbox의 체크 여부에 따라 todoItem state의 done 상태값을 변경
  const checkboxEventHandler = (e) => {
    // console.log(todoItem);
    const { done, ...rest } = todoItem;
    // todoItem.done = !todoItem.done; //-> 변경 안됨 무조건 set함수 사용 ->editEventHandler에서 e.target.checked값 넘김
    setTodoItem({
      //todoItem
      done: e.target.checked,
      ...rest,
    }); //title,id는 그대로 있고 done값만 뒤집어서 넣음
  };
  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        //[6]-5 수정
        onChange={checkboxEventHandler}
      />
      {/* [6]-1 수정 */}
      <input
        type="text"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        // onKeyDown={enterKeyEventHandler}
        onKeyPress={enterKeyEventHandler} //한글 중복 입력 문제
        //[6]-4 수정
        onChange={editEventHandler}
      />
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
};
export default Todo;
