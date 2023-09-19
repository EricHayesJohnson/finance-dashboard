import { useMantineTheme } from '@mantine/core';
/*
 Hook for easily referencing theme colors for non Mantine components 
*/
const useThemeColor = () => {
    const theme = useMantineTheme();
    return {
        blue: theme.colors.blue[4],
        grape: theme.colors.grape[4],
        orange: theme.colors.orange[4],
        red: theme.colors.red[5]
    };
};

export default useThemeColor;
