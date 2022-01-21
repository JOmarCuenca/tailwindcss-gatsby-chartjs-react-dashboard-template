class DataPoint {
    x : number;
    y : number;
}

class NamedDataPoint {
    x : string;
    y : number;
}

class RadialDataPoint extends DataPoint {
    r : number;
}

export {
    DataPoint,
    RadialDataPoint,
    NamedDataPoint
};