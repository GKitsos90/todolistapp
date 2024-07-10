import React, { useState, useEffect } from 'react'; 
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);  
  const [showModal, setShowModal] = useState(false);
  const [newNoteText, setNewNoteText] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editNoteText, setEditNoteText] = useState('');

  useEffect(() => {

    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleEnterPress = (event) => {
      if (event.key === 'Enter' && editingNoteId !== null) {
        saveEditedNote(editingNoteId, editNoteText);
      }
    };
    document.addEventListener('keydown', handleEnterPress);
    return () => {
      document.removeEventListener('keydown', handleEnterPress);
    };
  }, [editingNoteId, editNoteText]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);  
  };

  const addNote = () => {
    const newNote = { id: notes.length + 1, text: newNoteText, completed: false };
    setNotes([...notes, newNote]);
    setNewNoteText('');
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddNote = () => {
    setShowModal(true);
  };

  const toggleNoteCompletion = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, completed: !note.completed } : note
    ));
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const startEditingNote = (id, initialText) => {
    setEditingNoteId(id);
    setEditNoteText(initialText);
  };

  const saveEditedNote = (id, newText) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
    setEditingNoteId(null);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
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
            <option value="option1">All</option>
            <option value="option2">Complete</option>
            <option value="option3">Incomplete</option>
          </select>
          <button className="custom-button" onClick={toggleTheme}></button>
        </div>
      </div>
      <div className="list-container">
        <ul className="todo-list">
        {notes.length === 0 ? (
  <li className="todo-item empty-list">
    <div className="empty-message">
      <img src={isDarkMode ? "/detective_dark.png" : "/detective.png"} alt="Detective" className="task-image" />
      <p className="initial-message">Empty...</p>
    </div>
  </li>
) : (
  notes.map((note, index) => (
    <li key={note.id} className={`todo-item ${note.completed ? 'completed' : ''} ${index < notes.length - 1 ? 'show-line' : ''}`}>
      <span className="field1">
        <label className="custom-checkbox">
          <input 
            type="checkbox" 
            checked={note.completed}
            onChange={() => toggleNoteCompletion(note.id)}
          />
          <span className="checkmark"></span>
        </label>
      </span>
      {editingNoteId === note.id ? (
        <input
          type="text"
          value={editNoteText}
          onChange={(e) => setEditNoteText(e.target.value)}
          onBlur={() => saveEditedNote(note.id, editNoteText)}
          autoFocus
        />
      ) : (
        <p>{note.text}</p>
      )}
      <span className="field2">
        {editingNoteId !== note.id && (
          <>
            <img 
              src="/edit.png" 
              alt="Edit Icon" 
              className="edit-icon"
              onClick={() => startEditingNote(note.id, note.text)}
            />
            <img 
              src="/delete.png" 
              alt="Delete Icon" 
              className="delete-icon"
              onClick={() => deleteNote(note.id)}
            />
          </>
        )}
      </span>
    </li>
  ))
)}
        </ul>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">NEW NOTE</h2>
            <input
              type="text"
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
              placeholder="Input your note..."
              className="note-input"
            />
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>CANCEL</button>
              <button className="apply-button" onClick={addNote}>APPLY</button>
            </div>
          </div>
        </div>
      )}
      <button className="additional-button" onClick={handleAddNote}></button>
    </div>
  );
}

export default App;
