import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  // 로컬 스토리지에서 저장된 다크모드 상태를 불러오기
  const savedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(savedDarkMode ? savedDarkMode === 'true' : false);

  useEffect(() => {
    // 다크모드 상태가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
      <Main/>
    </div>
  );
}

export default App;
