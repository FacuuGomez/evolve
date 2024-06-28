import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { bebas_neue } from '../../../public/fonts/fonts';
import evolve_icon from '../../../public/assets/evolve-dark-2.png';

const Contact = () => {
	return (
		<section className='bg-gradient-to-br from-[#11182e] to-[#1a2642] text-white h-screen'>
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
				</div>
			</nav>

			<div className='grid place-content-center h-screen w-screen'>
				<div className='grid place-items-center bg-darkslow p-16 rounded-xl'>
					<h3 className='font-bold text-5xl mb-8'>Contáctenos</h3>
					<div>
						<p className='text-2xl font-semibold'>
							Apliación desarrollada por Geekhound.
						</p>
						<p className='text-lg font-medium opacity-80 mt-2'>
							Empresa dedicada al desarrollo de páginas y aplicaciones web.
						</p>

						<div>
							<input
								className='flex w-full justify-center mt-8 py-4 border-2 border-gray-500 focus:border-primary rounded-lg bg-transparent'
								type='text'
								name='email'
								placeholder='Email'
							/>
							<input
								className='flex w-full justify-center mt-8 py-4 border-2 border-gray-500 focus:border-primary rounded-lg bg-transparent'
								type='text'
								name='asunto'
								placeholder='Asunto'
							/>

							<textarea
								className='flex w-full justify-center mt-8 py-4 border-2 border-gray-400 focus:border-primary rounded-lg bg-transparent'
								name='textarea'
								placeholder='Mensaje'
							></textarea>
						</div>

						<ul className='flex justify-center mt-6'>
							<li className='inline-flex items-center font-semibold opacity-80 hover:opacity-100 cursor-pointer'>
								<FontAwesomeIcon className='w-7 mr-2' icon={faGlobe} />
								Geekhound
							</li>
							<li className='flex'>
								<a
									className='inline-flex items-center font-semibold opacity-80 hover:opacity-100 cursor-pointer mx-4'
									href='https://www.instagram.com/geekhound/'
									target='_blank'
								>
									<FontAwesomeIcon className='w-7 mr-2' icon={faInstagram} />
									Instagram
								</a>
							</li>
							<li className='inline-flex items-center font-semibold opacity-80 hover:opacity-100 cursor-pointer'>
								<FontAwesomeIcon className='w-7 mr-2' icon={faXTwitter} />
								Twitter
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
