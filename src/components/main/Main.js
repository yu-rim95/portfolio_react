import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import './Main.scss'; 
import { Glitch } from '../glitch/Glitch.js';

const Main = () => {
  // Fullpage 스크롤을 적용할 섹션들의 내용을 배열로 정의합니다.
  const sections = [
    { content: <Glitch /> },
    { content: 'Section 2 content' },
    { content: 'Section 3 content' },
  ];

  // SectionsContainer에 사용할 options 설정을 정의합니다.
  const options = {
    sectionClassName: 'section', // 각 섹션에 적용될 클래스 이름을 설정합니다.
    anchors: ['section1', 'section2', 'section3'], // 각 섹션의 앵커를 설정합니다. 
    scrollBar: false, // 스크롤 바를 표시할지 여부를 설정합니다.
    navigation: true, // 페이지 내비게이션을 표시할지 여부를 설정합니다.
    verticalAlign: false, // 섹션을 수직으로 정렬할지 여부를 설정합니다.
    sectionPaddingTop: '50px', // 각 섹션의 상단 여백을 설정합니다.
    sectionPaddingBottom: '0', // 각 섹션의 하단 여백을 설정합니다.
  };

  return (
    <div className='main'>
    {/* SectionsContainer로 Fullpage Scroll을 감싸줍니다. */}
    <SectionsContainer {...options}>
      {/* Section 컴포넌트로 각 섹션의 내용을 렌더링합니다. */}
      {sections.map((section, index) => (
        <Section key={index} className={`section${index + 1}`}>
          <div className="section-content">{section.content}</div>
        </Section>
      ))}
    </SectionsContainer>
  </div>
  );
};

export default Main;
