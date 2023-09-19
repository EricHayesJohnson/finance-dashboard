import { Collapse, Container, Flex } from '@mantine/core';
import { SnapShotPieGraph } from 'components/SnapShotPieGraph';
import { twelveMonthsOfExpenses } from 'utils/constants';
import {
    calculateAllocationByPercent,
    currentTotalValueBonds,
    currentTotalValueCash,
    currentTotalValueStocks
} from 'utils/formulas';

const currentSnapShotData = [
    { name: 'Stocks', value: currentTotalValueStocks() },
    { name: 'Bonds', value: currentTotalValueBonds() },
    { name: 'Cash', value: currentTotalValueCash() }
];

const idealSnapShotData = [
    { name: 'Stocks', value: calculateAllocationByPercent(90) },
    { name: 'Bonds', value: calculateAllocationByPercent(10) },
    { name: 'Cash', value: twelveMonthsOfExpenses }
];

interface Props {
    isShown: boolean;
}

const AllocationSnapShot = ({ isShown }: Props) => {
    return (
        <Collapse
            in={isShown}
            transitionDuration={300}
            transitionTimingFunction="linear"
        >
            <Container bg="gray.0" py="sm">
                <Flex sx={{ justifyContent: 'space-evenly' }}>
                    <SnapShotPieGraph
                        title="Current"
                        data={currentSnapShotData}
                    />
                    <SnapShotPieGraph title="Goal" data={idealSnapShotData} />
                </Flex>
            </Container>
        </Collapse>
    );
};

export default AllocationSnapShot;
