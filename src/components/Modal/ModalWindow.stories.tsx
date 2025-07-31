import type { Meta, StoryObj } from '@storybook/react';
import { ModalWindow } from './ModalWindow'; 

const meta: Meta<typeof ModalWindow> = {
    title: 'Modal/ModalWindow',
    component: ModalWindow,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModalWindow>;

export const Affiliation: Story = {
    args: {
        imageSrc: '../../../public/images/alarm_character.svg',
        content: '소속을 선택해주십시오',
        onClose: () => alert('모달 닫기'),
    },
};

export const Date: Story = {
    args: {
        imageSrc: '../../../public/images/alarm_character.svg',
        content: '일자를 선택해주십시오',
        onClose: () => alert('모달 닫기'),
    },
};

export const Excel: Story = {
    args: {
        imageSrc: '../../../public/images/alarm_character.svg',
        content: 'Excel를 선택해주십시오',
        onClose: () => alert('모달 닫기'),
    },
};

export const ERP: Story = {
    args: {
        imageSrc: '../../../public/images/alarm_character.svg',
        content: 'ERP를 선택해주십시오',
        onClose: () => alert('모달 닫기'),
    },
};

export const Error: Story = {
    args: {
        imageSrc: '../../../public/images/no_character.svg',
        content: 'Error가 발생했습니다',
        onClose: () => alert('모달 닫기'),
    },
};