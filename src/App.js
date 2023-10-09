import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Members from './components/sub/Members';

import './scss/style.scss';

function App() {
	const [selectedMenu, setSelectedMenu] = useState('');
	return (
		<>
			{/* 중복되는 라우터명이 있을때 처음 연결된 라우터 하나만 연결 */}
			<Switch>
				{/* 메인페이지 전용 라우터  */}
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
					<Content />
				</Route>

				{/* 서브페이지 전용 header 라우터 */}
				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department'>
				<Department selectedMenu={selectedMenu} />
			</Route>
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Route path='/members' component={Members} />
			<Footer />
		</>
	);
}

export default App;
