import Head from 'next/head';
import { useRouter } from 'next/router';

const aboutContent = {
	'es-ES': {
		head: 'Renzo Damian - Desarrollador Fullstack',
		title: 'Hola, me llamo Renzo',
		description:
			'Soy un programador apasionado por la lectura, el viaje y el ciclismo. Mi experiencia laboral se centra en el uso de Java y React para desarrollar aplicaciones web y móviles. Me gusta estar al día con las últimas tendencias en tecnología y siempre estoy buscando nuevos desafíos para seguir creciendo como desarrollador. Me caracterizo por ser una persona proactiva, responsable y con un gran deseo de aprender y mejorar continuamente¹.',
		footnote:
			'¹ Esta última oración ha sido generada usando ChatGPT por programador introvertido.',
	},
	'en-US': {
		head: 'Renzo Damian - Fullstack Dev',
		title: "Hello, I'm Renzo",
		description:
			'I am a programmer passionate about reading, traveling and cycling. My work experience is focused on using Java and React to develop web and mobile applications. I like to keep up with the latest trends in technology and I am always looking for new challenges to keep growing as a developer. I characterize myself for being a proactive, responsible person with a great desire to learn and improve continuously¹.',
		footnote:
			'¹ This last sentence has been generated using ChatGPT by introverted programmer.',
	},
};

export const AboutMe = () => {
	const { locale, locales } = useRouter();
	const { head, title, description, footnote } =
		aboutContent[
			locale != undefined ? (locale as keyof typeof locales) : 'es-ES'
		];
	// console.log({ locale, locales, defaultLocale, asPath });
	return (
		<section id="Acerca de mí">
			<Head>
				<title>{head}</title>
			</Head>
			<div className="container mx-auto mt-10 px-10 ">
				<div className="hyphen grid  gap-5 text-center font-serif">
					<h1>{title}</h1>
					<p>{description}</p>
					<div className="hyphen text-justify text-sm">
						<p className="">{footnote}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
