import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  transition: background-color 0.3s ease-in-out;
  z-index: 999;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 3rem;
  }

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
    nav {
      margin-left: 1rem;
      padding: 1rem;
      ul {
        display: flex;
        list-style: none;

        li {
          margin-left: 1rem;
          a {
            color: var(--white);
            text-decoration: none;
          }
        }
      }
    }
  }

  .second {
    display: flex;
    align-items: baseline;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      li {
        margin-left: 1rem;
        a {
          color: var(--white);
          text-decoration: none;
        }
      }
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 60px;
  right: 60px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  div {
    p {
      margin-bottom: 1rem;
    }
  }
`;

const Header = () => {
	const [showProfiles, setShowProfiles] = useState(false);

	const handleProfileHover = () => {
		setShowProfiles(true);
	};

	const handleProfileLeave = () => {
		setShowProfiles(false);
	};

	const [headerStyle, setHeaderStyle] = useState({});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition >= 650) {
			setHeaderStyle({
				backgroundColor: 'var(--background)',
				backgroundImage: 'none',
			});
		} else {
			setHeaderStyle({
				backgroundColor: '',
				backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent)',
			});
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<HeaderContainer style={headerStyle}>
			<div className="container">
				<div className="first">
					<h1>
						<Link href="/">AppFlix</Link>
					</h1>
					<nav>
						<ul>
							<li>
								<Link href="/">Inicio</Link>
							</li>
							<li>
								<Link href="/series">Série</Link>
							</li>
							<li>
								<Link href="/filmes">Filme</Link>
							</li>
							<li>
								<Link href="/bombando">Bombando</Link>
							</li>
							<li>
								<Link href="/minha-lista">Minha Lista</Link>
							</li>
							<li>
								<Link href="/idiomas">Navegar por idiomas</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="second">
					<ul>
						<li>
							<Link href="/search">
								<Image src="/search.svg" width="25" height="25" alt="Search" />
							</Link>
						</li>
						<li>
							<Link href="/infantil">Infantil</Link>
						</li>
						<li>
							<div onMouseEnter={handleProfileHover} onMouseLeave={handleProfileLeave}>
								<Image src="/notificacao.svg" width="25" height="25" alt="Notificação" />
							</div>
							{showProfiles && (
								<Modal>
									<div>
										<p>Notificação 1</p>
										<p>Notificação 2</p>
										<p>Notificação 3</p>
									</div>
								</Modal>
							)}
						</li>
						<li>
							<div onMouseEnter={handleProfileHover} onMouseLeave={handleProfileLeave}>
								<Image src="/icon.png" width="35" height="35" alt="Icone" />
							</div>
							{showProfiles && (
								<Modal>
									<div>
										<p>Perfil 1</p>
										<p>Perfil 2</p>
										<p>Perfil 3</p>
									</div>
								</Modal>
							)}
						</li>
					</ul>
				</div>
			</div>
		</HeaderContainer>
	);
};

export default Header;