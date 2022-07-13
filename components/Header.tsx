import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderSection>
      <Container>
        <Logo>
          <Icon />
          <Title>unit converter</Title>
        </Logo>
      </Container>
    </HeaderSection>
  );
}

const HeaderSection = styled.header`
  padding-left: 10px;
  padding-block: 5px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 714px;
`;

const Logo = styled.div`
  display: flex;
  width: 100%;
  max-width: 714px;
  align-items: center;
`;

const Icon = styled(SwitchHorizontalIcon)`
  width: 20px;
  height: 18px;
  color: #2e0039;
  margin-right: 0.5em;
  cursor: pointer;
`;

const Title = styled.p`
  display: inline-flex;
  font-size: 20px;
  line-height: 30px;
  font-family: "poppins";
  font-weight: 900;
  color: #2e0039;
  align-items: center;
`;
