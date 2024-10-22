import {ChartData} from "chart.js";

export enum Emotion {
    Fear = "Fear",
    Anger = "Anger",
    Surprise = "Surprise",
    Sadness = "Sadness",
    Joy = "Joy",
    Disgust = "Disgust"
}

export enum EmotionColor {
    Fear = "#FF5733",
    Anger = "#C70039",
    Surprise = "#FFC300",
    Sadness = "#3498DB",
    Joy = "#28B463",
    Disgust = "#8B4513"
}

export enum EmotionDescription {
    Fear = "Your text expresses Fear. It indicates a reaction to danger or an intense feeling of worry and anxiety.",
    Anger = "Your text expresses Anger. This shows frustration or hostility, often in response to an injustice or provocation.",
    Surprise = "Your text expresses Surprise. It reflects shock or astonishment at something unexpected or unusual.",
    Sadness = "Your text expresses Sadness. It conveys feelings of loss, disappointment, or deep emotional pain.",
    Joy = "Your text expresses Joy. It highlights feelings of happiness, excitement, and positive energy.",
    Disgust = "Your text expresses Disgust. It shows strong aversion or repulsion towards something unpleasant or offensive."
}


export interface EmotionScores {
    sadness: number;
    anger: number;
    fear: number;
    disgust: number;
    joy: number;
    surprise: number;
}

export interface IEmotion {
    text: Emotion;
    color: EmotionColor;
    description: EmotionDescription,
}

export type DoughnutChartData = ChartData<'doughnut', number[], unknown>;
