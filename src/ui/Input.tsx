import { ChangeEvent, FC, useEffect, useRef } from "react";

interface InputProps {
    inputValue: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input: FC<InputProps> = ({ inputValue, onChange }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [inputValue]);

    return (
        <textarea
            ref={textareaRef}
            placeholder="Enter your text here..."
            className="border-2 rounded border-gray-400 focus:border-blue-300 outline-none transition-colors duration-300 text-lg p-2 w-full resize-none overflow-hidden" // resize-none отключает изменение размеров вручную
            value={inputValue}
            onChange={onChange}
        />
    );
};

export default Input;