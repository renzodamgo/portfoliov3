import Link from 'next/link';

export const Custom404 = () => {
	return (
		<section id="Acerca de mí">
			<div className="container mx-auto mt-10 px-10 ">
				<div className="hyphen grid  gap-5 text-center font-serif">
					<p>¯\_(ツ)_/¯</p>
					<h1>
						No se ha encontrado
						<br />
						la página que buscaba 
					</h1>
					<p></p>
					<div className="hyphen text-justify text-sm">
						<p className="text-center">
							Quizá hubo un cambio en el nombre del artículo.
							<br />
							Puede regresar al blog haciendo
							<Link href={'/blog'}> click aquí.</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Custom404;
