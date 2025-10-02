// 초기 진입 모달 컴포넌트
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const blinkingCursor = keyframes`50% { opacity: 0; }`;

type StartModalProps = {
    duration?: number;     
    onClose?: () => void;  
  };

  export const StartModal: React.FC<StartModalProps> = ({ duration = 15000, onClose }) => {
  const [open, setOpen] = useState(true);

  // 15초 후 모달 자동 닫힘
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      onClose?.(); // 모달 종료 시점 부모에 신호
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!open) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title>서버 작동중</Title>
        <Content>잠시만 기다려주세요..</Content>
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 22.3125rem;
  height: 9rem;
  border-radius: 0.9375rem;
  border: 1px solid var(--Black-1, #AFAFAF);
  background: #fff;
  padding: 1rem;
`;

const Title = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 1.56rem;
  color: #000;
  font-family: KoPubWorld_m;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Content = styled.div`
  position: absolute;
  top: 5.6rem;
  left: 1.56rem;
  color: #000;
  font-family: KoPubWorld_r;
  font-size: 1.2rem;
  font-weight: 300;
  white-space: normal;
  word-break: keep-all;

  &:after {
    content: '|';
    position: absolute;
    right: -8px;
    animation: ${blinkingCursor} 0.8s infinite;
  }
`;
