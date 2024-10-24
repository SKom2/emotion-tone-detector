import {EmotionScores} from "../utils/types.ts";
import axios from "axios";

export const apiService = {
    fetchEmotionToneData: async (text: string): Promise<EmotionScores> => {
        try {
            const response = await axios.request({
                method: 'GET',
                url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
                params: {
                    text
                },
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY || "",
                    'x-rapidapi-host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
                }
            });

            return response.data.emotions_normalized;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

