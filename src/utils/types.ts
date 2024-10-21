import {ChartData} from "chart.js";

export enum Emotion {
    Fear = "Fear",
    Anger = "Anger",
    Surprise = "Surprise",
    Sadness = "Sadness",
    Joy = "Joy",
    Love = "Love"
}

export enum EmotionColor {
    Fear = "#FF5733",
    Anger = "#C70039",
    Surprise = "#FFC300",
    Sadness = "#3498DB",
    Joy = "#28B463",
    Love = "#FF69B4"
}

export enum EmotionDescription {
    Fear = "Your text expresses Fear. It indicates a reaction to danger or an intense feeling of worry and anxiety.",
    Anger = "Your text expresses Anger. This shows frustration or hostility, often in response to an injustice or provocation.",
    Surprise = "Your text expresses Surprise. It reflects shock or astonishment at something unexpected or unusual.",
    Sadness = "Your text expresses Sadness. It conveys feelings of loss, disappointment, or deep emotional pain.",
    Joy = "Your text expresses Joy. It highlights feelings of happiness, excitement, and positive energy.",
    Love = "Your text expresses Love. It shows deep affection, warmth, and emotional connection toward something or someone.",
    Unknown = "Your text expresses an unknown emotion."
}

export interface EmotionItem {
    emotion: Emotion;
    emotion_score: number;
}

export interface IEmotion {
    label: Emotion;
    color: EmotionColor;
    description: EmotionDescription,
}

export type DoughnutChartData = ChartData<'doughnut', number[], unknown>;
