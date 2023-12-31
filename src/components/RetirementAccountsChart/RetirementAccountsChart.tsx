import { Box } from '@mantine/core';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { retirementData as data } from 'data/retirementData';
import useThemeColor from 'hooks/useThemeColor';
import { GraphTitle } from 'components/GraphTitle';

const RetirementAccountsChart = () => {
    const { blue, grape, orange } = useThemeColor();

    return (
        <Box sx={{ width: '30%' }}>
            <GraphTitle title={`Retirement Accounts`} />
            <ResponsiveContainer height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="401(k)"
                        stroke={blue}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="IRA"
                        stroke={grape}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="HSA"
                        stroke={orange}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default RetirementAccountsChart;
