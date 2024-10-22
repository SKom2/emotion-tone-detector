import {ArcElement, Chart, Legend, Tooltip} from "chart.js";
import EmotionScoreDetector from "./components/EmotionToneDetector.tsx";

Chart.register(ArcElement, Tooltip, Legend);

function App() {
    return (
        <div className="min-h-screen py-10 transition-all duration-500 bg-gradient-to-br from-blue-400 to-blue-200">
            <EmotionScoreDetector />
        </div>
    );
}

export default App;