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
import { taxableData as data } from 'data/taxableData';
import useThemeColor from 'hooks/useThemeColor';
import { GraphTitle } from 'components/GraphTitle';

const TaxableAccountsChart = () => {
    const { blue, grape } = useThemeColor();
    return (
        <Box sx={{ width: '30%' }}>
            <GraphTitle title={`Taxable Accounts`} />
            <ResponsiveContainer height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Broker S"
                        stroke={blue}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Broker V"
                        stroke={grape}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default TaxableAccountsChart;
