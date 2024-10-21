import {FC, FormEvent, useState} from "react";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";

interface FormProps {
    onSubmit: (values: string) => void;
}

const Form: FC<FormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(inputValue)
    }

    return (
        <form
            onSubmit={handleOnSubmit}
            className="flex flex-col justify-center items-center gap-6 p-8 bg-white shadow-lg rounded-xl"
        >
            <Input inputValue={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <Button/>
        </form>
    );
};

export default Form;