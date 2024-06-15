import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from '@tremor/react';

export const TableComponent = () => (
	<div className='mx-auto max-w-2xl'>
		<Table>
			<TableHead>
				<TableRow>
					<TableHeaderCell>PESO</TableHeaderCell>
					<TableHeaderCell className='text-center'>
						REPETICIONES
					</TableHeaderCell>
					<TableHeaderCell className='text-center'>% DE 1RM</TableHeaderCell>
					<TableHeaderCell className='text-right'>
						MEJOR RENDIMIENTO
					</TableHeaderCell>
				</TableRow>
			</TableHead>

			<TableBody>
				<TableRow>
					<TableCell>85 kg</TableCell>
					<TableCell className='text-center'>2</TableCell>
					<TableCell className='text-center'>85%</TableCell>
					<TableCell className='text-right'>
						<p>85 kgs (x2)</p>
						<p className='opacity-70'>LUN. 10 DE JUN.</p>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>80 kg</TableCell>
					<TableCell className='text-center'>3</TableCell>
					<TableCell className='text-center'>80%</TableCell>
					<TableCell className='text-right'>
						<p>80 kgs (x3)</p>
						<p className='opacity-70'>JUE. 6 DE JUN.</p>
					</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>75 kg</TableCell>
					<TableCell className='text-center'>4</TableCell>
					<TableCell className='text-center'>75%</TableCell>
					<TableCell className='text-right'>
						<p>75 kgs (x4)</p>
						<p className='opacity-70'>LUN. 3 DE JUN.</p>
					</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>70 kg</TableCell>
					<TableCell className='text-center'>5</TableCell>
					<TableCell className='text-center'>70%</TableCell>
					<TableCell className='text-right'>
						<p>70 kgs (x5)</p>
						<p className='opacity-70'>JUE. 30 DE MAY.</p>
					</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>65 kg</TableCell>
					<TableCell className='text-center'>6</TableCell>
					<TableCell className='text-center'>65%</TableCell>
					<TableCell className='text-right'>
						<p>65 kgs (x6)</p>
						<p className='opacity-70'>LUN. 27 DE MAY.</p>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</div>
);
