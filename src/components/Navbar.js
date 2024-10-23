import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsOpen from '../hooks/useIsOpen'
import useOutsideClick from '../hooks/useOutsideClick'

function ActiveLink({ href, children, handleToggle }) {
	const location = useLocation().pathname,
			isActive = location === href;
	return (
		<Link to={href} className={isActive ? 'active' : ''} onClick={handleToggle}>
			{children}
		</Link>
	)
}

export default function Navbar({ signOut }) {
	const refNavBar = useRef(),
			[isOpen, handleToggle] = useIsOpen();
	useOutsideClick({ val: isOpen, ref: refNavBar, handler: handleToggle });
	return (
		<>
			
			<nav id="navbar" ref={refNavBar} data-visible={isOpen}>
				<ul>
					<li>
						<ActiveLink href="/" handleToggle={handleToggle}>Expense</ActiveLink>
					</li>
					<li>
						<ActiveLink href="/summary" handleToggle={handleToggle}>Summary</ActiveLink>
					</li>
					<li>
						<button onClick={signOut}>Sign Out</button>
					</li>
				</ul>
			</nav>
		</>
	);
}