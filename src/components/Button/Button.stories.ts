import { Button } from './Button';

export default {
    title: 'Component/Button',
    component: Button,
};

export const Primary = {
    args : {
        label: '근태검증',
        path: '/Attendence',
    },
};

export const Second = {
    args : {
        label: '변동비 (특별근무)',
        path: '/VariableCost',
    },
};

export const Third = {
    args : {
        label: '변동비 (대체근무)',
        path: '/SubstituteCost',
    },
};