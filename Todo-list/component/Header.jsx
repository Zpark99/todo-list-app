import React from 'react';
import "./Header.css"
import PropTypes from 'prop-types';

const Header = ({ todos = [] }) => { /* 데이터를 내가 치는 대로 받는데 안 받으면 빈 배열 */
  const workingCount = todos.filter((todo) => !todo.isDone).length; /* 끝난 일, 안 끝 난일 갯 수 새기 */ 
  const doneCount = todos.filter((todo) => todo.isDone).length; /* 끝난 일, 안 끝 난일 갯 수 새기 */

  return (
    <header className="header-container">
    <div className="Main-area">
      <h1 className='logo-text'>TODOLIST</h1>
    </div>

    <div className='status-area'>
      <div className="status all">현황</div>
      <div className="status working">💪 Working..! <span>{workingCount}</span></div>
      <div className="status done">🌈 Done..! <span>{doneCount}</span></div>
    </div>
    </header>
  )

}

Header.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Header; 