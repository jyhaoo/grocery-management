import styled from "styled-components";

const WelcomeContainer = styled.div`
  background-color: green;
  margin-top: 41px;
  margin-left: 71px;
  width: 176px;
  height: 36px;
  font-size: 24px;
`;

const Welcome = () => {
  return <WelcomeContainer>Hello user 👏</WelcomeContainer>;
};

export default Welcome;
