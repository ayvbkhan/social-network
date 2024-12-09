import { forwardRef } from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  type: string;
  placeholder: string;
  rest?: object; 
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, rest, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest} 
        {...props} 
      />
    );
  }
);
