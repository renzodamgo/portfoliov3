import Head from "next/head";

export const AboutMe = () => {
	return (
		<section id="Acerca de mí">
			<Head>
				<title>Renzo Damian - Desarrollador Fullstack</title>
			</Head>
			<div className="container mx-auto mt-10 px-10 ">
				<div className="hyphen grid  gap-5 text-center font-serif">
					<h1>Hola, me llamo Renzo</h1>
					<p>
						Soy un programador apasionado por la lectura, el viaje y el
						ciclismo. Mi experiencia laboral se centra en el uso de Java y React
						para desarrollar aplicaciones web y móviles. Me gusta estar al día
						con las últimas tendencias en tecnología y siempre estoy buscando
						nuevos desafíos para seguir creciendo como desarrollador. Me
						caracterizo por ser una persona proactiva, responsable y con un gran
						deseo de aprender y mejorar continuamente¹.
					</p>
					<div className="hyphen text-justify text-sm">
						<p className="">
							¹ Esta última oración ha sido generada por ChatGPT por programador
							introvertido.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
