class UnlabeledChartDataset {
    data: number[];
    backgroundColor: string | string[];
    borderWidth?: number;
    borderColor?: string;
}

class LabeledChartDataset extends UnlabeledChartDataset {
    label: string;
    backgroundColor: string;
}

class ChartData {
    labels: string[];
    datasets: UnlabeledChartDataset[];
}

class LabeledChartData extends ChartData {
    datasets: LabeledChartDataset[];
}

class BarChartData extends LabeledChartData {
    stack?: string
};

class LineChartData extends LabeledChartData { };

class PieChartData extends ChartData { };

class DoughnutChartData extends ChartData { };

class PolarAreaChartData extends ChartData { };

class RadarChartData extends ChartData { };

export {
    BarChartData,
    LineChartData,
    PieChartData,
    DoughnutChartData,
    PolarAreaChartData,
    RadarChartData
};