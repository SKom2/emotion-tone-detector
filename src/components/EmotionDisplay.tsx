import {IEmotion} from "../utils/types.ts";
import {FC} from "react";

interface EmotionDisplayProps {
    emotion: IEmotion;
}

const EmotionDisplay: FC<EmotionDisplayProps> = ({emotion}) => {
    return (
        <div className='text-center max-w-[500px] m-auto'>
            <p className={`text-6xl bg-clip-text text-transparent font-bebas border-white`}
               style={{
                   color: emotion.color,
                   textShadow: 'rgb(255 255 255) 1px 1px 0',
               }}
            >
                {emotion.text}
            </p>
            <p className="text-lg text-white font-sans mt-2">
                {emotion.description}
            </p>
        </div>
    );
}

export default EmotionDisplay;