import React from 'react';
import { Collapse, Divider, Container, Flex } from '@mantine/core';
import { RetirementAccountsChart } from 'components/RetirementAccountsChart';
import { TaxableAccountsChart } from 'components/TaxableAccountsChart';
import { BankAccountsChart } from 'components/BankAccountsChart';
import { TotalCashValueChart } from 'components/TotatCashValueChart';

interface Props {
    isShown: boolean;
}

const AllocationOverTime = ({ isShown }: Props) => {
    const containerColor = 'gray.0';

    return (
        <Collapse
            in={isShown}
            transitionDuration={300}
            transitionTimingFunction="linear"
        >
            <Container bg={containerColor}>
                <Flex gap="lg">
                    <RetirementAccountsChart />
                    <TaxableAccountsChart />
                    <BankAccountsChart />
                </Flex>
            </Container>
            <Divider my="sm" />
            <Container bg={containerColor}>
                <TotalCashValueChart />
            </Container>
        </Collapse>
    );
};

export default AllocationOverTime;
