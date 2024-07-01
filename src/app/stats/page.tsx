import Image from 'next/image';
import Link from 'next/link';
import evolve_icon from '../../../public/assets/evolve-dark-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGear,
	faChevronDown,
	faCirclePlus,
	faDumbbell,
	faChartLine,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { bebas_neue } from '../../../public/fonts/fonts';
import { Card } from '@tremor/react';
import { TableComponent } from '@/components/Table';
import { AreaChartComponent } from '@/components/AreaChart';
import { DonutChartComponent } from '@/components/DonutChart';

export default function Stats() {
	return (
		<div className='flex bg-gradient-to-br from-[#11182e] to-[#1a2642] text-white h-full max-w-screen flex-col items-center'>
			<nav className='flex justify-center py-2 px-4 w-screen font-medium fixed border-b-2 border-b-primary bg-dark z-10 ml-4'>
				<div className='flex w-full justify-between max-w-7xl '>
					<div className='flex items-center'>
						<Link href='/evolve'>
							<Image
								src={evolve_icon}
								className='w-14 h-14 ml-1 cursor-pointer'
								alt='evolve'
							/>
						</Link>

						<h2 className={`${bebas_neue.className} text-3xl ml-4 text-white`}>
							Estadísticas
						</h2>
					</div>

					<ul className='flex items-center '>
						<li className='hover:text-primary cursor-pointer text-3xl font-bold'>
							<Link href='/calendar'>
								<FontAwesomeIcon
									className='w-6 text-white hover:text-primary active:opacity-70 mr-6'
									icon={faCalendar}
								/>
							</Link>
						</li>

						<li className='flex'>
							<Link href='/settings'>
								<FontAwesomeIcon
									className='w-6 text-white hover:text-primary active:opacity-70'
									icon={faGear}
								/>
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			{/* <section className='flex bg-gradient-to-br from-[#11182e] to-[#1a2642] text-white h-screen max-w-screen flex-col items-center'> */}
			<div className='py-16 pb-24 min-h-screen w-full mt-2 max-w-7xl ml-5'>
				<h3 className='font-bold text-2xl py-6'>Entrenamientos</h3>

				<div className='grid grid-cols-3 gap-4'>
					<Card className='col-span-1 rounded-3xl p-5 flex justify-center text-center'>
						<div>
							<p className='text-xl font-medium'>0/1</p>
							<p className='text-xs opacity-60'>ESTA SEMANA</p>
						</div>
					</Card>
					<Card className='col-span-1 rounded-3xl p-5 flex justify-center text-center'>
						<div>
							<p className='text-xl font-medium'>0</p>
							<p className='text-xs opacity-60'>ESTE MES</p>
						</div>
					</Card>
					<Card className='col-span-1 rounded-3xl p-5 flex justify-center text-center'>
						<div>
							<p className='text-xl font-medium'>0</p>
							<p className='text-xs opacity-60'>MES PASADO</p>
						</div>
					</Card>

					<Card className='col-span-3 mx-auto rounded-3xl p-10'>
						<p className='opacity-70'>Entrenamientos por semana</p>
						<AreaChartComponent />
					</Card>

					<Card className='col-span-2 rounded-3xl p-10 mr-4'>
						<TableComponent />
					</Card>

					<Card className='col-span-1 mx-auto rounded-3xl p-10'>
						<DonutChartComponent />
					</Card>
				</div>

				<h3 className='font-bold text-2xl py-6'>Ejercicios</h3>
			</div>
			{/* </section> */}

			<aside className='fixed bottom-0 flex justify-center bg-dark w-full max-w-7xl h-16 rounded-xl mb-2 shadow-[0px_0px_5px_2px_] shadow-primary ml-5'>
				<div className='grid place-items-center grid-cols-3 gap-2 w-1/2'>
					<Link href='/evolve'>
						<FontAwesomeIcon
							className='w-9 text-white hover:text-primary active:opacity-70 cursor-pointer'
							icon={faDumbbell}
						/>
					</Link>
					{/* <hr /> */}
					<Link href='/stats'>
						<FontAwesomeIcon
							className='w-7 text-white hover:text-primary active:opacity-70  cursor-pointer'
							icon={faChartLine}
						/>
					</Link>
					{/* <hr /> */}
					<Link href='/profile'>
						<FontAwesomeIcon
							className='w-6 text-white hover:text-primary active:opacity-70  cursor-pointer'
							icon={faUser}
						/>
					</Link>
				</div>
			</aside>
		</div>
	);
}
