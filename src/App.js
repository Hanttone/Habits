import GlobalStyle from './Services/GlobalStyle';
import styled from 'styled-components/macro';
import Button from './Components/Button';
import Header from './Components/Header';

function App() {
	return (
		<AppWrapper>
			<GlobalStyle />
			<Button text='Click Me' width='40%' />
			<Header color='red' text='test' />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	width: 100%;
	height: 100vh;
`;
