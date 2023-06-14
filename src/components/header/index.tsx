import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderContainerProps {
	isBlack: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${({ isBlack }) => (isBlack ? 'var(--background)' : 'transparent')};
  transition: background-color 0.3s ease-in-out;
  z-index: 999;

  @media (max-width: 1024px) {
    background-color: var(--background);
  }

  .container {
    display: flex;
    align-items: center;
		justify-content: space-between;
		padding: .7rem 2rem;

    .first {
			display: flex;
			align-items: baseline;

      h1 {
        a {
          color: var(--red);
          font-weight: 800;
					font-size: 1.8rem;
        }
      }
			nav{
				margin-left: 1rem;
				padding: 1rem;
				ul{
					display: flex;
					list-style: none;

					li{
						margin-left: 1rem;
					}
				}
			}
    }

		.second{
			display: flex;
			align-items: baseline;
			ul{
				list-style: none;
				display: flex;
				align-items: center;
				li{
					margin-left: 1rem;
				}
			}
		}
  }
`;

const Header: React.FC = () => {
	const [isBlack, setIsBlack] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsBlack(window.innerWidth < 1024);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<HeaderContainer isBlack={isBlack}>
			<div className="container">
				<div className="first">
					<h1>
						<Link href="/">AppFlix</Link>
					</h1>
					<nav>
						<ul>
							<li>Inicio</li>
							<li>Série</li>
							<li>Filme</li>
							<li>Bombando</li>
							<li>Minha Lista</li>
							<li>Navegar por idiomas</li>
						</ul>
					</nav>
				</div>
				<div className="second">
					<ul>
						<li><Image src="/search.svg" width="25" height="25" alt="Search" /></li>
						<li>Infantil</li>
						<li><Image src="/notificacao.svg" width="25" height="25" alt="Notificação" /></li>
						<li><Image src="/icon.png" width="35" height="35" alt="Icone" /></li>
					</ul>
				</div>
			</div>
		</HeaderContainer>
	);
};

export default Header;
