import "./Todoeditor.css"
import React, { useState } from 'react'
import PropTypes from "prop-types";

const Todoeditor = ({ onCreate }) => { /* 할일 쓰는 입력 칸 */ 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); /* 페이지 새로고침 방지 */
    if (!title || !content) return alert("둘 다 입력해주세요!");
    onCreate(title, content);
    setTitle(''); /* 입력 후에 남아 있지 말도록 비우도록 하는 함수 */ 
    setContent(''); /* 입력 후에 남아 있지 말도록 비우도록 하는 함수 */ 
  };

  return (
   <form className="todo-editor" onSubmit={handleSubmit}>
    <div className="title-group">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={23}/>
      <span className="text-count">{title.length} / 23</span>
    </div>

    <div className="form-group">
      <label htmlFor="content">Content</label>
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} maxLength={1000}>
      </textarea>
      <span className="text-count">{content.length} / 1000</span>
    </div>

    <button type="submit">ADD</button>
  </form>
  );
};

Todoeditor.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default Todoeditor;