import GlobalStyle from './Services/GlobalStyle';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
	return (
		<Router>
			<AppWrapper>
				<GlobalStyle />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/login'></Route>
					<Route path='/forgotlogin'></Route>
					<Route path='/signup'></Route>
					<Route path='/start'></Route>
					<Route path='/habits'></Route>
					<Route path='/habitstracking'></Route>
					<Route path='/settings'></Route>
				</Switch>
			</AppWrapper>
		</Router>
	);
}

export default App;

const AppWrapper = styled.div`
	width: 100%;
	height: 100vh;
`;
