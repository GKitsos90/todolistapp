import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: notes.length + 1, text: 'New Note' }]);
  };

  return (
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <div className="search-header">
        <div className="search-box-container">
          <input type="text" className="search-box" placeholder="Search note..." />
        </div>
        <div className="search-actions-container">
          <select className="search-select">
            <option value="option1">ALL</option>
            <option value="option2">Complete</option>
            <option value="option3">Incomplete</option>
          </select>
          <button className="custom-button"></button>
        </div>
      </div>
      <div className="list-container">
        <ul className="todo-list">
          {notes.map(note => (
            <li key={note.id} className="todo-item">
              <span className="field1"></span>
              <p>{note.text}</p>
              <span className="field2"></span>
            </li>
          ))}
          {notes.length === 0 && (
            <li className="todo-item">
              <span className="field1">
                <img src="detective.png" alt="Task Image" className="task-image" />
              </span>
            </li>
          )}
        </ul>
      </div>
      <button className="additional-button" onClick={addNote}></button>
    </div>
  );
}

export default App;
