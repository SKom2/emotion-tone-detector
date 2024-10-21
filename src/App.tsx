import Form from "./components/Form.tsx";
import {useState} from "react";
import {dataFromApi, transformToChartData} from "./utils/transformToChartData.ts";
import {ArcElement, Chart, ChartData, Legend, Tooltip} from "chart.js";
import {EmotionItem} from "./utils/types.ts";
import {Doughnut} from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const fetchEmotionToneData = async (text: string) => {
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
                resolve(dataFromApi)
            }, 1000)
        })


        if (!response) throw new Error("Could not find emotion data!");

        return response;


        // return response.data.nlpcloud.items;
    } catch (error) {
        return null;
    }
}

export type DoughnutChartData = ChartData<"doughnut", number[], unknown>;

function App() {
    const [chartData, setChartData] = useState<DoughnutChartData | null>(null);

    const onSubmit = async (text: string) => {
        await fetchEmotionToneData(text)
            .then((response) => {
                if (!response) return;

                const transformedData = transformToChartData(response)
                setChartData(transformedData)
            })
    }



    return (
        <div
            className={`min-h-screen pt-20 flex flex-col gap-8 justify-start items-center transition-all duration-500 bg-gradient-to-br from-blue-200`}
        >
            <h1 className="text-white font-bold text-2xl mb-2">Let's check your mood!</h1>
            <Form onSubmit={onSubmit}/>
            <div>
                {
                    chartData && <Doughnut data={chartData} />
                }
            </div>
        </div>
    )
}

export default App;
