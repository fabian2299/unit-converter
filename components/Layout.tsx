import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  max-width: 1920px;
  & > main {
    overflow: auto;
  }
`;
