import {Doughnut} from "react-chartjs-2";
import {DoughnutChartData} from "../utils/types.ts";
import {FC} from "react";

interface ChartContainerProps {
    chartData: DoughnutChartData;
}

const ChartContainer: FC<ChartContainerProps> = ({chartData}) => {
    return (
        <div className="max-w-[400px] m-auto">
            <Doughnut data={chartData} />
        </div>
    );
}

export default ChartContainer;