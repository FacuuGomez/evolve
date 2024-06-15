'use client';

import { DonutChart } from '@tremor/react';

const datahero = [
	{
		name: 'Pecho',
		value: 85,
	},
	{
		name: 'Espalda',
		value: 85,
	},
	{
		name: 'Piernas',
		value: 80,
	},
	{
		name: 'Triceps',
		value: 77.5,
	},
	{
		name: 'Biceps',
		value: 77.5,
	},
	{
		name: 'Hombros',
		value: 75,
	},
	{
		name: 'Abdominales',
		value: 40,
	},
	{
		name: 'Antebrazos',
		value: 55,
	},
];

const dataFormatter = (number: number) =>
	`${Intl.NumberFormat('us').format(number).toString()} %`;

export const DonutChartComponent = () => (
	<>
		<div className='mx-auto space-y-12'>
			<div className='space-y-3'>
				<span className='text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
					Músculos
				</span>
				<div className='flex justify-center'>
					<DonutChart
						data={datahero}
						variant='donut'
						valueFormatter={dataFormatter}
						onValueChange={(v) => console.log(v)}
					/>
				</div>
			</div>
			<div className='space-y-3'>
				<span className='text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
					Ejercicios
				</span>
				<div className='flex justify-center'>
					<DonutChart
						data={datahero}
						variant='pie'
						valueFormatter={dataFormatter}
						onValueChange={(v) => console.log(v)}
					/>
				</div>
			</div>
		</div>
	</>
);
