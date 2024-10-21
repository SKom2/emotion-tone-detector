import {EmotionItem} from "./types.ts";

export const dataFromApi = [
        {
            emotion: "Fear",
            emotion_score: 99
        },
        {
            emotion: "Anger",
            emotion_score: 50
        },
        {
            emotion: "Surprise",
            emotion_score: 5
        },
        {
            emotion: "Sadness",
            emotion_score: 40
        },
        {
            emotion: "Joy",
            emotion_score: 40
        },
        {
            emotion: "Love",
            emotion_score: 10
        }
]

export const transformToChartData = (items: EmotionItem[]) => {
    const labels = items.map(item => item.emotion)
    const data = items.map(item => item.emotion_score)
    const backgroundColor = [
        "#FF5733",  // Fear
        "#C70039",  // Anger
        "#FFC300",  // Surprise
        "#3498DB",  // Sadness
        "#28B463",  // Joy
        "#FF69B4"   // Love
    ];

    return {
        labels,
        datasets: [{

            data,
            backgroundColor,

            hoverOffset: 10,
        }]
    }
}