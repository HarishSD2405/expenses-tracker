import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useUser from './hooks/useUser'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionType from './components/SectionType'
import SectionSummary from './components/SectionSummary'

export default function App() {
	const user = useUser(),
			isUserSignedIn = user !== null;
	return (
		<BrowserRouter>
			<Header />

			<main>
				<h1 className="txt-center">Finance Management</h1>

				{isUserSignedIn ?
					<Routes>
						<Route
							path='/'
							element={[
								<SectionType type='food' />,
								<SectionType type='grocery'/>,
								<SectionType type='travel'/>,
								<SectionType type='education'/>,
								<SectionType type='misc'/>
							]}
						/>
						<Route
							path='/summary'
							element={<SectionSummary />}
						/>
						<Route
							path='/*'
							element={<h1 className="txt-center">404 Error - Page Not Found</h1>}
						/>
					</Routes>
					:
					<p className="txt-center">Sign in with Google to use the app.</p>
				}
			</main>

			<Footer />
		</BrowserRouter>
	);
}