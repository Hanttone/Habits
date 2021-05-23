import GlobalStyle from './Services/GlobalStyle';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Start from './Pages/Start';
import NewHabit from './Pages/NewHabit';
import Statistics from './Pages/Statistics';
import Settings from './Pages/Settings';

function App() {
	return (
		<Router>
			<AppWrapper>
				<GlobalStyle />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/forgotlogin'></Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
					<Route path='/start'>
						<Start />
					</Route>
					<Route path='/habits'>
						<NewHabit />
					</Route>
					<Route path='/habitstracking'>
						<Statistics />
					</Route>
					<Route path='/settings'>
						<Settings />
					</Route>
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
