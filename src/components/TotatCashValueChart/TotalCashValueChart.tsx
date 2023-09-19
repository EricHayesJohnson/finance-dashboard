import { Box, Title } from '@mantine/core';
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
import useThemeColor from 'hooks/useThemeColor';
import { getTotalValuesByType } from 'utils/formulas';

const TotalCashValueChart = () => {
    const { blue, grape, orange, red } = useThemeColor();
    const data = getTotalValuesByType();
    return (
        <Box sx={{ width: '100%' }}>
            <Title order={4} align="left" color="gray.6" p={4}>
                {`Cash value by account type`}
            </Title>
            <ResponsiveContainer height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Total"
                        stroke={red}
                        activeDot={{ r: 6 }}
                        strokeWidth={3}
                    />
                    <Line
                        type="monotone"
                        dataKey="Retirement"
                        stroke={blue}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Taxable"
                        stroke={grape}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Cash"
                        stroke={orange}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default TotalCashValueChart;
