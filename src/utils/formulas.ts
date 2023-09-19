import { bankData } from 'data/bankData';
import { retirementData } from 'data/retirementData';
import { taxableData } from 'data/taxableData';
import { GenericChartData, Totals } from 'types/graph';
import {
    latestMonth,
    monthsWithData,
    twelveMonthsOfExpenses
} from './constants';

type MonthlyTotal = {
    data: GenericChartData[];
    month: string;
};

type ValueByMonth = {
    data: GenericChartData[];
    month: string;
    key: string;
};

export const getMonthlyTotal = ({ data, month }: MonthlyTotal) => {
    return data
        .filter((el) => el.name === month)
        .reduce((total, el) => {
            for (const key in el) {
                if (key !== 'name') {
                    total += el[key] as number;
                }
            }
            return total;
        }, 0);
};

export const getValueByMonth = ({ data, month, key }: ValueByMonth) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === month) {
            return data[i][key] as number;
        }
    }
    return 0;
};

export const retirementTotalByMonth = (month: string) => {
    return getMonthlyTotal({ data: retirementData, month });
};

export const taxableTotalByMonth = (month: string) => {
    return getMonthlyTotal({ data: taxableData, month });
};

export const cashTotalByMonth = (month: string) => {
    return getMonthlyTotal({ data: bankData, month });
};

export const totalCashValue = (month: string) => {
    return (
        retirementTotalByMonth(month) +
        taxableTotalByMonth(month) +
        cashTotalByMonth(month)
    );
};

export const currentTotalValueStocks = () => {
    const currentRetirementStocks = retirementTotalByMonth(latestMonth);
    const currentTaxableStocks = getValueByMonth({
        data: taxableData,
        month: latestMonth,
        key: 'Broker V'
    });
    return currentRetirementStocks + currentTaxableStocks;
};

export const currentTotalValueBonds = () => {
    const currentTaxableBonds = getValueByMonth({
        data: taxableData,
        month: latestMonth,
        key: 'Broker S'
    });
    return currentTaxableBonds;
};

export const currentTotalValueCash = () => {
    return cashTotalByMonth(latestMonth);
};

export const calculateAllocationByPercent = (percent: number) => {
    return Math.round(
        ((totalCashValue(latestMonth) - twelveMonthsOfExpenses) * percent) / 100
    );
};

export const getTotalValuesByType = () => {
    let totals: Totals[] = [];
    monthsWithData.forEach((month) => {
        totals.push({
            name: month,
            Total: totalCashValue(month),
            Retirement: retirementTotalByMonth(month),
            Taxable: taxableTotalByMonth(month),
            Cash: cashTotalByMonth(month)
        });
    });
    return totals;
};
