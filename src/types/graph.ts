export type SnapShotData = {
    name: string;
    value: number;
};

export type GenericChartData = {
    name: string;
    [key: string]: number | string;
};

export type Totals = {
    name: string;
    Total: number;
    Retirement: number;
    Taxable: number;
    Cash: number;
};
