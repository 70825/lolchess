import "./App.css";

import TopContainer from "./Component/TopContainer";
import HeroContainer from "./Component/HeroContainer";
import SynergyContainer from "./Component/SynergyContainer";

import styled from "styled-components";

const App = () => (
  <ChessContainer>
    <BorderContainer>
      <TopContainer />
      <Content>
        <HeroContainer />
        <SynergyContainer/>
      </Content>
    </BorderContainer>
  </ChessContainer>
);

const ChessContainer = styled.div`
  margin: 5rem 10rem 10rem 10rem;
  background-color: rgb(5, 13, 16);
  border: solid 3px rgb(127, 88, 37);
`;

const BorderContainer = styled.div`
  margin: 5px 3px 5px 3px;
  border: solid 3px rgb(65, 68, 67);
`;

const Content = styled.div`
  display: flex;
`;

export default App;
