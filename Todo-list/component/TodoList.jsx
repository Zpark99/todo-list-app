import PropTypes from 'prop-types'; // props 타입 체크용
import React, {useState} from 'react'; // 상태관리 
import "./TodoList.css"

const TodoList = ({ todos, onDelete, onWorking, onUpdate }) => { // 1배열 3함수들
  const [editingId, setEditingId] = useState(null); // 수정 중인 항목 ID
  const [editTitle, setEditTitle] = useState(''); // 수정할 제목
  const [editContent, setEditContent] = useState(''); // 수정할 내용 

  const startEditing = (todo) => { // 수정 시작(더블클릭하면 얘내들을 단체로 수정한다는 뜻)
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditContent(todo.content);
  };

  const finishEditing = () => {
    onUpdate(editingId, editTitle, editContent); // 수정된 값 전달, 및 완료
    setEditingId(null);
  };

  return (
    <div className='todo-list-wrapper'>
      {todos.map((todo, index) => { // todos 배열이 이렇게 생겼다고 하면 { id, title, contents, isDone } map 은 다음과 같이 변경됨 { id, title, contents, isDone }, index = 0
        const isEditing = editingId === todo.id;

        return (
          <div key={todo.id} className='todo-card'>
            <div className='card-header'>
              <div className='status-icon'>{index + 1}</div>
              <div className='icons'>
                <button className="icon-btn" onClick={() => onWorking(todo.id)}>
                  {todo.isDone ? '✔️' : '✅'}
                </button>
                <button className="icon-btn" onClick={() => onDelete(todo.id)}>🗑️</button>
              </div>
            </div>
        
        {isEditing ? ( // isEditing이 true면 수정모드, false면 보기모드
          <>
            <input
              className="edit-title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)} // 제목을 변경하면 제목의 내용을 전달받아서 올려주는데 e.target.value = 지금 써진 글자 
              maxLength = {23}
            />
            <textarea
              className="edit-content"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              maxLength= {1000}
              />
              <button className="save-btn" onClick={finishEditing}>저장</button>
            </>
        ) : ( // title에 제목 입력 안되어 있으면 제목 없음, card 완료 시 완료 표시 뜸
      <div onDoubleClick={() => startEditing(todo)}> 
        <div className='todo-title'> 
          {todo.title || '제목 없음'} 
          {todo.isDone && <span className='done-badge'> (완료)</span>}
        </div> 
        <div className="todo-content">
          {todo.content.length > 30 // 글자 30개 넘어 가는 순간 30글자 + ... 으로 바뀌게 됨 
            ? todo.content.slice(0, 30) + 
            '...' : todo.content || '내용 없음'}
        </div>
      </div>
      )}
    </div>
  );
})}
</div>
);
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired, // 배열
  onDelete: PropTypes.func.isRequired, // 나머진 함수
  onWorking: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default TodoList;