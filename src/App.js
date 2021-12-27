import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Components/Navbar/Navbar';
import MyBulls from './Components/MyBulls/MyBulls';
import Explorer from './Components/Explorer/Explorer';
import NavbarNew from './Components/Navbar/NavbarNew';
import styled from 'styled-components';

function App() {
	return (
		<>
			<NavbarNew />
			<Wrapper>
				<Home />
				{/* <MyBulls /> */}
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div``;

export default App;
