import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import './custom.css';

export function ChatDialogue({ children }) {
  return <div className="chatDialogue">{children}</div>;
}

export function ChatBox({ content, isTyping }) {
  return (
    <div className="chat_box">
      {isTyping ? (
        <div className="chat_boxDot">
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <div>
          {!!content && <span style={{ color: 'transparent', textShadow: '0 0 0 #B174E5' }}>🗣️</span>}
          <span style={{ color: '#B174E5', fontWeight: 'bold' }}>{content}</span>
        </div>
      )}
    </div>
  );
}

export function Phone() {
  return <div className="phone"></div>;
}


export default { ChatDialogue, ChatBox, Phone };
