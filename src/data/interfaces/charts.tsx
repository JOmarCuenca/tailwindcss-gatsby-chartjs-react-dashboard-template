import { BarChartData, DoughnutChartData, LineChartData, PieChartData, PolarAreaChartData, RadarChartData, ScatterChartData } from "../classes/charts";

class ChartProps {
    title?: string;
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

export {
    BarChartProps,
    LineChartProps,
    PieChartProps,
    DoughnutChartProps,
    PolarAreaChartProps,
    RadarChartProps,
    ScatterChartProps
};