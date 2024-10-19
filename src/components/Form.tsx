import axios from "axios";
import {FormEvent, useState} from "react";

const fetchEmotionToneData = async (text: string) => {
    try {
        const response = await axios.request({
            method: 'POST',
            url: 'https://api.edenai.run/v2/text/emotion_detection',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDY3ZjI2NGItNDRlOS00ZWIwLTkyOWMtNTU1NTNhZDk3MTRiIiwidHlwZSI6ImFwaV90b2tlbiJ9.imfp4RI_2xyIluc4tCOcCfxeKvTDND2Lu4b5Nd4b_ZA'
            },
            data: {
                response_as_dict: true,
                attributes_as_list: false,
                show_base_64: true,
                show_original_response: false,
                providers: 'nlpcloud',
                text: text
            }
        });

        if (!response) throw new Error("Could not find emotion data!");

        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [emotions, setEmotions] = useState([]);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const result = await fetchEmotionToneData(inputValue);

        if (result) {
            setEmotions(result.nlpcloud.items);
        }
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col justify-center items-center min-h-screen gap-4">
            <label className="flex flex-col items-center">
                <span>Detect text tone: </span>
                <input
                    type="text"
                    className="border rounded"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <button type="submit" className="rounded bg-gray-400 text-white p-1">Submit</button>
            {
                emotions.length > 0 && emotions.map((emotion, index) => {
                    return (
                        <div key={index}>{emotion.emotion}</div>
                    );
                })
            }
        </form>
    );
};

export default Form;