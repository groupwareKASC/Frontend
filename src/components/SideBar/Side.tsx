import React from 'react';
import styled from "styled-components";
import { Button } from "../Button/Button";
import type { ButtonProps } from '../Button/Button.types';
import small_icon from "../../../public/images/small_logo.svg"

type SideProps = {
    buttons: ButtonProps[];
};

export const Side = ({ buttons }: SideProps) => {

    return(
        <SideBar>
            <Logo><img src={small_icon} alt="small_icon" /></Logo>
            <aside>
                {buttons.map((btn, index) => (
                    <Button key={index} label={btn.label} path={btn.path}/>
                ))}
            </aside>
        </SideBar>
    );
};

const SideBar = styled.aside`
  width: 15.75rem;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  gap: 0.5rem; 
  background-color: white;
  box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.25);
  align-items: center;
`;

const Logo = styled.div`
    margin: 2.56rem 0;
`;

