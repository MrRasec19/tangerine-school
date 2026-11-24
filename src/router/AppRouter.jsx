import { Route, Routes } from 'react-router-dom';
import { AboutUs, Contact, HomePage } from '../home';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/about-us" element={<AboutUs />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
		</Routes>
	);
};
