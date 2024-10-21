import { ChangeEvent, FC } from "react";

interface InputProps {
    inputValue: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input: FC<InputProps> = ({ inputValue, onChange }) => {
    return (
        <textarea
            placeholder="Enter your text here..."
            className="border-2 rounded border-gray-400 focus:border-blue-300 outline-none transition-colors duration-300 text-lg p-2 w-80"
            value={inputValue}
            onChange={onChange}
        />
    );
};

export default Input;