import {FC} from "react";

const Button: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <button
            type="submit"
            className="bg-blue-300 text-white p-2 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
            {isLoading ? "Loading..." : "Detect Emotional Tone"}
        </button>
    );
};

export default Button;