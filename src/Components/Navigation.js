import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../Assets/home.svg';
import { ReactComponent as StatsIcon } from '../Assets/statistics.svg';
import { ReactComponent as NewHabit } from '../Assets/newhabit.svg';
import { ReactComponent as Settings } from '../Assets/settings.svg';

export default function Navigation() {
	return (
		<NavigationWrapper>
			<NavLinkStyled
				activeClassName='active'
				to='/start'
			>
				<HomeIcon />
			</NavLinkStyled>
			<NavLinkStyled
				activeClassName='active'
				to='/habitstracking'
			>
				<StatsIcon />
			</NavLinkStyled>
			<NavLinkStyled
				activeClassName='active'
				to='/habits'
			>
				<NewHabit />
			</NavLinkStyled>
			<NavLinkStyled
				activeClassName='active'
				to='/settings'
			>
				<Settings />
			</NavLinkStyled>
		</NavigationWrapper>
	);
}

const NavigationWrapper = styled.div`
	width: 100%;
	height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
	opacity: 0.5;

	&.active {
		opacity: 1;
	}
`;
