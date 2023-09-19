import React from 'react';
import { RADIAN } from 'utils/constants';

interface CustomLabel {
    cx?: number;
    cy?: number;
    index?: number;
    innerRadius: number;
    midAngle: number;
    outerRadius: number;
    percent: number;
}

export const customLabel = ({
    cx,
    cy,
    innerRadius,
    midAngle,
    outerRadius,
    percent
}: CustomLabel) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx! + radius * Math.cos(-midAngle * RADIAN);
    const y = cy! + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            dominantBaseline="central"
            fill="white"
            textAnchor={x > cx! ? 'start' : 'end'}
            x={x}
            y={y}
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
