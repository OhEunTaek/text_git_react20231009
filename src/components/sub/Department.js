// import Layout from '../common/Layout';

// function Department({ selectedMenu }) {
// 	return (
// 		<Layout name={'Department'}>
// 			<main>
// 				<nav>
// 					<h1>탭</h1>
// 					<ul>
// 						<li className={selectedMenu === 'menu1' ? 'on' : ''}>menu1</li>
// 						<li className={selectedMenu === 'menu2' ? 'on' : ''}>menu2</li>
// 						<li className={selectedMenu === 'menu3' ? 'on' : ''}>menu3</li>
// 						<li className={selectedMenu === 'menu4' ? 'on' : ''}>menu4</li>
// 					</ul>
// 				</nav>
// 				<section>
// 					<article className={selectedMenu === 'menu1' ? 'on' : ''}>1</article>
// 					<article className={selectedMenu === 'menu2' ? 'on' : ''}>2</article>
// 					<article className={selectedMenu === 'menu3' ? 'on' : ''}>3</article>
// 					<article className={selectedMenu === 'menu4' ? 'on' : ''}>4</article>
// 				</section>
// 			</main>
// 		</Layout>
// 	);
// }

// export default Department;


import React, { useState } from 'react';
import Layout from '../common/Layout';

function Department({ selectedMenu }) {
	const [selectedTab, setSelectedTab] = useState(selectedMenu || 'menu1');

	const handleTabClick = (menu) => {
		setSelectedTab(menu);
	};
	return (
		<Layout name={'Department'}>
			<main>
				<nav>
					<h1>탭</h1>
					<ul>
						<li
							className={selectedTab === 'menu1' ? 'on' : ''}
							onClick={() => handleTabClick('menu1')}
						>
							menu1
						</li>
						<li
							className={selectedTab === 'menu2' ? 'on' : ''}
							onClick={() => handleTabClick('menu2')}
						>
							menu2
						</li>
						<li
							className={selectedTab === 'menu3' ? 'on' : ''}
							onClick={() => handleTabClick('menu3')}
						>
							menu3
						</li>
						<li
							className={selectedTab === 'menu4' ? 'on' : ''}
							onClick={() => handleTabClick('menu4')}
						>
							menu4
						</li>
					</ul>
				</nav>
				<section>
					<article className={selectedTab === 'menu1' ? 'on' : ''}>1</article>
					<article className={selectedTab === 'menu2' ? 'on' : ''}>2</article>
					<article className={selectedTab === 'menu3' ? 'on' : ''}>3</article>
					<article className={selectedTab === 'menu4' ? 'on' : ''}>4</article>
				</section>
			</main>
		</Layout>
	);
}

export default Department;

