import React, { ReactNode } from 'react';

interface ButtonProps {
    text?: string;
    children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ text, children }) => {
    return <button>{text ?? children}</button>;
};
