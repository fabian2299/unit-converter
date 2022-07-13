import styled from "styled-components";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Text>Terms of service</Text>
        <Text>Privacy policy</Text>
      </Container>
    </footer>
  );
}

const Container = styled.div`
  background-color: #2e0039;
  color: white;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-family: "poppins";
  font-weight: 400;
`;
