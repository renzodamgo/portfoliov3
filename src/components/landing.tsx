export const Landing = () => {
	return (
		<div>
			<div className="container px-6 md:mx-auto">
				<div className="grid gap-4">
					<h1 className="mt-10 text-4xl">Hola, bienvenido a mi blog</h1>
					<p>
						Me gusta crear, investigar y romper cosas. Este es mi blog donde
						comparto todo lo que he aprendo para recordarlo cuando me lo olvide
						mañana.
					</p>
				</div>
			</div>
			<section>
				<div className="container mt-10 px-6 md:mx-auto">
					<div className="grid h-[70vh] gap-8 from-red-800 via-yellow-600 to-yellow-500 ch:overflow-hidden ch:rounded-md ch:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] md:grid-cols-3 md:grid-rows-3 md:ch:px-10 md:ch:py-10">
						<div className="relative md:col-span-2 md:row-span-2">
							<div className="relative flex h-full w-[55%] flex-col">
								<h1 className="flex-none font-light md:text-5xl md:leading-tight">
									Como crear un blog con Nextjs y tailwind
								</h1>
								<div className="flex flex-none gap-3">
									<span>Nextjs</span>
									<span>Tailwind</span>
								</div>
								<div className="bg-opacity-linear grow overflow-hidden">
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Quae, quibusdam rem nemo repellendus saepe id nesciunt
										dolores rerum quas commodi cum iste voluptates ut
										exercitationem iusto qui. Rem deserunt fugit, incidunt dicta
										sed enim vitae dolorum quibusdam illo odio cumque provident
										voluptas optio harum obcaecati quae eos quis, laborum animi
										necessitatibus ex asperiores ipsam, nesciunt nobis!
										Cupiditate, numquam perspiciatis atque voluptatum nobis
										dolorem repudiandae nam corporis dicta consequatur velit
										voluptate hic ex deserunt nostrum molestias est repellendus
										dolor inventore remsssssssssss. Repellendus architecto
										perferendis numquam obcaecati excepturi vero quasi ut? Esse
										odio eligendi delectus totam quis dolores aperiam, quam
										debitis saepe?Repellendus architecto perferendis numquam
										obcaecati excepturi vero quasi ut? Esse odio eligendi
										delectus totam quis dolores aperiam, quam debitis
										saepe?Repellendus architecto perferendis numquam obcaecati
										excepturi vero quasi ut? Esse odio eligendi delectus totam
										quis dolores aperiam, quam debitis saepe?
									</p>
								</div>
							</div>
							<div className="absolute right-0 top-0 h-full w-[40%]">
								<img
									className="h-full object-cover"
									src="https://mllj2j8xvfl0.i.optimole.com/cb:pJlS~36fbd/w:713/h:713/q:90/f:avif/https://s15165.pcdn.co/wp-content/uploads/2022/07/wix.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="md:col-span-1 md:row-span-1">ds</div>
						<div className="md:col-span-1 md:row-span-1">ds</div>
						<div className="md:col-span-2 md:row-span-1">ds</div>
						<div className="md:col-span-1 md:row-span-1">ds</div>
					</div>
				</div>
			</section>
		</div>
	);
};
