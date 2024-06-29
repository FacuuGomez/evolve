import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { bebas_neue } from '../../public/fonts/fonts';
import evolve_icon from '../../public/assets/evolve-dark-2.png';

export const Navbar = () => {
	return (
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

					<h2 className={`${bebas_neue.className} text-3xl ml-4`}>EVOLVE</h2>
				</div>

				<ul className='flex items-center '>
					<li className='flex'>
						<button className='w-4 mr-4 cursor-pointer'>
							<FontAwesomeIcon
								className=' text-primary hover:opacity-70'
								icon={faMoon}
							/>
						</button>
					</li>

					<li className='hover:text-primary active:text-primary cursor-pointer'>
						<Link href='/contact'>Contacto</Link>
					</li>

					<hr className='border border-primary rounded h-8 ml-4' />

					<li className='mx-4 hover:text-primary active:text-primary cursor-pointer'>
						<Link href='/login'>Iniciar sesión</Link>
					</li>
					<li className='hover:text-primary active:text-primary cursor-pointer'>
						<Link href='/register'>Registrarse</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
