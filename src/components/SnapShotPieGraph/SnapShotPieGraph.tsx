import React from 'react';
import { Cell, PieChart, Pie, Tooltip } from 'recharts';
import { Flex } from '@mantine/core';
import { GraphTitle } from 'components/GraphTitle';
import { customLabel } from 'utils/customLabel';
import useThemeColor from 'hooks/useThemeColor';
import { SnapShotData } from 'types/graph';

interface Props {
    title: string;
    data: SnapShotData[];
}

const SnapShotPieGraph = ({ title, data }: Props) => {
    const { blue, grape, orange } = useThemeColor();

    const getCellColors = () => {
        const COLORS = [blue, grape, orange];
        return COLORS.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ));
    };

    return (
        <Flex sx={{ flexDirection: 'column' }}>
            <GraphTitle title={title} />
            <PieChart height={380} width={400}>
                <Pie
                    cx={200}
                    cy={180}
                    data={data}
                    dataKey="value"
                    innerRadius={80}
                    label={customLabel}
                    labelLine={false}
                    outerRadius={150}
                >
                    {getCellColors()}
                </Pie>
                <Tooltip />
            </PieChart>
        </Flex>
    );
};

export default SnapShotPieGraph;
