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

export default function Evolve() {
	return (
		<div className='flex bg-gradient-to-br from-[#11182e] to-[#1a2642] text-white h-screen max-w-screen flex-col items-center'>
			<nav className='flex justify-center py-2 px-4 w-screen font-medium fixed border-b-2 border-b-primary bg-dark z-10'>
				<div className='flex w-full justify-between max-w-7xl'>
					<div className='flex items-center'>
						<Link href='/evolve'>
							<Image
								src={evolve_icon}
								className='w-14 h-14 ml-1 cursor-pointer'
								alt='evolve'
							/>
						</Link>

						<h2 className={`${bebas_neue.className} text-3xl ml-4 text-white`}>
							EVOLVE
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
			<div className='py-20 min-h-screen w-full max-w-7xl'>
				<div className='pt-4'>
					<div>
						<h2 className='font-bold text-2xl'>Entrenamiento</h2>
						<p className='opacity-60'>Hoy, 29 de Junio</p>
					</div>

					{/* <div> */}
					<ul className='grid grid-cols-7 mt-6'>
						<li className='flex items-center'>
							<div className='text-center'>
								<p className='text-sm opacity-60'>LUN</p>
								<p className='text-xl font-semibold mt-1 px-2 py-1'>24</p>
							</div>
						</li>
						<li className='flex items-center'>
							<div className='text-center'>
								<p className='text-sm opacity-60'>MAR</p>
								<p className='text-xl font-semibold mt-1 rounded-xl px-2 py-1'>
									25
								</p>
							</div>
						</li>
						<li className='flex items-center'>
							<div className='text-center'>
								<p className='text-sm opacity-60'>MIE</p>
								<p className='text-xl font-semibold mt-1 rounded-xl px-2 py-1'>
									26
								</p>
							</div>
						</li>
						<li className='flex items-center'>
							<div className='text-center'>
								<p className='text-sm opacity-60'>JUE</p>
								<p className='text-xl font-semibold mt-1 rounded-xl px-2 py-1'>
									27
								</p>
							</div>
						</li>
						<li className='flex items-center'>
							<div className='text-center'>
								<p className='text-sm opacity-60'>VIE</p>
								<p className='text-xl font-semibold mt-1 rounded-xl px-2 py-1'>
									28
								</p>
							</div>
						</li>
						<li className='flex items-center'>
							<div className='text-center'>
								<p className='text-sm opacity-60 '>SAB</p>
								<p className='text-xl font-semibold mt-1 rounded-xl px-2 py-1 bg-primary  text-black'>
									29
								</p>
							</div>
						</li>
						<li className='flex items-center'>
							<div className='text-center'>
								<p className='text-sm opacity-60'>DOM</p>
								<p className='text-xl font-semibold mt-1 rounded-xl px-2 py-1'>
									30
								</p>
							</div>
						</li>
					</ul>
					{/* </div> */}
				</div>

				<div className='grid grid-cols-6 gap-2 my-10'>
					<button className='flex justify-center col-start-1 col-end-4 bg-slate-700 hover:bg-slate-600 active:bg-slate-700 p-3 rounded-xl'>
						Selecciona una rutina
						<FontAwesomeIcon
							className='w-6 pl-2 text-white'
							icon={faChevronDown}
						/>
					</button>
					<button className='col-start-5 hover:bg-slate-600 active:bg-slate-700 p-3 rounded-xl'>
						Rutinas
					</button>
				</div>

				<main className='flex justify-center text-center'>
					<div className='flex-row justify-center items-center'>
						<h3 className={`${bebas_neue.className} text-2xl mb-2`}>
							¡BIENVENIDO A EVOLVE!
						</h3>

						<p className='opacity-60 mb-4'>
							Todavía no registraste ningún entrenamiento. <br /> Empezá
							seleccionando una rutina o agregá un ejecicio.
						</p>

						<button className='flex w-full justify-center hover:text-primary active:opacity-70 cursor-pointer font-medium'>
							<FontAwesomeIcon className='w-6 pr-2' icon={faCirclePlus} />
							Agregar ejercicio
						</button>
					</div>
				</main>
			</div>
			{/* </section> */}

			<aside className='fixed bottom-0 flex justify-center bg-dark w-full max-w-7xl h-16 rounded-xl mb-2 shadow-[0px_0px_5px_2px_] shadow-primary'>
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
