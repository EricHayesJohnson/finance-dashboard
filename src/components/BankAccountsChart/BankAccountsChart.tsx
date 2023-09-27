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
import { bankData as data } from 'data/bankData';
import useThemeColor from 'hooks/useThemeColor';
import { GraphTitle } from 'components/GraphTitle';

const BankAccountsChart = () => {
    const { blue, grape, orange } = useThemeColor();
    return (
        <Box sx={{ width: '30%' }}>
            <GraphTitle title={`Cash Accounts`} />
            <ResponsiveContainer height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="HYSA"
                        stroke={blue}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Bank 1"
                        stroke={grape}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Bank 2"
                        stroke={orange}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default BankAccountsChart;
