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
import user_image from '../../../public/assets/user-image.jpeg';

export default function Profile() {
	return (
		<div className='flex bg-gradient-to-br from-[#11182e] to-[#1a2642] text-white h-full max-w-screen flex-col items-center'>
			<nav className='flex justify-center py-2 px-4 w-screen font-medium fixed border-b-2 border-b-primary bg-dark z-10'>
				<div className='flex w-full justify-between max-w-7xl'>
					<div className='flex items-center'>
						<Link href='/'>
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

			<section className='py-20 min-h-screen w-full max-w-7xl'>
				<div className='flex justify-center text-center'>
					<div className='mt-10'>
						<Image
							src={user_image}
							className='w-52 rounded-full shadow-xl'
							alt='user_image'
						/>
						<p className='mt-4 font-semibold text-xl'>FACU G</p>
					</div>
				</div>

				<div className='bg-darkslow p-10 mt-10 rounded-xl'>
					<p className='font-medium opacity-60 mb-2'>Información personal</p>

					<div className='flex w-full justify-between items-center border-2 border-gray-500 focus:border-primary rounded-lg bg-transparent'>
						<label className='font-medium ml-10'>Nombre</label>
						<input
							className='bg-transparent border-none opacity-60 p-4 w-2/4'
							type='text'
							value='Facundo Gómez'
						/>
					</div>

					<div className='flex w-full justify-between items-center mt-4 border-2 border-gray-500 focus:border-primary rounded-lg bg-transparent'>
						<label className='font-medium ml-10'>Email</label>
						<input
							className='bg-transparent border-none opacity-60 p-4 w-2/4'
							type='text'
							value='facuugomez67@gmail.com'
						/>
					</div>

					<div className='flex justify-between mt-6'>
						<button className='bg-slate-700 hover:bg-slate-600 active:bg-slate-700 px-4 py-2 rounded-xl'>
							Cerrar sesión
						</button>
						<button className='bg-red-600 hover:bg-red-500 active:bg-red-600 px-4 py-2 rounded-xl'>
							Eliminar cuenta
						</button>
					</div>
				</div>
			</section>

			<aside className='fixed bottom-0 flex justify-center bg-dark w-full max-w-7xl h-16 rounded-xl mb-2'>
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
