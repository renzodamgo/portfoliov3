import { ReactNode } from 'react';
import { Navbar } from './ui/navbar';
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
