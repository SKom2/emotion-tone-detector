export interface EmotionItem {
    emotion: string;
    emotion_score: number;
}

export interface ChartDataset {
    data: number[];
    backgroundColor: string[];
}

export interface ChartData {
    labels: string[];
    datasets: ChartDataset[];
}