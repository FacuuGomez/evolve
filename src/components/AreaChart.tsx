'use client';

import { AreaChart } from '@tremor/react';

interface ChartData {
	date: string;
	Peso: number;
}

const chartdata: ChartData[] = [
	{
		date: 'ENE 22',
		Peso: 67.5,
	},
	{
		date: 'FEB 22',
		Peso: 65,
	},
	{
		date: 'MAR 22',
		Peso: 70,
	},
	{
		date: 'ABR 22',
		Peso: 75,
	},
	{
		date: 'MAY 22',
		Peso: 80,
	},
	{
		date: 'JUN 22',
		Peso: 85,
	},
	{
		date: 'JUL 22',
		Peso: 85,
	},
];

const dataFormatter = (number: number): string =>
	`${Intl.NumberFormat('us').format(number).toString()} kg`;

export function AreaChartComponent(): JSX.Element {
	return (
		<AreaChart
			className='h-80'
			data={chartdata}
			index='date'
			categories={['Peso']}
			colors={['indigo']}
			valueFormatter={dataFormatter}
			yAxisWidth={60}
			onValueChange={(v) => console.log(v)}
		/>
	);
}
