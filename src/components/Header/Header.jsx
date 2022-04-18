import "./Header.css"
import { NavLink } from "react-router-dom"

export default function Header() {
	const menuList = [
		{ title: "Archive", path: "archive" },
		{ title: "About Us", path: "about_us" },
	]
	return (
		<nav>
			<div className='menu__point'>
				<NavLink to='' key='main'>
					<p className='p2'>Main</p>
				</NavLink>
			</div>
			<ul className='menu'>
				{menuList.map(point => (
					<NavLink className='menu__point' to={point.path} key={point.path}>
						<p className='p2'>{point.title}</p>
					</NavLink>
				))}
			</ul>
		</nav>
	)
}
