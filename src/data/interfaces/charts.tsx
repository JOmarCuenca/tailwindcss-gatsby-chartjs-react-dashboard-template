import { ChartTypeRegistry } from "chart.js";
import { BarChartData, BaseChartData, BubbleChartData, DoughnutChartData, LineChartData, MultitypeChartData, PieChartData, PolarAreaChartData, RadarChartData, ScatterChartData } from "../classes/charts";

import LegendPosition from "../enums/LegendPosition";
import Ticks from "./ticks";

class ChartProps {
    
    // Title 
    title?: string;
    titlePosition?: LegendPosition;
    titleColor?: string;
    titleSize?: number;

    // Legend
    legendPosition?: LegendPosition;
    legendLabelsColor? : string;

    // Ticks
    xTicks? : Ticks;
    yTicks? : Ticks;

    // Main Data
    data: BaseChartData;
}

class BarChartProps extends ChartProps {
    data: BarChartData;
}

class LineChartProps extends ChartProps {
    data: LineChartData;
}

class PieChartProps extends ChartProps {
    data: PieChartData;
}

class DoughnutChartProps extends ChartProps {
    data: DoughnutChartData;
}

class PolarAreaChartProps extends ChartProps {
    data: PolarAreaChartData;
}

class RadarChartProps extends ChartProps {
    data: RadarChartData;
}

class ScatterChartProps extends ChartProps {
    data: ScatterChartData;
}

class BubbleChartProps extends ChartProps {
    data: BubbleChartData;
}

class MultitypeChartProps extends ChartProps {
    type: keyof ChartTypeRegistry;
    data: MultitypeChartData;
}

export {
    BarChartProps,
    LineChartProps,
    PieChartProps,
    DoughnutChartProps,
    PolarAreaChartProps,
    RadarChartProps,
    ScatterChartProps,
    BubbleChartProps,
    MultitypeChartProps
};