import Head from "next/head";
import Header from "@/components/header";
import { styled } from "styled-components";

const Filme = styled.div`
  background-image: url("/background.webp");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  padding-bottom: 1024px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>AppFlix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Filme />
      <Container>

      </Container>
    </>
  )
}
