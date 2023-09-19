import React from 'react';
import { Title } from '@mantine/core';

interface Props {
    title: string;
}

const GraphTitle = ({ title }: Props) => {
    return (
        <Title order={4} align="center" color="gray.6" p={4}>
            {title}
        </Title>
    );
};

export default GraphTitle;
