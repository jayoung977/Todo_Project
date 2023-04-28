import { useState } from "react";
const AddTodo = ({ addItem }) => {
  //input 입력값
  const [todoItem, setTodoItem] = useState({
    title: "",
  });
  const onButtonClick = () => {
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
  return (
    <div className="AddTodo">
      <input
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
      <button onClick={onButtonClick}>Add</button>
    </div>
  );
};
export default AddTodo;
