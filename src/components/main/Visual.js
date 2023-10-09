import { Link } from "react-router-dom";
function Visual({ selectedMenu, setSelectedMenu }) {
	const handleClick = (menu) => {
		setSelectedMenu(menu);
	};
	return <figure id='visual'>
		<Link to='/department' onClick={() => handleClick('menu1')}>menu1</Link>
		<Link to='/department' onClick={() => handleClick('menu2')}>menu2</Link>
		<Link to='/department' onClick={() => handleClick('menu3')}>menu3</Link>
		<Link to='/department' onClick={() => handleClick('menu4')}>menu4</Link>
	</figure>;
}

export default Visual;
