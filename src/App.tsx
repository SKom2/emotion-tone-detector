import Form from "./components/Form.tsx";
import {useState} from "react";
import {ArcElement, Chart, Legend, Tooltip} from "chart.js";
import {DoughnutChartData, IEmotion} from "./utils/types.ts";
import {Doughnut} from "react-chartjs-2";
import {apiService} from "./api/apiService.ts";
import {transformData} from "./utils/helpers.ts";

Chart.register(ArcElement, Tooltip, Legend);

function App() {
    const [chartData, setChartData] = useState<DoughnutChartData | null>(null);
    const [emotion, setEmotion] = useState<IEmotion | null>(null);

    const onSubmit = async (text: string) => {
        await apiService.fetchEmotionToneData(text)
            .then((response) => {
                if (!response) return;

                const transformedData = transformData(response)
                setChartData(transformedData.chartData)
                setEmotion(transformedData.dominantEmotion)
            })
    }

    return (
        <div
            className="min-h-screen py-10 space-y-8 transition-all duration-500 bg-gradient-to-br from-blue-400 to-blue-200"
        >
            <div className="max-w-[400px] m-auto">
                <h1 className="font-bebas text-transparent font-bold text-4xl bg-clip-text text-white text-center mb-4">
                    Let's check your mood!
                </h1>
                <Form onSubmit={onSubmit}/>
            </div>
            <div className='text-center max-w-[500px] m-auto'>
                <p className={`text-6xl bg-clip-text text-transparent font-bebas border-white`}
                   style={{
                       color: emotion?.color,
                       textShadow: 'rgb(255 255 255) 1px 1px 0',
                   }}
                >
                    {emotion?.text}
                </p>
                <p className="text-lg text-white font-sans mt-2">
                    {emotion?.description}
                </p>
            </div>
            <div className="max-w-[400px] m-auto">
                {
                    chartData && <Doughnut data={chartData}/>
                }
            </div>
        </div>
    )
}

export default App;
