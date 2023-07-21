import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = ({ darkMode, onDarkModeToggle }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modeText, setModeText] = useState(darkMode ? '라이트모드' : '다크모드'); // 텍스트 상태 추가

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleModeToggle = () => {
    onDarkModeToggle(); // 다크모드 토글 함수 호출
    setModeText((prevModeText) => (prevModeText === '다크모드' ? '라이트모드' : '다크모드')); // 텍스트 상태 변경
  };

  return (
    <header>
      <nav className={isMobile ? 'mobile-nav' : 'desktop-nav'}>
        <div className="logo">yurim portfolio</div>
        {isMobile ? (
          <div className="hamburger-menu" onClick={handleMenuToggle}>
            ☰ 
          </div>
        ) : (
          <ul className="menu">
            <li onClick={handleModeToggle}>{modeText}</li>
            <li>About</li>
            <li>프로필</li>
          </ul>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={handleModeToggle}>{modeText}</li>
            <li>About</li>
            <li>프로필</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
