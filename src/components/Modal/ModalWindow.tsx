import React from 'react';
import styled from 'styled-components';

export interface ModalWindowProps {
    imageSrc?: string;
    content: string;
    onClose?: () => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ imageSrc, content, onClose }) => {
    return (
        <ModalContainer>
            <ImageContainer>
                {imageSrc && <img src={imageSrc} alt="modal-icon" />}
            </ImageContainer>
            <ContentContiner>{ content }</ContentContiner>
            <CancelContainer onClick={onClose}>
                <img src="/images/cancel_btn.svg" alt="close" />
            </CancelContainer>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
    position: relative;
    width: 29.3125rem;
    height: 13.1875rem;
    border-radius: 0.625rem;
    background: #FFF;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 9.6875rem;
    height: 9.6875rem;
    margin-left: 1rem;
`;

const ContentContiner = styled.div`
    color: var(--Blue-2, #142F64);
    font-family: Inter;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const CancelContainer = styled.div`
    position: fixed;
    cursor: pointer;
    margin-top: -8rem;
    margin-left: 26rem;
`;

