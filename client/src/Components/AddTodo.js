import "../styles/AddTodo.scss";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
const AddTodo = ({ addItem }) => {
  //input 입력값
  const [todoItem, setTodoItem] = useState({
    title: "",
  });
  const InputElem = useRef();
  //input 빈값 체크 [true/false] 반환
  const checkInputValue = () => {
    if (todoItem.title.trim().length === 0) {
      InputElem.current.focus();
      return false; // 아래 행 실행 안되도록함!
    }

    return true;
  };

  const onButtonClick = () => {
    //0. 값이 있는지 확인
    if (!checkInputValue()) return;

    //1. props addItem 함수 실행
    addItem(todoItem);

    //2. input 초기화
    setTodoItem({
      title: "",
    });
  };
  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };
  const SIZES = ["xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"];
  return (
    <div className="AddTodo">
      <input
        ref={InputElem}
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        // onKeyDown={onEnterKeyDown}
        onKeyPress={onEnterKeyDown}
      />
      {/* state가 부모컴포넌트인 app.js에 걸려있으므로 부모에서 함수지정해야함
       + 형제 요소에서 보여줘야함 */}
      {/* <button onClick={addItem}>Add</button> */}
      &nbsp; &nbsp;
      <button onClick={onButtonClick}>
        <FontAwesomeIcon
          className="PlusBtn"
          icon={faSquarePlus}
          size={SIZES[3]}
        />
      </button>
    </div>
  );
};
export default AddTodo;
