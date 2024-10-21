import {DoughnutChartData, Emotion, EmotionColor, EmotionDescription, EmotionItem, IEmotion} from "./types.ts";

export const mockData = [
        {
            emotion: Emotion.Fear,
            emotion_score: 0.13,
        },
        {
            emotion: Emotion.Anger,
            emotion_score: 0.008,
        },
        {
            emotion: Emotion.Surprise,
            emotion_score: 0.022,
        },
        {
            emotion: Emotion.Sadness,
            emotion_score: 0,
        },
        {
            emotion: Emotion.Joy,
            emotion_score: 0,
        },
        {
            emotion: Emotion.Love,
            emotion_score: 0,
        }
]

export const transformData = (items: EmotionItem[]): { chartData: DoughnutChartData, dominantEmotion: IEmotion} => {
    const labels = items.map(item => item.emotion)
    const data = items.map(item => item.emotion_score)
    const backgroundColor: EmotionColor[] = items.map(item => getEmotionColor(item.emotion))

    const chartData = {
        labels,
        datasets: [{
            data,
            backgroundColor,
        }]
    }

    const dominantEmotionItem = items.reduce((max, item) => item.emotion_score > max.emotion_score ? item : max)
    const dominantEmotionIndex = items.indexOf(dominantEmotionItem)
    const dominantEmotionColor = backgroundColor[dominantEmotionIndex]
    const dominantEmotionText = dominantEmotionItem.emotion
    const dominantEmotionDescription = getEmotionDescription(dominantEmotionText)

    const dominantEmotion = {
        label: dominantEmotionText,
        color: dominantEmotionColor,
        description: dominantEmotionDescription
    }

    return {
        chartData,
        dominantEmotion
    }
}

export const getEmotionDescription = (emotion: Emotion): EmotionDescription => {
    switch (emotion) {
        case Emotion.Fear:
            return EmotionDescription.Fear;
        case Emotion.Anger:
            return EmotionDescription.Anger;
        case Emotion.Surprise:
            return EmotionDescription.Surprise;
        case Emotion.Sadness:
            return EmotionDescription.Sadness;
        case Emotion.Joy:
            return EmotionDescription.Joy;
        case Emotion.Love:
            return EmotionDescription.Love;
        default:
            return EmotionDescription.Unknown;
    }
}

export const getEmotionColor = (emotion: Emotion): EmotionColor => {
    switch (emotion) {
        case Emotion.Fear:
            return EmotionColor.Fear;
        case Emotion.Anger:
            return EmotionColor.Anger;
        case Emotion.Surprise:
            return EmotionColor.Surprise;
        case Emotion.Sadness:
            return EmotionColor.Sadness;
        case Emotion.Joy:
            return EmotionColor.Joy;
        case Emotion.Love:
            return EmotionColor.Love;
    }
}