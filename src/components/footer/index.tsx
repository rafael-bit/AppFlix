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
			margin-bottom: 1rem;
			a{
				color: var(--text-link);
				font-size: 13px;
				:hover{
					text-decoration: underline;
				}
			}
			img{
				margin-left: .7rem;
			}
			button{
				padding: .5rem;
				border: 1px solid var(--text-link);
				background: var(--background);
				color: var(--text-link);
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
				<li><Link href="/">Audiodescrição</Link></li>
				<li><Link href="/">Relações com investidores</Link></li>
				<li><Link href="/">Avisos legais</Link></li>
				<li><button>Código do serviço</button></li>
				<li>&copy; 2023 Appflix, Inc.</li>
			</ul>
			<ul>
				<li><Link href="/">Central de ajuda</Link></li>
				<li><Link href="/">Carreiras</Link></li>
				<li><Link href="/">Preferências de cookies</Link></li>
			</ul>
			<ul>
				<li><Link href="/">Cartão pre-pago</Link></li>
				<li><Link href="/">Termos de uso</Link></li>
				<li><Link href="/">Informações corporativas</Link></li>
			</ul>
			<ul>
				<li><Link href="/">Imprensa</Link></li>
				<li><Link href="/">Privacidade</Link></li>
					<li><Link href="/">Entre em contato</Link></li>
			</ul>
		</FooterContainer>
	)
}