import TopContainer from "./Component/TopContainer";
import HeroContainer from "./Component/HeroContainer";
import SynergyContainer from "./Component/SynergyContainer";

import styled from "styled-components";
import { useState } from "react";

const App = () => {
  const [selectHeroList, setSelectHeroList] = useState(["AoShin", "AurelionSol", "Bard", "Pyke", "Shyvana", "Yasuo", "Zoe", "", ""]);

  const setClearHandler = () => {
    setSelectHeroList(() => {
      return ["", "", "", "", "", "", "", "", ""];
    })
  }

  const heroChangeHandler = (newHeroList) => {
    setSelectHeroList(newHeroList);
  };

  return (
  <ChessContainer>
    <BorderContainer>
      <TopContainer onClear={setClearHandler} />
      <Content>
        <HeroContainer />
        <SynergyContainer items={selectHeroList} onChangeHeroList={heroChangeHandler}/>
      </Content>
    </BorderContainer>
  </ChessContainer>
  );
};

const ChessContainer = styled.div`
  position: absolute;
  width: 1216px;
  height: 644.4px;
  margin: 5rem 5% 5rem 10%;
  background-color: rgb(5, 13, 16);
  border: solid 3px rgb(127, 88, 37);

  @media screen and (min-width: 1537px){
    width: 1600px;
    height: 800px;
  }
`;

const BorderContainer = styled.div`
  margin: 5px 3px 5px 3px;
  border: solid 3px rgb(65, 68, 67);

  @media screen and (min-width: 1537px){
    width: 1600px;
    height: 785px;
  }
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export default App;
