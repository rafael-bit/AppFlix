import Image from "next/image"
import Link from "next/link"
import { styled } from "styled-components"

const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2rem 0rem;
	ul{
		list-style: none;
		margin-right: 5rem;
		li{	
			color: var(--text-link);
			font-size: 13px;
			margin-bottom: 1rem;
			img{
				margin-left: .7rem;
			}
		}
	}
`;

export default function Footer() {
	return (
		<FooterContainer>
			<ul>
				<li><div>
					<Link href="/"><Image src="/facebook.svg" width="25" height="25" alt="Rede Social" /></Link>
					<Link href="/"><Image src="/instagram.svg" width="25" height="25" alt="Rede Social" /></Link>
					<Link href="/"><Image src="/twitter.svg" width="25" height="25" alt="Rede Social" /></Link>
					<Link href="/"><Image src="/youtube.svg" width="25" height="25" alt="Rede Social" /></Link>
				</div></li>
				<li>Audiodescrição</li>
				<li>Relações com investidores</li>
				<li>Avisos legais</li>
				<li><button>Código do serviço</button></li>
				<li>&copy; 2023 Appflix, Inc.</li>
			</ul>
			<ul>
				<li>Central de ajuda</li>
				<li>Carreiras</li>
				<li>Preferências de cookies</li>
			</ul>
			<ul>
				<li>Cartão pre-pago</li>
				<li>Termos de uso</li>
				<li>Informações corporativas</li>
			</ul>
			<ul>
				<li>Imprensa</li>
				<li>Privacidade</li>
				<li>Entre em contato</li>
			</ul>
		</FooterContainer>
	)
}