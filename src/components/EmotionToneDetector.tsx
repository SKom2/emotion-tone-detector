import Form from "./Form";
import {useState} from "react";
import {DoughnutChartData, IEmotion} from "../utils/types";
import {apiService} from "../api/apiService";
import {transformData} from "../utils/helpers";
import EmotionDisplay from "./EmotionDisplay";
import ChartContainer from "./ChartContainer";
import Header from "./Header";

const EmotionScoreDetector = () => {
    const [chartData, setChartData] = useState<DoughnutChartData | null>(null);
    const [emotion, setEmotion] = useState<IEmotion | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (text: string) => {
        if (!text) return;

        setIsLoading(true);
        await apiService.fetchEmotionToneData(text)
            .then((response) => {
                if (!response) return;

                const transformedData = transformData(response);
                setChartData(transformedData.chartData);
                setEmotion(transformedData.dominantEmotion);
            })
            .then(() => setIsLoading(false))
    };

    return (
        <div
            className="px-10 space-y-8"
        >
            <Header />
            <Form onSubmit={onSubmit} isLoading={isLoading} />
            { emotion ? <EmotionDisplay emotion={emotion} /> : null }
            { chartData ? <ChartContainer chartData={chartData} /> : null }
        </div>
    );
};

export default EmotionScoreDetector;