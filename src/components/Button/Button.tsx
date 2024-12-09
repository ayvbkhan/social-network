interface ButtonProps {
    text?: string;
    children?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, children }) => {
    return <button>{text ?? children}</button>;
};
