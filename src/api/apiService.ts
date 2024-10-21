import {EmotionItem} from "../utils/types.ts";
import {mockData} from "../utils/helpers.ts";

export const apiService = {
    fetchEmotionToneData: async (text: string) => {
        try {
            // const response = await axios.request({
            //   method: 'POST',
            //   url: 'https://api.edenai.run/v2/text/emotion_detection',
            //   headers: {
            //     accept: 'application/json',
            //     'content-type': 'application/json',
            //     authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDY3ZjI2NGItNDRlOS00ZWIwLTkyOWMtNTU1NTNhZDk3MTRiIiwidHlwZSI6ImFwaV90b2tlbiJ9.imfp4RI_2xyIluc4tCOcCfxeKvTDND2Lu4b5Nd4b_ZA'
            //   },
            //   data: {
            //     response_as_dict: true,
            //     attributes_as_list: false,
            //     show_base_64: true,
            //     show_original_response: false,
            //     providers: 'nlpcloud',
            //     text: text
            //   }
            // });


            const response: EmotionItem[] = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(mockData)
                }, 1000)
            })


            if (!response) throw new Error("Could not find emotion data!");

            return response;

            // return response.data.nlpcloud.items;
        } catch (error) {
            return null;
        }
    }
}

