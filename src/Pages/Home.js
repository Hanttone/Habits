import styled from 'styled-components/macro';
import Button from '../Components/Button';
import Header from '../Components/Header';

export default function Home() {
	return (
		<ContentBackground>
			<Header
				color='white'
				text='Habits Tracker'
			/>
			<Button text='Start' width='60%' />
		</ContentBackground>
	);
}

const ContentBackground = styled.main`
	background-image: url('https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80');
	background-size: 160%;
	background-repeat: no-repeat;
	background-position: 33% 0%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 10vh;
	padding-bottom: 10vh;
	align-items: center;
	height: 100vh;
	width: 100%;
`;
