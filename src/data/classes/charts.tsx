import { DataPoint } from "./point";

class BaseDataset {
    backgroundColor: string | string[];
}

class BorderedBaseDataset extends BaseDataset {
    borderWidth?: number;
    borderColor?: string;
}

class LabeledChartDataset extends BaseDataset {
    label: string;
    backgroundColor: string;
}

class PointLabeledChartDataset extends LabeledChartDataset {
    data : DataPoint[];
}

class UnlabeledBorderedChartDataset extends BorderedBaseDataset {
    data: number[];
}

class LabeledBorderedChartDataset extends UnlabeledBorderedChartDataset {
    label: string;
    backgroundColor: string;
}

class BaseChartData {
    datasets: BaseDataset[];
}

class LabelableChartData extends BaseChartData {
    labels: string[];
    datasets: UnlabeledBorderedChartDataset[];
}

class LabeledChartData extends LabelableChartData {
    datasets: LabeledBorderedChartDataset[];
}

class BarChartData extends LabeledChartData {
    stack?: string
};

class LineChartData extends LabeledChartData { };

class PieChartData extends LabelableChartData { };

class DoughnutChartData extends LabelableChartData { };

class PolarAreaChartData extends LabelableChartData { };

class RadarChartData extends LabelableChartData { };

class PointChartData extends BaseChartData {
    datasets : PointLabeledChartDataset[];
}

class ScatterChartData extends PointChartData {}

export {
    BarChartData,
    LineChartData,
    PieChartData,
    DoughnutChartData,
    PolarAreaChartData,
    RadarChartData,
    ScatterChartData
};