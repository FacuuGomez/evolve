import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { bebas_neue } from '../../../../public/fonts/fonts';
import evolve_icon from '../../../../public/assets/evolve-dark-2.png';

const Login = () => {
	return (
		<section className='bg-dark text-white h-screen'>
			<nav className='flex justify-center py-2 px-4 w-screen font-medium fixed border-b-2 border-b-primary'>
				<div className='flex w-full justify-between max-w-7xl'>
					<div className='flex items-center'>
						<Link href='/'>
							<Image
								src={evolve_icon}
								className='w-14 h-14 ml-1 cursor-pointer'
								alt='evolve'
							/>
						</Link>
						<h2 className={`${bebas_neue.className} text-3xl ml-4`}>EVOLVE</h2>
					</div>

					<ul className='flex items-center '>
						<button className='w-4 mr-4 cursor-pointer'>
							<FontAwesomeIcon
								className=' text-primary hover:opacity-70'
								icon={faMoon}
							/>
						</button>

						<li className='mr-4 hover:text-primary cursor-pointer'>Contacto</li>
						<hr className='border border-primary rounded h-8 mr-4' />
						<li className='hover:text-primary cursor-pointer'>
							<Link href='/login'>Iniciar sesión</Link>
						</li>
					</ul>
				</div>
			</nav>

			<div className='grid place-content-end h-screen w-screen'>
				<div className='grid place-items-center items-center h-screen'>
					<div className='grid place-items-center'>
						<h3 className='font-bold text-4xl'>Registrarse en Evolve</h3>

						<button className='flex justify-center mt-8 py-4 w-80 border-2 border-secundary hover:border-secundary_light font-medium bg-secundary rounded-lg hover:bg-secundary_light transition-all duration-200'>
							<FontAwesomeIcon className='w-6 mr-2' icon={faGoogle} />
							Continuar con Google
						</button>
						<button className='flex justify-center mt-4 py-4 w-80 border-2 font-medium border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300'>
							<FontAwesomeIcon className='w-6 mr-2' icon={faEnvelope} />
							Continuar con Email
						</button>
					</div>
				</div>

				<footer className='flex justify-center w-screen items-center h-28 border-t-2 border-t-primary'>
					<a className='h-6 text-blue-500 hover:underline cursor-pointer'>
						¿Ya tenés cuenta? Iniciar sesión
					</a>
				</footer>
			</div>
		</section>
	);
};

export default Login;
