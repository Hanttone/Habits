import GlobalStyle from './Services/GlobalStyle';
import styled from 'styled-components/macro';
import Button from './Components/Button';

function App() {
	return (
		<AppWrapper>
			<GlobalStyle />
			<Button text='Click Me' width='40%' />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	width: 100%;
	height: 100vh;
`;
