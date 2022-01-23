import { ChartTypeRegistry } from "chart.js";
import { BarChartData, BubbleChartData, DoughnutChartData, LineChartData, PieChartData, PolarAreaChartData, RadarChartData, ScatterChartData } from "../classes/charts";

import LegendPosition from "../enums/LegendPosition";

class ChartProps {
    title?: string;
    legendPosition? : LegendPosition;
    titlePosition?  : LegendPosition;
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
    data: any;
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