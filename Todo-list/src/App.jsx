import React, { useEffect, useState } from 'react'; // 상태관리
import "./App.css";
import Header from '../component/Header';
import Todoeditor from './../component/Todoeditor';
import TodoList from '../component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]); // 할일 목록 저장, todos=(할일 목록), setTodos=(할일 추가, 수정, 삭제)

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos"); // 웹페이지를 처음 열 때, localStorage에 저장된 할 일을 불러와서 todos에 넣음.
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // 새로고침해도 todos의 변동 내용을 저장 
  }, [todos]);

  const handleCreate = (title, content) => {
    const newTodo = {
      id:Date.now(),
      title,
      content,
      isDone: false
    };
    setTodos([newTodo, ...todos]);
  };

  const handleDelete = (id) => { // todo의 내용을 지우는 함수
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleWorking = (id) => { // 체크 시 완료 여부 알려줌
    const newTodos = todos.map((todo) =>
      todo.id === id? { ...todo, isDone: !todo.isDone} : todo
  );
  setTodos(newTodos);
}

const handleUpdate = (id, newtitle, newContent) => { // 제목 내용 수정
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id ? { ...todo, title: newtitle, content: newContent } : todo
    )
  );
};

  return (
  <div className="App">
      <Header todos={todos}></Header>

    <div className='main-layout'>

    <div className='Todoeditor'>
      <Todoeditor onCreate={handleCreate}/>
    </div>

    <div className="Todolist">
      <TodoList 
        todos={todos} 
        onDelete={handleDelete} 
        onWorking={handleWorking} 
        onUpdate={handleUpdate}/>
    </div>
    </div>
  </div>  
  );
};

export default App;
