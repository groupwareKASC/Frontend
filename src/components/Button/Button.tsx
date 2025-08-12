import React from 'react';
import styled from "styled-components";
import { useNavigate  } from 'react-router-dom';
import type { ButtonProps } from './Button.types'; 

export const Button = ({ label, path }: ButtonProps) => {
    const navigate = useNavigate();

    // 경로가 존재한다면, path로 이동 
    const handleClick = () => {
        if(path) navigate(path);
    }
    return <Btn onClick={handleClick}>{label}</Btn>;
};

const Btn = styled.div`
    width: 13.125vw;
    height: 9.074vh;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
    color: var(--Black-1, #000);
    font-family: Inter;
    font-size: 1.4vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        background-color: #F6F7F9;
        color: #9DBEE0;
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 0.4rem;
    }
`;