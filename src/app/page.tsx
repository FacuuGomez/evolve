import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@tremor/react';
import { Navbar } from '@/components/Navbar';
import { TableComponent } from '@/components/Table';
import { AreaChartComponent } from '@/components/AreaChart';
import { DonutChartComponent } from '@/components/DonutChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { bebas_neue } from '../../public/fonts/fonts';
import exercise_image from '../../public/assets/exercise.svg';
import evolve_icon from '../../public/assets/evolve-dark-2.png';

export default function Home() {
	return (
		<main className='flex bg-gradient-to-br from-[#11182e] to-[#1a2642] text-white min-h-screen max-w-screen flex-col items-center'>
			<Navbar />

			<section className='flex max-w-7xl h-screen w-full justify-between items-center'>
				<div className='w-2/4 text-justify'>
					<h1 className={`${bebas_neue.className} text-7xl mb-4`}>
						¡BIENVENIDO A EVOLVE!
					</h1>
					<p>
						Nuestra aplicación te permite registrar tus ejercicios, series,
						repeticiones y pesos. Con estos datos, Evolve genera estadísticas
						para que puedas seguir tu evolución y mejorar tu rendimiento en el
						gimnasio. <br /> ¡Entrena de manera más inteligente con Evolve!
					</p>

					<Link href='/login'>
						<button className='p-2 mt-8 border-2 rounded-lg border-primary hover:bg-primary hover:text-black transition-all duration-200'>
							Empezar
						</button>
					</Link>
				</div>

				<Image
					src={exercise_image}
					className='w-96 h-96 ml-1 drop-shadow-lg'
					alt='evolve'
				/>
			</section>

			<section className='max-w-7xl w-full'>
				<div className='mb-10'>
					<h3 className='text-3xl font-semibold'>
						Seguí la evolución de tu entrenamiento.
					</h3>
					<p className='text-xl font-medium opacity-60 mt-2'>
						Visualizá mediante estadísticas y sus distintos filtros tu
						rendimiento en cada serie y ejercicio a lo largo del tiempo.
					</p>
				</div>

				<div className='grid grid-cols-6 gap-4'>
					<Card className='col-span-4 rounded-3xl p-10 mr-4'>
						<TableComponent />
					</Card>

					<Card className='col-span-2 mx-auto rounded-3xl p-10'>
						<DonutChartComponent />
					</Card>
				</div>

				<Card className='col-span-4 mx-auto mt-4 rounded-3xl p-10'>
					<h3 className='font-bold text-xl'>Peso por mes</h3>
					<p className='opacity-70'>
						Seguimiento de los diferentes pesos a través del tiempo.
					</p>
					<AreaChartComponent />
				</Card>
			</section>

			<footer className='flex-col content-center w-full border-t-2 border-t-primary  mt-32'>
				<div className='flex justify-center'>
					<div className='flex justify-between max-w-7xl w-full py-12'>
						<div className='flex items-center'>
							<Image
								src={evolve_icon}
								className='w-14 h-14 ml-1 cursor-pointer'
								alt='evolve'
							/>
							<h2 className={`${bebas_neue.className} text-3xl ml-4`}>
								EVOLVE
							</h2>
							<hr className='border h-10 mx-2 rounded border-primary' />
							<p>Seguimiento de tu evolución.</p>
						</div>

						<div className='flex-col text-end'>
							<Link href='/login'>
								<button className='p-2 border-2 rounded-lg border-primary hover:bg-primary hover:text-black transition-all duration-200'>
									Empezar
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className='flex justify-center'>
					<hr className='border max-w-7xl w-full rounded opacity-80' />
				</div>

				<div className='flex justify-center py-4'>
					<div className='max-w-7xl w-full flex justify-between items-center'>
						<p className='text-sm opacity-80'>© 2024 Geekhound, Inc.</p>

						<ul className='flex items-center'>
							<li>
								<FontAwesomeIcon
									className='w-7 opacity-80 hover:opacity-100 active:opacity-100 cursor-pointer'
									icon={faGlobe}
								/>
							</li>
							<li>
								<a href='https://www.instagram.com/geekhound/' target='_blank'>
									<FontAwesomeIcon
										className='w-7 mx-4 opacity-80 hover:opacity-100 active:opacity-100 cursor-pointer'
										icon={faInstagram}
									/>
								</a>
							</li>
							<li>
								<FontAwesomeIcon
									className='w-7 opacity-80 hover:opacity-100 active:opacity-100 cursor-pointer'
									icon={faXTwitter}
								/>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</main>
	);
}
