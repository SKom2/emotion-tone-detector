import {
    DoughnutChartData,
    Emotion,
    EmotionColor,
    EmotionDescription,
    EmotionScores,
    IEmotion
} from "./types.ts";

export const transformData = (emotion_scores: EmotionScores): { chartData: DoughnutChartData, dominantEmotion: IEmotion} => {
    const emotions = Object.keys(emotion_scores).map(
        (emotion) => emotion.charAt(0).toUpperCase() + emotion.slice(1)
    ) as Emotion[];
    const data: number[] = Object.values(emotion_scores)
    const backgroundColor: EmotionColor[] = emotions.map((label) => getEmotionColor(label))

    const chartData = {
        labels: emotions,
        datasets: [{
            data,
            backgroundColor,
        }]
    }

    const dominantEmotionText = Object.entries(emotion_scores).reduce(
        (max, item) => item[1] > max[1] ? item : max
    )[0] as Emotion
    const dominantEmotionIndex = Object.keys(emotion_scores).indexOf(dominantEmotionText)
    const dominantEmotionColor = backgroundColor[dominantEmotionIndex]
    const dominantEmotionDescription = getEmotionDescription((dominantEmotionText.charAt(0).toUpperCase() + dominantEmotionText.slice(1)) as Emotion)

    const dominantEmotion: IEmotion = {
        text: dominantEmotionText,
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
        case Emotion.Disgust:
            return EmotionDescription.Disgust;
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
        case Emotion.Disgust:
            return EmotionColor.Disgust;
    }
}