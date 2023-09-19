import { Container, Select, Title } from '@mantine/core';
import { AllocationOverTime } from 'containers/AllocationOverTime';
import { AllocationSnapShot } from 'containers/AllocationSnapShot';
import { useState } from 'react';
import { ChartType, chartViewOptions } from './constants';
export default function App() {
    const [chartView, setChartView] = useState<ChartType | null>(null);
    return (
        <>
            <Container>
                <Title align="center" color="gray.8" order={1}>
                    {`Personal Finance Dashboard`}
                </Title>
                <Select
                    data={chartViewOptions}
                    onChange={(c: ChartType) => setChartView(c)}
                    placeholder="Select chart view"
                    radius="lg"
                    size="md"
                    value={chartView}
                    variant="filled"
                    sx={{ marginBottom: '62px', maxWidth: '240px' }}
                />
                <AllocationOverTime
                    isShown={chartView === ChartType.overtime}
                />
                <AllocationSnapShot
                    isShown={chartView === ChartType.snapshot}
                />
            </Container>
        </>
    );
}
