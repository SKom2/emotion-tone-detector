import { ChangeEvent, FC } from "react";

interface InputProps {
    inputValue: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ inputValue, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Enter your text here..."
            className="border-b-2 border-gray-400 focus:border-pink-400 outline-none transition-colors duration-300 text-lg p-2 w-80"
            value={inputValue}
            onChange={onChange}
        />
    );
};

export default Input;